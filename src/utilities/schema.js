import * as yup from "yup";

export const supportValidation = yup.object({
  fname: yup
    .string()
    .min(3, "قصير جدا")
    .max(30, "اكثر من الحد المسموع")
    .required("يرجى ادخال الاسم الاول"),
  lname: yup
    .string()
    .min(3, "قصير جدا")
    .max(30, "اكثر من الحد المسموع")
    .required("يرجى ادخال الاسم الاخير"),
  senderEmail: yup
    .string()
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
      "بريد الكتروني غير صحيح"
    )
    .required("يرجى ادخال البريد الالكتروني"),

  message: yup.string(),
  phone: yup
    .string()
    .matches(
      /^(?:\+9665[0-9]{8}|9665[0-9]{8}|05[0-9]{8}|5[0-9]{8})$|^(?:\+201[0-2,5][0-9]{8}|201[0-2,5][0-9]{8}|01[0-2,5][0-9]{8})$/,
      "رقم الجوال غير صحيح"
    )
    .required("يرجى ادخال رقم الجوال"),
  type: yup
    .string()
    .oneOf(["male", "female"], "Gender must be either 'male' or 'female'")
    .required("يرجى ادخال النوع"),
});
export const registerSchema = yup.object({
  email: yup
    .string()
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
      "Invalid email format"
    )
    .required(),

  name: yup.string().min(3, "too short").max(30, "too long").required(),
  password: yup.string().min(8, "too weak").max(50, "too long").required(),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Please confirm your password"),
  phone: yup
    .string()
    .matches(
      /^(?:\+9665[0-9]{8}|9665[0-9]{8}|05[0-9]{8}|5[0-9]{8})$|^(?:\+201[0-2,5][0-9]{8}|201[0-2,5][0-9]{8}|01[0-2,5][0-9]{8})$/,
      "Invalid phone number"
    )
    .required(),
  unifiedNumber: yup.number().required("unified number is required"),
  role: yup
    .string()
    .oneOf(["user", "admin", "company"])
    .required("Gender is required"),
  location: yup.string().required(),
  companyName: yup.string().required("company name is required"),
});
