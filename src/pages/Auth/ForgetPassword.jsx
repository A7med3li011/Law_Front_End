import { Button, FormHelperText, TextField } from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import image from "../../utilities/assets/publicImage.png";
import axios from "axios";
import { baseUrl } from "../../utilities/Apis";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
export default function FrogetPassword() {
  const navigate = useNavigate("");
  const validationSchema = yup.object({
    email: yup
      .string()
      .matches(
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
        "Invalid email format"
      )
      .required(),
  });

  const forgetFormik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema,
    onSubmit: handleSendOtp,
  });

  async function handleSendOtp(email) {
    await axios
      .post(`${baseUrl}/resendotp`, email)
      .then((res) => {
        navigate("/forgetOtp");

        localStorage.setItem("email", email.email);
        toast.success("resend verification code successfully");
      })
      .catch((err) => toast.error(err.response.data.message));
  }

  return (
    <div className="flex px-10 py-10 flex-col sm:flex-row  items-center h-[100vh] ">
      <div className=" w-full sm:w-2/3    h-ful py-10 ">
        <h2 className=" sm:w-2/3 w-full  px-3 text-xl font-semibold">
          Forgot Password
        </h2>
        <p className=" sm:w-2/3 w-full  px-3 text-sm  text-light ">
          A verification code will be sent to your email to reset your password.
        </p>
        <form
          onSubmit={forgetFormik.handleSubmit}
          className="sm:w-2/3 w-full  px-3 py-4 flex gap-y-1 flex-col"
        >
          <TextField
            value={forgetFormik.values.email}
            onChange={forgetFormik.handleChange}
            onBlur={forgetFormik.handleBlur}
            className="py-10 w-full"
            label="email"
            name="email"
          />
          <FormHelperText className="!ms-[6px] !text-red-500">
            {forgetFormik.touched.email && forgetFormik.errors.email}
          </FormHelperText>

          <Button
            type="sumbit"
            className="!bg-primary !text-white w-2/3 !mt-5 !mx-auto  !capitalize   "
          >
            Send Verification Code
          </Button>
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
