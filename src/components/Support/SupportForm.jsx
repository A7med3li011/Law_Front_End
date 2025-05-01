import { useState } from "react";
import Input from "../../ui/Input";
import AutoComplete from "../../ui/AutoComplete";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CustomButton from "../../ui/CustomButton";
import { useFormik } from "formik";
import { supportValidation } from "../../utilities/schema";
import { useMutation } from "react-query";
import { createSupport } from "../../utilities/Apis";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const arr = ["male", "female"];
export default function SupportForm() {
  // const [fName, setFName] = useState("");
  // const [sName, setSName] = useState("");
  // const [emial, setEmail] = useState("");
  // const [phone, setPhone] = useState("");
  // const [choose, setChoose] = useState("");
  const [attach, setAttach] = useState(null);
  const userToken = useSelector((store) => store.user.token);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setAttach(file);
    }
  };
  const supportFormik = useFormik({
    initialValues: {
      fname: "",
      lname: "",
      senderEmail: "",
      phone: "",
      type: "",
      message: "",
    },
    onSubmit: (e) => {
      let newObj = {};
      if (attach) {
        newObj = { ...e, attach };
      } else {
        newObj = e;
      }

      mutate(newObj);
    },
    validationSchema: supportValidation,
  });

  const { mutate, isLoading } = useMutation({
    mutationKey: ["create_Support"],
    mutationFn: (data, token) => createSupport(data, userToken),

    onSuccess: () => {
      toast.success("تم الارسال بنجاح");
    },
    onError: () => {
      toast.error("خطاء اثناء الارسال حاول مجددا");
    },
  });

  if (isLoading) return "ppppp";

  return (
    <form
      onSubmit={supportFormik.handleSubmit}
      className="text-black flex flex-wrap flex-row-reverse gap-y-6 my-10 border-[#AEB9E1] border-[1px] justify-between items-center rounded-xl w-full md:w-7/12 ms-auto py-3 px-5"
    >
      <Input
        isError={supportFormik.touched.fname && supportFormik.errors.fname}
        helper={supportFormik.touched.fname && supportFormik.errors.fname}
        inputStyle={"12px"}
        divDeco={"md:w-[48%] w-full   "}
        deco={"w-full  "}
        name={"fname"}
        value={supportFormik.values.fname}
        onChange={supportFormik.handleChange}
        onBlur={supportFormik.handleBlur}
        label={"الاسم الاول"}
      />
      <Input
        isError={supportFormik.touched.lname && supportFormik.errors.lname}
        helper={supportFormik.touched.lname && supportFormik.errors.lname}
        inputStyle={"12px"}
        divDeco={"md:w-[48%] w-full   "}
        deco={"w-full  "}
        name={"lname"}
        value={supportFormik.values.lname}
        onChange={supportFormik.handleChange}
        onBlur={supportFormik.handleBlur}
        label={"الاسم الثاني"}
      />
      <Input
        isError={
          supportFormik.touched.senderEmail && supportFormik.errors.senderEmail
        }
        helper={
          supportFormik.touched.senderEmail && supportFormik.errors.senderEmail
        }
        inputStyle={"12px"}
        divDeco={"md:w-[48%] w-full   "}
        deco={"w-full  "}
        name={"senderEmail"}
        value={supportFormik.values.senderEmail}
        onChange={supportFormik.handleChange}
        onBlur={supportFormik.handleBlur}
        label={"البريد الاكتروني"}
      />
      <Input
        isError={supportFormik.touched.phone && supportFormik.errors.phone}
        helper={supportFormik.touched.phone && supportFormik.errors.phone}
        inputStyle={"12px"}
        divDeco={"md:w-[48%] w-full   "}
        deco={"w-full  "}
        name={"phone"}
        value={supportFormik.values.phone}
        onChange={supportFormik.handleChange}
        onBlur={supportFormik.handleBlur}
        label={"الجوال"}
      />

      <div className="flex items-center flex-row-reverse gap-x-5 gap-y-3 justify-between flex-wrap  w-full   ">
        <AutoComplete
          isError={supportFormik.touched.type && supportFormik.errors.type}
          helper={supportFormik.touched.type && supportFormik.errors.type}
          inputStyle={"12px"}
          parentDeco={"md:w-[48%] w-full !rounded-xl  "}
          deco={"w-full !rounded-xl  "}
          options={arr}
          getOptionLabel={(option) => option}
          value={supportFormik.values.type}
          onchange={(event, newValue) =>
            supportFormik.setFieldValue("type", newValue)
          }
          onBlur={supportFormik.handleBlur}
          label={"اختر"}
        />
        <div className="  md:w-[48%] w-full text-sm px-2 sm:px-0 py-0 sm:text-base  text-right">
          <p>اضافة مرفق</p>
          <div className="flex items-center  gap-y-3 flex-wrap justify-between flex-row-reverse">
            <p className="text-xs sm:w-1/2 text-[#AEB9E1]">
              الحد الأقصى لحجم الملف هو 2 ميجابايت، ويُسمح فقط بالملفات من
              الأنواع: (.jpg, .png, and .pdf.)
            </p>
            <label
              htmlFor="fileAttach"
              className="flex items-center gap-x-2 text-white rounded-lg bg-[#AEB9E1] px-3 py-2 cursor-pointer"
            >
              <span className="text-sm">اضافه مرفق</span>
              <span className=" rounded-lg border-[1px] border-white py-2 px-2 flex items-center">
                <FontAwesomeIcon icon="fa-solid fa-link" />
              </span>
            </label>
            <input
              onChange={handleImageChange}
              type="file"
              hidden
              id="fileAttach"
            />
          </div>
        </div>
      </div>

      <textarea
        name="message"
        value={supportFormik.values.message}
        onChange={supportFormik.handleChange}
        onBlur={supportFormik.handleBlur}
        className="border-[#AEB9E1] py-2 focus:outline-none focus:ring-0 focus:border-2 focus:border-[#6EA9E3] text-right px-3 border-[1px] w-full rounded-lg h-36"
        placeholder="الرساله"
      ></textarea>
      <CustomButton
        type="submit"
        text={"ارسال"}
        deco={
          "bg-primary text-white px-10 font-semibold rounded-lg me-auto py-2 my-5"
        }
      />
    </form>
  );
}
