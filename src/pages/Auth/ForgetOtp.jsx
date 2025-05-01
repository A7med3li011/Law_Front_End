import { useRef, useState } from "react";
import image from "../../utilities/assets/publicImage.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { baseUrl } from "../../utilities/Apis";
import { toast } from "react-toastify";

export default function ForgetOtp() {
  const [code1, setCode1] = useState("");
  const [code2, setCode2] = useState("");
  const [code3, setCode3] = useState("");
  const [code4, setCode4] = useState("");
  const [code5, setCode5] = useState("");
  const navigate = useNavigate();
  const inp1 = useRef("");
  const inp2 = useRef("");
  const inp3 = useRef("");
  const inp4 = useRef("");
  const inp5 = useRef("");
  async function handleSumbit(e) {
    e.preventDefault(e);
    const code = `${code1}${code2}${code3}${code4}${code5}`;
    await axios
      .post(`${baseUrl}/otp`, {
        code,
        email: localStorage.getItem("email"),
      })
      .then((res) => {
        toast.success("account verified successfully");
        navigate("/resetPassword");
      })
      .catch((err) => toast.error("invalid verification code"));
  }

  async function handleResendCode() {
    await axios
      .post(`${baseUrl}/resendotp`, {
        email: localStorage.getItem("email"),
      })
      .then((res) => toast.success("resend verification code successfully"))
      .catch((err) => console.log(err));
  }
  if (code1 != "") {
    inp2.current.focus();
  }

  if (code2 != "" && code1 != "") {
    inp3.current.focus();
  }
  if (code3 != "" && code2 != "" && code1 != "") {
    inp4.current.focus();
  }
  if (code3 != "" && code2 != "" && code1 != "" && code4 != "") {
    inp5.current.focus();
  }
  return (
    <div className="flex flex-col sm:flex-row justify-between  items-center h-[100vh] ">
      <div className="  w-full sm:w-1/3  mx-auto  h-ful py-10  ">
        <h2 className=" sm:max-w-3xl  my-5  w-full    px-3 text-xl font-semibold">
          Forgot Password
        </h2>
        <p className="text-xs text-light px-3">
          A verification code has been sent to
          <span className=""> {localStorage.getItem("email")}</span>,check your
          email to reset password.
        </p>
        <form
          onSubmit={handleSumbit}
          className="flex  justify-center gap-x-2 max-w-3xl mt-5  flex-wrap py-3"
        >
          <input
            value={code1}
            onChange={(e) => setCode1(e.target.value)}
            ref={inp1}
            maxLength={1}
            className="block text-center text-lg font-semibold  rounded-lg w-[40px] py-2 px-3 border-[1px] border-primary focus:outline-none "
          />
          <input
            value={code2}
            onChange={(e) => setCode2(e.target.value)}
            ref={inp2}
            maxLength={1}
            className="block text-center text-lg font-semibold  rounded-lg w-[40px] py-2 px-3 border-[1px] border-primary focus:outline-none "
          />
          <input
            value={code3}
            onChange={(e) => setCode3(e.target.value)}
            ref={inp3}
            maxLength={1}
            className="block text-center text-lg font-semibold  rounded-lg w-[40px] py-2 px-3 border-[1px] border-primary focus:outline-none "
          />
          <input
            value={code4}
            onChange={(e) => setCode4(e.target.value)}
            ref={inp4}
            maxLength={1}
            className="block text-center text-lg font-semibold  rounded-lg w-[40px] py-2 px-3 border-[1px] border-primary focus:outline-none "
          />
          <input
            value={code5}
            onChange={(e) => setCode5(e.target.value)}
            ref={inp5}
            maxLength={1}
            className="block text-center text-lg font-semibold  rounded-lg w-[40px] py-2 px-3 border-[1px] border-primary focus:outline-none "
          />
          <div className="w-full my-5">
            <button className="block  w-[93%]   mx-auto  py-2 px-3 my-4 bg-primary text-white rounded-xl text-lg font-semibold ">
              sumbit
            </button>
            <p
              onClick={handleResendCode}
              className="text-center text-sm cursor-pointer"
            >
              Haven't received the verification code?{" "}
              <span className="text-primary font-semibold"> Resend it </span>.
            </p>
          </div>
        </form>
      </div>
      <div className=" sm:w-1/3 bg-primary flex justify-center items-center h-full rounded-lg ">
        <img
          className="w-full border-2 border-white rounded-lg shadow-lg relative sm:right-1/3 h-fit sm:h-4/5"
          src={image}
          alt="immmag2"
        />
      </div>
    </div>
  );
}
