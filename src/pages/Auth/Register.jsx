import {
  Button,
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
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
import Input from "../../ui/Input";
import { registerSchema } from "../../utilities/schema";
import AutoComplete from "../../ui/AutoComplete";

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

  async function handleRegister(data) {
    await axios
      .post(`${baseUrl}/register`, data)
      .then((res) => {
        toast.success(res.data.message);
        navigate("/otp");
        localStorage.setItem("email", res.data.data.email);
      })
      .catch((err) => {
        if (err?.response?.data?.message) {
          toast.error(err.response.data.message);
        } else {
          toast.error(err.response.data.message);
        }
      });
  }

  const registerFormik = useFormik({
    initialValues: {
      email: "",
      name: "",
      password: "",
      confirmPassword: "",
      companyName: "",
      phone: "",
      role: "user",
      location: "",
      unifiedNumber: "",
    },

    onSubmit: (e) => {
      handleRegister(e);
      // console.log(e);
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
          <Input
            divDeco={"my-"}
            helperDeco={"text-left !text-red-500 !ps-1"}
            inputDeco="!py-4"
            name="name"
            deco="w-full"
            label="Name"
            value={registerFormik.values.name}
            onChange={registerFormik.handleChange}
            onBlur={registerFormik.handleBlur}
            isError={registerFormik.touched.name && registerFormik.errors.name}
            helper={registerFormik.touched.name && registerFormik.errors.name}
          />
          <Input
            divDeco={"my-"}
            helperDeco={"text-left !text-red-500 !ps-1"}
            inputDeco="!py-4"
            name="email"
            deco="w-full"
            label="Email"
            value={registerFormik.values.email}
            onChange={registerFormik.handleChange}
            onBlur={registerFormik.handleBlur}
            isError={
              registerFormik.touched.email && registerFormik.errors.email
            }
            helper={registerFormik.touched.email && registerFormik.errors.email}
          />

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
          <FormControl variant="outlined" fullWidth>
            <InputLabel>Confirm Password</InputLabel>
            <OutlinedInput
              name="confirmPassword"
              type={showPassword ? "text" : "password"}
              value={registerFormik.values.confirmPassword}
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
              {registerFormik.touched.confirmPassword &&
                registerFormik.errors.confirmPassword}
            </FormHelperText>
          </FormControl>

          <Input
            divDeco={"my-"}
            helperDeco={"text-left !text-red-500 !ps-1"}
            inputDeco="!py-4"
            name="companyName"
            deco="w-full"
            label="Company Name"
            value={registerFormik.values.companyName}
            onChange={registerFormik.handleChange}
            onBlur={registerFormik.handleBlur}
            isError={
              registerFormik.touched.companyName &&
              registerFormik.errors.companyName
            }
            helper={
              registerFormik.touched.companyName &&
              registerFormik.errors.companyName
            }
          />
          <Input
            divDeco={"my-"}
            helperDeco={"text-left !text-red-500 !ps-1"}
            inputDeco="!py-4"
            name="unifiedNumber"
            deco="w-full"
            type={"number"}
            label="Add the unified number (number 700)"
            value={registerFormik.values.unifiedNumber}
            onChange={registerFormik.handleChange}
            onBlur={registerFormik.handleBlur}
            isError={
              registerFormik.touched.unifiedNumber &&
              registerFormik.errors.unifiedNumber
            }
            helper={
              registerFormik.touched.unifiedNumber &&
              registerFormik.errors.unifiedNumber
            }
          />

          <Input
            divDeco={"my-"}
            helperDeco={"text-left !text-red-500 !ps-1"}
            inputDeco="!py-4"
            name="phone"
            deco="w-full"
            label="Phone"
            type="text"
            variant="outlined"
            value={registerFormik.values.phone}
            onChange={registerFormik.handleChange}
            onBlur={registerFormik.handleBlur}
            isError={
              registerFormik.touched.phone && registerFormik.errors.phone
            }
            helper={registerFormik.touched.phone && registerFormik.errors.phone}
          />

          {/* Location & Age Fields */}

          <AutoComplete
            options={municipalities}
            getOptionLabel={(option) => option}
            value={registerFormik.values.location} // Formik value
            onchange={(event, newValue) =>
              registerFormik.setFieldValue("location", newValue)
            }
            onBlur={registerFormik.handleBlur}
            label={"location"}
            isError={
              registerFormik.touched.location && registerFormik.errors.location
            }
            helper={
              registerFormik.touched.location && registerFormik.errors.location
            }
            parentDeco={"w-full"}
          />

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
