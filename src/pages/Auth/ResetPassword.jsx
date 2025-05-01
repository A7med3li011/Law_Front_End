import {
  Autocomplete,
  Button,
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  IconButton,
  InputAdornment,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Radio,
  RadioGroup,
  Select,
  TextField,
} from "@mui/material";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as yup from "yup";

import image from "../../utilities/assets/publicImage.png";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { useFormik } from "formik";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useState } from "react";
import axios from "axios";
import { baseUrl } from "../../utilities/Apis";

export default function ResetPassword() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const resetSchema = yup.object({
    password: yup.string().min(8, "too weak").max(50, "too long").required(),
  });

  async function handleRestPassword(data) {
    const object = {
      password: data.password,
      email: localStorage.getItem("email"),
    };
    console.log(object);
    await axios
      .post(`${baseUrl}/resetpassword`, object)
      .then((res) => {
        toast.success(res.data.message);
        navigate("/login");
      })
      .catch((err) => toast.error(err.response.data.message));
  }

  const resetformik = useFormik({
    initialValues: {
      password: "",
    },

    onSubmit: (e) => {
      handleRestPassword(e);
    },
    validationSchema: resetSchema,
  });

  return (
    <div className="flex ps-10 flex-col sm:flex-row items-center h-[100vh]">
      <div className="w-full sm:w-2/3 pt-10">
        <h2 className="sm:w-2/3 w-full px-3 text-xl font-semibold">
          Reset New Password
        </h2>
        <p className="sm:w-2/3 w-full px-3 text-xs text-light font-semibold">
          Please set a new password to secure your Work Mate account.
        </p>
        <form
          onSubmit={resetformik.handleSubmit}
          className="sm:w-2/3 w-full px-3 py-4 flex gap-y-2 flex-col"
        >
          {/* Password Field */}
          <FormControl variant="outlined" fullWidth>
            <InputLabel>Password</InputLabel>
            <OutlinedInput
              name="password"
              type={showPassword ? "text" : "password"}
              value={resetformik.values.password}
              onChange={resetformik.handleChange}
              onBlur={resetformik.handleBlur}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => setShowPassword(!showPassword)}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
            <FormHelperText className="!ms-[6px] !text-red-500">
              {resetformik.touched.password && resetformik.errors.password}
            </FormHelperText>
          </FormControl>

          {/* Submit Button */}
          <Button
            type="submit"
            className="!bg-primary !text-white w-2/3 !py-2 !mt-5 !mx-auto sm:!text-md"
          >
            sumbit
          </Button>

          {/* Already Have an Account? */}
        </form>
      </div>

      {/* Image Section */}
      <div className="w-full sm:w-1/3 bg-primary flex justify-center items-center h-full rounded-lg">
        <img
          className="w-full border-2 border-white rounded-lg shadow-lg relative sm:right-1/3 h-fit sm:h-4/5"
          src={image}
          alt="Registration Illustration"
        />
      </div>
    </div>
  );
}
