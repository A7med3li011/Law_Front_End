import {
  Button,
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@mui/material";
import Cookies from "js-cookie";
import image from "../../utilities/assets/publicImage.png";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import axios from "axios";
import { baseUrl } from "../../utilities/Apis";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { login } from "../../redux/UserSlice";
export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loginSchema = yup.object({
    email: yup
      .string()
      .matches(
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
        "Invalid email format"
      )
      .required(),
    password: yup.string().min(8, "too weak").max(50, "too long").required(),
  });
  const loginformik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (data) => handleLogin(data),
    validationSchema: loginSchema,
  });

  async function handleLogin(data) {
    const { email, password } = data;

    const mydata = { email, password };
    await axios
      .post(`/api/user/login`, mydata)
      .then((res) => {
        localStorage.setItem("userID", res.data.user._id);
        dispatch(login(res.data));
        toast.success("welcome back");
        navigate("/home");
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
  }
  return (
    <div className="flex px-10 py-10 flex-col sm:flex-row  items-center h-[100vh] ">
      <div className=" w-full sm:w-2/3    h-ful py-10 ">
        <h2 className=" sm:w-2/3 w-full  px-3 text-xl font-semibold">
          Create an account
        </h2>
        <form
          onSubmit={loginformik.handleSubmit}
          className="sm:w-2/3 w-full  px-3 py-4 flex gap-y-1 flex-col"
        >
          <TextField
            className="py-10 w-full"
            label="email"
            name="email"
            value={loginformik.values.email}
            onChange={loginformik.handleChange}
            onBlur={loginformik.handleBlur}
          />
          <FormHelperText className="!ms-[6px] !text-red-500">
            {loginformik.touched.email && loginformik.errors.email}
          </FormHelperText>
          <FormControl variant="outlined" fullWidth>
            <InputLabel>Password</InputLabel>
            <OutlinedInput
              name="password"
              type={showPassword ? "text" : "password"}
              value={loginformik.values.password}
              onChange={loginformik.handleChange}
              onBlur={loginformik.handleBlur}
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
              {loginformik.touched.password && loginformik.errors.password}
            </FormHelperText>
          </FormControl>
          <Link
            to={"/forgetPassword"}
            className="text-primary text-xs text-end"
          >
            Forget Password?
          </Link>
          <Button
            type="sumbit"
            className="!bg-primary !text-white w-2/3 !mt-5 !mx-auto  !capitalize   "
          >
            Login Now
          </Button>

          <p className=" text-light text-center text-xs   ">
            <span>Don't have an account ? </span>
            <Link
              className="text-primary border-b-[1px] border-b-primary"
              to={"/register"}
            >
              sign up
            </Link>
          </p>
        </form>
      </div>
      <div className="w-full sm:w-1/3 bg-primary flex justify-center items-center h-full rounded-lg ">
        <img
          className="w-full border-2 border-white rounded-lg shadow-lg relative sm:right-1/3 h-fit  sm:h-4/5"
          src={image}
          alt="immmage"
        />
      </div>
    </div>
  );
}
