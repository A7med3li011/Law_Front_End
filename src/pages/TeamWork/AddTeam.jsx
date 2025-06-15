import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  CircularProgress,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Radio,
  FormControlLabel,
  RadioGroup,
  Typography,
  Divider,
} from "@mui/material";
import { useMutation, useQuery } from "react-query";
import axios from "axios";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { getBranches } from "../../utilities/Apis.js";
import AutoComplete from "../../ui/AutoComplete.jsx";
import { municipalities } from "../ProjectPage/SearchFilter.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

export const baseUrl = import.meta.env.VITE_API_URL;

const addUser = async (userData, token) => {
  try {
    const response = await axios.post(`${baseUrl}/user/adduser`, userData, {
      headers: {
        token,
        "Content-Type": "application/json",
      },
    });
    toast.success("تم إضافة المستخدم بنجاح");
    return response.data;
  } catch (err) {
    toast.error(err.response?.data?.message || "حدث خطأ أثناء إضافة المستخدم");
    throw err;
  }
};

export default function AddTeam() {
  const user = useSelector((store) => store.user);
  const token = user.token;

  const {
    data: branches = [],
    isLoading: branchesLoading,
    error,
  } = useQuery({
    queryKey: ["branches"],
    queryFn: () => getBranches(token),
    enabled: !!token,
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    location: "",
    branchId: "",
    access: ["full"],
  });

  const { mutate, isLoading } = useMutation(
    (userData) => addUser(userData, token),
    {
      onSuccess: () => {
        setFormData({
          name: "",
          email: "",
          password: "",
          phone: "",
          location: "",
          branchId: branches.length > 0 ? branches[0]._id : "",
          access: ["full"],
        });
      },
    }
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAccessChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      access: [e.target.value],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.password ||
      !formData.branchId
    ) {
      toast.warning("الرجاء ملء جميع الحقول المطلوبة");
      return;
    }

    if (!token) {
      toast.error("يجب تسجيل الدخول أولاً");
      return;
    }
    console.log("Sending formData:", formData);

    mutate(formData);
  };

  const handleLocationChange = (event, newValue) => {
    setFormData((prev) => ({
      ...prev,
      location: newValue || "",
    }));
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ direction: "rtl" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          p: 4,
          borderBottom: "1px solid #e0e0e0",
          mb: 4,
          borderRadius: "8px",
        }}
      >
        <Typography
          variant="h4"
          sx={{ fontWeight: "bold", color: "text.secondary" }}
        >
          اضافة عضو جديد
        </Typography>
        <Button
          type="submit"
          variant="contained"
          sx={{
            display: "flex",
            gap: "5px",
            flexDirection: "row-reverse",
            alignItems: "center",
            bgcolor: "#052F72",
            px: 5,
            py: 1,
            fontSize: "1rem",
            "&:hover": { bgcolor: "#041f5c" },
          }}
          disabled={isLoading}
        >
          <span className="text-xl">اضافة</span>
          <span className="text-xl">
            <FontAwesomeIcon icon={faPlus} className="text-sm" />
          </span>
        </Button>
      </Box>

      <Box sx={{ p: 4 }}>
        <Box sx={{ display: "flex", gap: 4, mb: 4 }}>
          <TextField
            fullWidth
            label="اسم العضو"
            name="name"
            value={formData.name}
            onChange={handleChange}
            variant="outlined"
            sx={{ "& .MuiOutlinedInput-root": { borderRadius: "8px" } }}
          />
          <TextField
            fullWidth
            label="البريد الالكتروني"
            name="email"
            value={formData.email}
            onChange={handleChange}
            type="email"
            variant="outlined"
            sx={{ "& .MuiOutlinedInput-root": { borderRadius: "8px" } }}
          />
        </Box>

        <Box sx={{ display: "flex", gap: 4, mb: 4 }}>
          <FormControl fullWidth>
            <InputLabel id="branch-label">الفرع</InputLabel>
            <Select
              labelId="branch-label"
              label="الفرع"
              name="branchId"
              value={formData.branchId}
              onChange={handleChange}
              sx={{ borderRadius: "8px", textAlign: "right" }}
            >
              {branchesLoading ? (
                <MenuItem value="">
                  <CircularProgress size={24} />
                </MenuItem>
              ) : (
                branches.map(
                  (branch) =>
                    branch.mastercompany._id == user.user._id && (
                      <MenuItem key={branch._id} value={branch._id}>
                        {branch.branchName}
                      </MenuItem>
                    )
                )
              )}
            </Select>
          </FormControl>

          <TextField
            fullWidth
            label="كلمة المرور"
            name="password"
            value={formData.password}
            onChange={handleChange}
            type="password"
            variant="outlined"
            sx={{ "& .MuiOutlinedInput-root": { borderRadius: "8px" } }}
          />
        </Box>

        <Box sx={{ display: "flex", gap: 4, mb: 4 }}>
          <TextField
            fullWidth
            label="رقم الهاتف"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="ادخل رقم الهاتف"
            variant="outlined"
            inputProps={{ style: { textAlign: "right" } }}
            sx={{ "& .MuiOutlinedInput-root": { borderRadius: "8px" } }}
          />

          <AutoComplete
            placeholder={"الموقع"}
            options={municipalities}
            value={formData.location}
            onchange={handleLocationChange}
            renderInput={(params) => (
              <TextField {...params} label="العنوان" required />
            )}
          />
        </Box>

        <Box sx={{ mb: 4, textAlign: "right" }}>
          <Typography variant="h6" sx={{ color: "#052F72", mb: 1 }}>
            الصلاحيات
          </Typography>
          <Divider sx={{ bgcolor: "#CFD8DC", mb: 2 }} />
          <FormControl
            component="fieldset"
            sx={{ width: "100%", color: "#052F72" }}
          >
            <RadioGroup
              value={formData.access[0]}
              onChange={handleAccessChange}
              sx={{ gap: 2 }}
            >
              <FormControlLabel
                value="read"
                control={<Radio />}
                label="قراءة فقط"
              />
              <FormControlLabel
                value="edit"
                control={<Radio />}
                label="تحرير"
              />
              <FormControlLabel
                value="full"
                control={<Radio />}
                label="صلاحيات كاملة"
              />
            </RadioGroup>
          </FormControl>
        </Box>
      </Box>
    </Box>
  );
}
