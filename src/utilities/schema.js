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
