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

const municipalities = [
  //الاول

  "مدينه الرياض",
  "مدينه مكه المكرمه",
  "مدينه المدينه المنوره",
  "مدينه الدمام,الخبر,الظهران",
  "مدينه جده",

  //الثاني

  "مدينه برديه",
  "مدينه حائل",
  "مدينه سكاكا",
  "مدينه الطائف",
  "مدينه ابها",
  "مدينه تبوك",
  "مدينه الباحه",
  "مدينه الهفوف",
  "مدينه جازان",
  "مدينه نجران",
  "مدينه عرعر",
  "مدينه حفر الباطن",

  //الثالث
  " بلدية محافظةالخرج",
  " بلدية محافظة ينبع",
  " بلدية محافظةالقطيف",
  " بلدية محافظة خميس مشيط",
  " بلدية محافظة عنيزة",

  "بلديه محافظه المجمعه",

  "بلدية محافظة شقراء",
  "بلدية محافظة الزلفي",
  "بلدية محافظة الجبيل",
  "بلدية محافظة عفيف",
  "بلدية محافظة الخفجي",
  "بلدية محافظة المذنب",
  "بلدية محافظة وادي الدواسر",
  "بلدية محافظة القويعية",
  "بلدية محافظة بقيق",
  "بلدية محافظة الدوادمي",
  "بلدية محافظة العلا",
  "بلدية محافظة الرس",
  "بلدية محافظة بلجرشي",
  "بلدية محافظة بيشة",
  "بلدية محافظة تيماء",
  "بلدية محافظة ظهران الجنوب",
  "بلدية محافظة صبيا",
  "بلدية محافظة النماص",
  "بلدية محافظة فيفا",
  "بلدية محافظة الدرعية",
  "بلدية محافظة رابغ",
  "بلدية محافظة البكيرية",
  "بلدية محافظة محايل عسير",
  "بلدية محافظة القريات",

  //الرابع

  "بلدية محافظة الأفلاج",
  "بلدية محافظة حوطة بني تميم",
  "بلدية محافظة الغاط",
  "بلدية محافظة السليل",
  "بلدية محافظة ضرماء",
  "بلدية محافظة حريملاء",
  "بلدية محافظة مرات",
  "بلدية محافظة المزاحمية",
  "بلدية محافظة ثادق",
  "بلدية محافظة الحريق",
  "بلدية حوطة سدير",
  "بلدية تمير",
  "بلدية روضة سدير",
  "بلدية جلاجل",
  "بلدية محافظة الرين",
  "بلدية محافظة الدلم",
  "بلدية محافظة الحناكية",
  "بلدية محافظة خيبر",
  "بلدية محافظة بدر",
  "بلدية محافظة القنفذة",
  "بلدية محافظة الليث",
  "بلدية محافظة خليص",
  "بلدية محافظة رأس تنورة",
  "بلدية محافظة النعيرية",
  "بلدية محافظة البدائع",
  "بلدية محافظة الأسياح",
  "بلدية محافظة رياض الخبراء",
  "بلدية الخبراء والسحابين",
  "بلدية محافظة تثليث",
  "بلدية محافظة أحد رفيدة",
  "بلدية محافظة تنومة",
  "بلدية محافظة سراة عبيدة",
  "بلدية محافظة بقعاء",
  "بلدية تربة حائل",
  "بلدية محافظة قلوه",
  "بلدية محافظة المندق",
  "بلدية محافظة ضباء",
  "بلدية محافظة الوجه",
  "بلدية محافظة أملج",
  "بلدية محافظة حقل",
  "بلدية محافظة بيش",
  "بلدية محافظة أبي عريش",
  "بلدية محافظة صامطة",
  "بلدية محافظة شروره",
  "بلدية محافظة دومة الجندل",
  "بلدية محافظة طبرجل",
  "بلدية محافظة رفحاء",
  "بلدية محافظة طريف",
  "بلدية محافظة رنية",
  "بلدية محافظة تربة",
  "بلدية محافظة الخرمة",
  "بلدية محافظة رماح",
  "بلدية الحلوة",
  "بلدية الهياثم",
  "بلدية العيينة والجبيلة",
  "بلدية الرويضة",
  "بلدية ساجر",
  "بلدية البجادية",
  "بلدية نفي",
  "بلدية القصب",
  "بلدية الهدار",
  "بلدية الأرطاوية",
  "بلدية محافظة الجموم",
  "بلدية البصر",
  "بلدية دخنه",
  "بلدية محافظة رجال ألمع",
  "بلدية محافظة المهد",
  "بلدية ينبع النخل",
  "بلدية محافظة الكامل",
  "بلدية القوز (القنفذة)",
  "بلدية محافظة المجاردة",
  "بلدية محافظة قرية العليا",
  "بلدية محافظة طريب",
  "بلدية الرفيعة",
  "بلدية مليجة",
  "بلدية محافظة الحرجة",
  "بلدية بللسمر",
  "بلدية جبة",
  "بلدية الروضة",
  "بلدية الكهفة",
  "بلدية الخطة",
  "بلدية محافظة المخواة",
  "بلدية محافظة العقيق",
  "بلدية محافظة القرى",
  "بلدية الشيال العلم",
  "بلدية محافظة ضريه",
  "بلدية البشائر",
  "بلدية محافظة البدع",
  "بلدية محافظة العارضة",
  "بلدية وادي جازان",
  "بلدية الموسم",
  "بلدية محافظة يدمة",
  "بلدية محافظة حبونا",
  "بلدية سلطانة",
  "بلدية محافظة العويقيلة",
  "بلدية محافظة المويه",
  "بلدية محافظة أحد المسارحة",
  "بلدية يبرين",
  "بلدية محافظة عيون الجواء",
  "بلدية محافظة موقق",
  "بلدية محافظة النبهانية",
  "بلدية محافظة الحائط",
  "بلدية محافظة الشماسية",
  "بلدية محافظة السليمي",
  "بلدية محافظة عقلة الصقور",
  "بلدية محافظة الشملي",
  "بلدية محافظة فرسان",
  "بلدية محافظة وادي الفرع",
  "بلدية محافظة الطوال",
  "بلدية محافظة ضمد",
  "بلدية محافظة بلقرن",
  "بلدية صوير",

  //الخمامس

  "بلدية الحديثة",
  "بلدية شعبة نصاب",
  "بلدية لينه",
  "بلدية طلعة التمياط",
  "بلدية ابن شريم",
  "بلدية روضة هباس",
  "بلدية أم خنصر",
  "بلدية محافظة ميسان",
  "بلدية بني سعد",
  "بلدية المحاني",
  "بلدية قيا",
  "بلدية ظلم",
  "بلدية القريع بن مالك",
  "بلدية سلوى",
  "بلدية البطحاء",
  "بلدية القيصومة",
  "بلدية محافظة الهدومة",
  "بلدية الصداوي",
  "بلدية الذيبية",
  "بلدية محافظة العيص",
  "بلدية أضم",
  "بلدية العرضية الجنوبية",
  "بلدية محافظة سميراء",
  "بلدية الشبحة",
  "بلدية بداء",
  "بلدية أبو راكه",
  "بلدية محافظة الدرب",
  "بلدية محافظة الدائر بني مالك",
  "بلدية محافظة العيدابي",
  "بلدية محافظة هروب",
  "بلدية محافظة الريث",
  "بلدية الخوبه",
  "بلدية الشقيق",
  "بلدية السهي",
  "بلدية الحقو",
  "بلدية الحكامية",
  "بلدية العالية",
  "بلدية القفل",
  "بلدية قوز الجعافره",
  "بلدية محافظة بدر الجنوب",
  "بلدية محافظة ثار",
  "بلدية محافظة خباش",
  "بلدية الوديعة",
  "بلدية الحصينية",
  "بلدية بئر عسكر",
  "بلدية العيساوية",
  "بلدية أبو عجرم",
  "بلدية الناصفة",
  "بلدية زلوم",
  "بلدية باللحمر",
  "بلدية الفرشة",
  "بلدية قنا",
  "بلدية الصبيخة",
  "بلدية بني عمرو",
  "بلدية صمخ",
  "بلدية النقيع",
  "بلدية الثنية وتبالة",
  "بلدية محافظة الأمواه",
  "بلدية الواديين",
  "بلدية الساحل",
  "بلدية محافظة الشنان",
  "بلدية محافظة الغزالة",
  "بلدية الحليفة السفلى",
  "بلدية فيد",
  "بلدية الأجفر",
  "بلدية انبوان",
  "بلدية محافظة الحجرة",
  "بلدية محافظة غامد الزناد",
  "بلدية محافظة بني حسن",
  "بلدية بني كبير",
  "بلدية معشوقة",
  "بلدية بير بن هرماس",
  "بلدية القليبة",
  "بلدية شواق",
  "بلدية المنجور",
  "بلدية سبت الجارة",
  "بلدية غميقة",
  "بلدية الصرار",
  "بلدية اللهابة",
  "بلدية عريعره",
  "بلدية القليب",
  "بلدية جوف بني هاجر",
  "بلدية عين دار",
  "بلدية القوارة",
  "بلدية قبة",
  "بلدية أبانات ضليع رشيد",
  "بلدية الفوارة",
  "بلدية العمار",
  "بلدية قصيباء",
  "بلدية شري",
  "بلدية الفويلق",
  "بلدية قصر ابن عقيل",
  "بلدية الدليمية",
  "بلدية البطين",
  "بلدية الظاهرية",
  "بلدية محافظة بارق",
  "بلدية محافظة البرك",
  "بلدية بحر أبو سكينه",
  "بلدية وادي بن هشبل",
  "بلدية الربوعة",
  "بلدية الحازمي",
  "بلدية الجمش",
  "بلدية أشيقر",
  "بلدية حلبان",
  "بلدية عروى",
  "بلدية الأحمر",
  "بلدية بدائع العضيان",
  "بلدية الحصاة",
  "بلدية الجله وتبراك",
  "بلدية البديع",
  "بلدية الحيانه والبرك",
  "بلدية السر",
  "بلدية عسفان",
  "بلدية مدركة",
  "بلدية الحسو",
  "بلدية النخيل",
  "بلدية المسيجيد والقاحة",
  "بلدية العشاش",
  "بلدية السويرقية",
  "بلدية ثرب",
  "بلدية الصلصلة",
  "بلدية سليلة جهينة والمربع",
  "بلدية حجر",
  "بلدية المظيلف",
  "بلدية الحلى",
  "بلدية الشواق",
  "بلدية العرضية الشمالية",
];

export default function Register() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const registerSchema = yup.object({
    email: yup
      .string()
      .matches(
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
        "Invalid email format"
      )
      .required(),

    name: yup.string().min(3, "too short").max(30, "too long").required(),
    password: yup.string().min(8, "too weak").max(50, "too long").required(),
    phone: yup
      .string()
      .matches(
        /^(?:\+9665[0-9]{8}|9665[0-9]{8}|05[0-9]{8}|5[0-9]{8})$|^(?:\+201[0-2,5][0-9]{8}|201[0-2,5][0-9]{8}|01[0-2,5][0-9]{8})$/,
        "Invalid phone number"
      )
      .required(),
    age: yup.number().min(18).max(75).required(),
    gender: yup
      .string()
      .oneOf(["male", "female"], "Gender must be either 'male' or 'female'")
      .required("Gender is required"),
    role: yup.string().oneOf(["user", "admin"]).required("Gender is required"),
    location: yup.string().required(),
  });

  async function handleRegister(data) {
    await axios
      .post(`${baseUrl}/register`, data)
      .then((res) => {
        toast.success(res.data.message);
        navigate("/otp");
        localStorage.setItem("email", res.data.data.email);
      })
      .catch((err) => toast.error(err.response.data.message));
  }

  const registerFormik = useFormik({
    initialValues: {
      email: "",
      name: "",
      password: "",
      phone: "",
      age: "",
      gender: "female",
      role: "user",
      location: "",
    },

    onSubmit: (e) => {
      handleRegister(e);
    },
    validationSchema: registerSchema,
  });

  return (
    <div className="flex ps-10 flex-col sm:flex-row items-center h-[100vh]">
      <div className="w-full sm:w-2/3 pt-10">
        <h2 className="sm:w-2/3 w-full px-3 text-xl font-semibold">
          Create an account
        </h2>
        <form
          onSubmit={registerFormik.handleSubmit}
          className="sm:w-2/3 w-full px-3 py-4 flex gap-y-2 flex-col"
        >
          {/* Name Field */}

          <div>
            <TextField
              name="name"
              className="w-full"
              label="Name"
              variant="outlined"
              value={registerFormik.values.name}
              onChange={registerFormik.handleChange}
              onBlur={registerFormik.handleBlur}
            />
            <FormHelperText className="!ps-1 !text-red-500">
              {registerFormik.touched.name && registerFormik.errors.name}
            </FormHelperText>
          </div>

          {/* Email Field */}
          <div>
            <TextField
              name="email"
              className="w-full"
              label="Email"
              type="email"
              variant="outlined"
              value={registerFormik.values.email}
              onChange={registerFormik.handleChange}
              onBlur={registerFormik.handleBlur}
            />
            <FormHelperText className="!ps-1 !text-red-500">
              {registerFormik.touched.email && registerFormik.errors.email}
            </FormHelperText>
          </div>

          {/* Password Field */}
          <FormControl variant="outlined" fullWidth>
            <InputLabel>Password</InputLabel>
            <OutlinedInput
              name="password"
              type={showPassword ? "text" : "password"}
              value={registerFormik.values.password}
              onChange={registerFormik.handleChange}
              onBlur={registerFormik.handleBlur}
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
              {registerFormik.touched.password &&
                registerFormik.errors.password}
            </FormHelperText>
          </FormControl>

          {/* Phone Field */}
          <div>
            <TextField
              name="phone"
              className="w-full"
              label="Phone"
              type="tel"
              variant="outlined"
              value={registerFormik.values.phone}
              onChange={registerFormik.handleChange}
              onBlur={registerFormik.handleBlur}
            />
            <FormHelperText className="!ps-1 !text-red-500">
              {registerFormik.touched.phone && registerFormik.errors.phone}
            </FormHelperText>
          </div>
          {/* Location & Age Fields */}
          <div className="flex sm:flex-row flex-col justify-between">
            {/* Location Field */}
            <FormControl className="w-full !my-2 sm:w-[48%]">
              <Autocomplete
                options={municipalities} // List of municipalities
                getOptionLabel={(option) => option} // Display option as string
                value={registerFormik.values.location} // Formik value
                onChange={(event, newValue) =>
                  registerFormik.setFieldValue("location", newValue)
                }
                onBlur={registerFormik.handleBlur}
                renderInput={(params) => (
                  <TextField {...params} label="Location" variant="outlined" />
                )}
              />
              <FormHelperText className="!ps-1 !text-red-500">
                {registerFormik.touched.location &&
                  registerFormik.errors.location}
              </FormHelperText>
            </FormControl>
            {/* Age Field */}
            <FormControl className="w-full !my-2 sm:w-[48%]">
              <InputLabel>Age</InputLabel>
              <Select
                name="age"
                value={registerFormik.values.age}
                onChange={registerFormik.handleChange}
                onBlur={registerFormik.handleBlur}
                label="Age"
              >
                {Array(70)
                  .fill(20)
                  .map((ele, index) => (
                    <MenuItem key={index} value={index + 17}>
                      {index + 17}
                    </MenuItem>
                  ))}
              </Select>
              <FormHelperText className="!ms-[6px] !text-red-500">
                {registerFormik.touched.age && registerFormik.errors.age}
              </FormHelperText>
            </FormControl>
          </div>

          {/* Gender Radio Buttons */}
          <FormControl>
            <FormLabel>Gender</FormLabel>
            <RadioGroup
              name="gender"
              value={registerFormik.values.gender}
              onChange={registerFormik.handleChange}
              row
            >
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
              />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
            </RadioGroup>
            <FormHelperText className="!ms-[6px] !text-red-500">
              {registerFormik.touched.gender && registerFormik.errors.gender}
            </FormHelperText>
          </FormControl>

          {/* Submit Button */}
          <Button
            type="submit"
            className="!bg-primary !text-white w-2/3 !py-2 !mt-5 !mx-auto sm:!text-md"
          >
            Create Account
          </Button>

          {/* Already Have an Account? */}
          <p className="text-light text-center text-xs mt-[-6px]">
            <span>Already Have An Account?</span>
            <Link
              className="text-primary border-b-[1px] border-b-primary"
              to="/login"
            >
              Log In
            </Link>
          </p>
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
