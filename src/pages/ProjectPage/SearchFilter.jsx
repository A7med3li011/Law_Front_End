// import React, { useState } from "react";
// import {
//   Box,
//   TextField,
//   Button,
//   Typography,
//   Divider,
//   Modal,
//   FormControl,
//   InputLabel,
//   Select,
//   MenuItem,
//   Autocomplete,
//   IconButton,
// } from "@mui/material";
// import FilterListIcon from "@mui/icons-material/FilterList";
// import AddIcon from "@mui/icons-material/Add";
// import { PhotoCamera } from "@mui/icons-material";
// import { useMutation, useQueryClient } from "react-query";
// import { useSelector } from "react-redux";
// import { addBranch } from "../../utilities/Apis.js";
// import { toast } from "react-toastify";

// const municipalities = [
//   //الاول

//   "مدينه الرياض",
//   "مدينه مكه المكرمه",
//   "مدينه المدينه المنوره",
//   "مدينه الدمام,الخبر,الظهران",
//   "مدينه جده",

//   //الثاني

//   "مدينه برديه",
//   "مدينه حائل",
//   "مدينه سكاكا",
//   "مدينه الطائف",
//   "مدينه ابها",
//   "مدينه تبوك",
//   "مدينه الباحه",
//   "مدينه الهفوف",
//   "مدينه جازان",
//   "مدينه نجران",
//   "مدينه عرعر",
//   "مدينه حفر الباطن",

//   //الثالث
//   " بلدية محافظةالخرج",
//   " بلدية محافظة ينبع",
//   " بلدية محافظةالقطيف",
//   " بلدية محافظة خميس مشيط",
//   " بلدية محافظة عنيزة",

//   "بلديه محافظه المجمعه",

//   "بلدية محافظة شقراء",
//   "بلدية محافظة الزلفي",
//   "بلدية محافظة الجبيل",
//   "بلدية محافظة عفيف",
//   "بلدية محافظة الخفجي",
//   "بلدية محافظة المذنب",
//   "بلدية محافظة وادي الدواسر",
//   "بلدية محافظة القويعية",
//   "بلدية محافظة بقيق",
//   "بلدية محافظة الدوادمي",
//   "بلدية محافظة العلا",
//   "بلدية محافظة الرس",
//   "بلدية محافظة بلجرشي",
//   "بلدية محافظة بيشة",
//   "بلدية محافظة تيماء",
//   "بلدية محافظة ظهران الجنوب",
//   "بلدية محافظة صبيا",
//   "بلدية محافظة النماص",
//   "بلدية محافظة فيفا",
//   "بلدية محافظة الدرعية",
//   "بلدية محافظة رابغ",
//   "بلدية محافظة البكيرية",
//   "بلدية محافظة محايل عسير",
//   "بلدية محافظة القريات",

//   //الرابع

//   "بلدية محافظة الأفلاج",
//   "بلدية محافظة حوطة بني تميم",
//   "بلدية محافظة الغاط",
//   "بلدية محافظة السليل",
//   "بلدية محافظة ضرماء",
//   "بلدية محافظة حريملاء",
//   "بلدية محافظة مرات",
//   "بلدية محافظة المزاحمية",
//   "بلدية محافظة ثادق",
//   "بلدية محافظة الحريق",
//   "بلدية حوطة سدير",
//   "بلدية تمير",
//   "بلدية روضة سدير",
//   "بلدية جلاجل",
//   "بلدية محافظة الرين",
//   "بلدية محافظة الدلم",
//   "بلدية محافظة الحناكية",
//   "بلدية محافظة خيبر",
//   "بلدية محافظة بدر",
//   "بلدية محافظة القنفذة",
//   "بلدية محافظة الليث",
//   "بلدية محافظة خليص",
//   "بلدية محافظة رأس تنورة",
//   "بلدية محافظة النعيرية",
//   "بلدية محافظة البدائع",
//   "بلدية محافظة الأسياح",
//   "بلدية محافظة رياض الخبراء",
//   "بلدية الخبراء والسحابين",
//   "بلدية محافظة تثليث",
//   "بلدية محافظة أحد رفيدة",
//   "بلدية محافظة تنومة",
//   "بلدية محافظة سراة عبيدة",
//   "بلدية محافظة بقعاء",
//   "بلدية تربة حائل",
//   "بلدية محافظة قلوه",
//   "بلدية محافظة المندق",
//   "بلدية محافظة ضباء",
//   "بلدية محافظة الوجه",
//   "بلدية محافظة أملج",
//   "بلدية محافظة حقل",
//   "بلدية محافظة بيش",
//   "بلدية محافظة أبي عريش",
//   "بلدية محافظة صامطة",
//   "بلدية محافظة شروره",
//   "بلدية محافظة دومة الجندل",
//   "بلدية محافظة طبرجل",
//   "بلدية محافظة رفحاء",
//   "بلدية محافظة طريف",
//   "بلدية محافظة رنية",
//   "بلدية محافظة تربة",
//   "بلدية محافظة الخرمة",
//   "بلدية محافظة رماح",
//   "بلدية الحلوة",
//   "بلدية الهياثم",
//   "بلدية العيينة والجبيلة",
//   "بلدية الرويضة",
//   "بلدية ساجر",
//   "بلدية البجادية",
//   "بلدية نفي",
//   "بلدية القصب",
//   "بلدية الهدار",
//   "بلدية الأرطاوية",
//   "بلدية محافظة الجموم",
//   "بلدية البصر",
//   "بلدية دخنه",
//   "بلدية محافظة رجال ألمع",
//   "بلدية محافظة المهد",
//   "بلدية ينبع النخل",
//   "بلدية محافظة الكامل",
//   "بلدية القوز (القنفذة)",
//   "بلدية محافظة المجاردة",
//   "بلدية محافظة قرية العليا",
//   "بلدية محافظة طريب",
//   "بلدية الرفيعة",
//   "بلدية مليجة",
//   "بلدية محافظة الحرجة",
//   "بلدية بللسمر",
//   "بلدية جبة",
//   "بلدية الروضة",
//   "بلدية الكهفة",
//   "بلدية الخطة",
//   "بلدية محافظة المخواة",
//   "بلدية محافظة العقيق",
//   "بلدية محافظة القرى",
//   "بلدية الشيال العلم",
//   "بلدية محافظة ضريه",
//   "بلدية البشائر",
//   "بلدية محافظة البدع",
//   "بلدية محافظة العارضة",
//   "بلدية وادي جازان",
//   "بلدية الموسم",
//   "بلدية محافظة يدمة",
//   "بلدية محافظة حبونا",
//   "بلدية سلطانة",
//   "بلدية محافظة العويقيلة",
//   "بلدية محافظة المويه",
//   "بلدية محافظة أحد المسارحة",
//   "بلدية يبرين",
//   "بلدية محافظة عيون الجواء",
//   "بلدية محافظة موقق",
//   "بلدية محافظة النبهانية",
//   "بلدية محافظة الحائط",
//   "بلدية محافظة الشماسية",
//   "بلدية محافظة السليمي",
//   "بلدية محافظة عقلة الصقور",
//   "بلدية محافظة الشملي",
//   "بلدية محافظة فرسان",
//   "بلدية محافظة وادي الفرع",
//   "بلدية محافظة الطوال",
//   "بلدية محافظة ضمد",
//   "بلدية محافظة بلقرن",
//   "بلدية صوير",

//   //الخمامس

//   "بلدية الحديثة",
//   "بلدية شعبة نصاب",
//   "بلدية لينه",
//   "بلدية طلعة التمياط",
//   "بلدية ابن شريم",
//   "بلدية روضة هباس",
//   "بلدية أم خنصر",
//   "بلدية محافظة ميسان",
//   "بلدية بني سعد",
//   "بلدية المحاني",
//   "بلدية قيا",
//   "بلدية ظلم",
//   "بلدية القريع بن مالك",
//   "بلدية سلوى",
//   "بلدية البطحاء",
//   "بلدية القيصومة",
//   "بلدية محافظة الهدومة",
//   "بلدية الصداوي",
//   "بلدية الذيبية",
//   "بلدية محافظة العيص",
//   "بلدية أضم",
//   "بلدية العرضية الجنوبية",
//   "بلدية محافظة سميراء",
//   "بلدية الشبحة",
//   "بلدية بداء",
//   "بلدية أبو راكه",
//   "بلدية محافظة الدرب",
//   "بلدية محافظة الدائر بني مالك",
//   "بلدية محافظة العيدابي",
//   "بلدية محافظة هروب",
//   "بلدية محافظة الريث",
//   "بلدية الخوبه",
//   "بلدية الشقيق",
//   "بلدية السهي",
//   "بلدية الحقو",
//   "بلدية الحكامية",
//   "بلدية العالية",
//   "بلدية القفل",
//   "بلدية قوز الجعافره",
//   "بلدية محافظة بدر الجنوب",
//   "بلدية محافظة ثار",
//   "بلدية محافظة خباش",
//   "بلدية الوديعة",
//   "بلدية الحصينية",
//   "بلدية بئر عسكر",
//   "بلدية العيساوية",
//   "بلدية أبو عجرم",
//   "بلدية الناصفة",
//   "بلدية زلوم",
//   "بلدية باللحمر",
//   "بلدية الفرشة",
//   "بلدية قنا",
//   "بلدية الصبيخة",
//   "بلدية بني عمرو",
//   "بلدية صمخ",
//   "بلدية النقيع",
//   "بلدية الثنية وتبالة",
//   "بلدية محافظة الأمواه",
//   "بلدية الواديين",
//   "بلدية الساحل",
//   "بلدية محافظة الشنان",
//   "بلدية محافظة الغزالة",
//   "بلدية الحليفة السفلى",
//   "بلدية فيد",
//   "بلدية الأجفر",
//   "بلدية انبوان",
//   "بلدية محافظة الحجرة",
//   "بلدية محافظة غامد الزناد",
//   "بلدية محافظة بني حسن",
//   "بلدية بني كبير",
//   "بلدية معشوقة",
//   "بلدية بير بن هرماس",
//   "بلدية القليبة",
//   "بلدية شواق",
//   "بلدية المنجور",
//   "بلدية سبت الجارة",
//   "بلدية غميقة",
//   "بلدية الصرار",
//   "بلدية اللهابة",
//   "بلدية عريعره",
//   "بلدية القليب",
//   "بلدية جوف بني هاجر",
//   "بلدية عين دار",
//   "بلدية القوارة",
//   "بلدية قبة",
//   "بلدية أبانات ضليع رشيد",
//   "بلدية الفوارة",
//   "بلدية العمار",
//   "بلدية قصيباء",
//   "بلدية شري",
//   "بلدية الفويلق",
//   "بلدية قصر ابن عقيل",
//   "بلدية الدليمية",
//   "بلدية البطين",
//   "بلدية الظاهرية",
//   "بلدية محافظة بارق",
//   "بلدية محافظة البرك",
//   "بلدية بحر أبو سكينه",
//   "بلدية وادي بن هشبل",
//   "بلدية الربوعة",
//   "بلدية الحازمي",
//   "بلدية الجمش",
//   "بلدية أشيقر",
//   "بلدية حلبان",
//   "بلدية عروى",
//   "بلدية الأحمر",
//   "بلدية بدائع العضيان",
//   "بلدية الحصاة",
//   "بلدية الجله وتبراك",
//   "بلدية البديع",
//   "بلدية الحيانه والبرك",
//   "بلدية السر",
//   "بلدية عسفان",
//   "بلدية مدركة",
//   "بلدية الحسو",
//   "بلدية النخيل",
//   "بلدية المسيجيد والقاحة",
//   "بلدية العشاش",
//   "بلدية السويرقية",
//   "بلدية ثرب",
//   "بلدية الصلصلة",
//   "بلدية سليلة جهينة والمربع",
//   "بلدية حجر",
//   "بلدية المظيلف",
//   "بلدية الحلى",
//   "بلدية الشواق",
//   "بلدية العرضية الشمالية",
// ];

// export default function ProjectsHeader() {
//   const [open, setOpen] = useState(false);
//   // State variables for form inputs
//   const [name, setName] = useState("");
//   const [location, setLocation] = useState("");
//   const [image, setImage] = useState(null);
//   // const [description, setDescription] = useState("");
//   const [imageFile, setImageFile] = useState(null);
//   const [imagePreview, setImagePreview] = useState(null);

//   const handleOpen = () => setOpen(true);
//   const handleClose = () => setOpen(false);
//   const queryClient = useQueryClient();
//   const token = useSelector((state) => state.user.token);
//   const { mutate, isLoading, isSuccess, isError, error } = useMutation({
//     mutationFn: (branchData) => addBranch(branchData, token),
//     onSuccess: () => {
//       queryClient.invalidateQueries(["branches"]);
//       handleClose();
//       setName("");
//       setLocation("");
//       setSelectedMunicipality("");
//       setImage(null);
//       // setDescription("");
//     },
//   });
//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Validate required fields
//     if (!name || !location) {
//       toast.warn("يرجى ملء جميع الحقول المطلوبة قبل الحفظ.");
//       return;
//     }

//     const branchData = {
//       name,
//       location,
//       image,
//     };

//     mutate(branchData);
//   };

//   {
//     isLoading && <p>Saving branch...</p>;
//   }
//   {
//     isError && <p className="text-red-500">Error: {error.message}</p>;
//   }
//   {
//     isSuccess && <p className="text-green-500">Branch added successfully!</p>;
//   }

//   return (
//     <Box sx={{ width: "100%", mb: 4 }}>
//       {/* الخط العلوي */}
//       <Box
//         sx={{
//           display: "flex",
//           justifyContent: "space-between",
//           alignItems: "center",
//           mb: 2,
//         }}
//       >
//         <Button
//           variant="contained"
//           // startIcon={<AddIcon />}
//           onClick={handleOpen}
//           sx={{
//             backgroundColor: "#052F72",
//             color: "white",
//             fontFamily: "Tajawal",
//             fontSize: { xs: "14px", sm: "16px" },
//             height: { xs: 40, sm: 36 },
//             whiteSpace: "nowrap",
//             px: { xs: 2, sm: 3 },
//             "&:hover": {
//               backgroundColor: "#04215A",
//             },
//           }}
//         >
//           اضافة فرع
//         </Button>

//         <Typography
//           variant="h5"
//           sx={{
//             fontFamily: "Tajawal",
//             fontWeight: "bold",
//             color: "#052F72",
//           }}
//         >
//           الفـروع
//         </Typography>
//       </Box>

//       {/* الخط الأزرق */}
//       <Divider sx={{ backgroundColor: "#052F72", height: 2, mb: 3 }} />

//       {/* Modal لإضافة مشروع جديد */}
//       <Modal
//         open={open}
//         onClose={handleClose}
//         aria-labelledby="modal-modal-title"
//         aria-describedby="modal-modal-description"
//         sx={{
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//           fontFamily: "Tajawal",
//         }}
//       >
//         <Box
//           sx={{
//             backgroundColor: "white",
//             p: 3,
//             borderRadius: 2,
//             width: { xs: "90%", sm: "60%", md: "40%" },
//             maxWidth: "500px",
//           }}
//         >
//           <Typography
//             id="modal-modal-title"
//             variant="h6"
//             component="h2"
//             sx={{ mb: 2, textAlign: "center", fontWeight: "bold" }}
//           >
//             إنشاء فرع جديد
//           </Typography>

//           <Box
//             component="form"
//             sx={{ display: "flex", flexDirection: "column", gap: 2 }}
//           >
//             <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
//               <TextField
//                 label="اسم الفرع"
//                 variant="outlined"
//                 fullWidth
//                 size="small"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//               />
//               <Autocomplete
//                 options={municipalities}
//                 value={location}
//                 onChange={(e, newValue) => setLocation(newValue)}
//                 renderInput={(params) => (
//                   <TextField {...params} label="العنوان" />
//                 )}
//               />
//             </Box>

//             {/* <Box sx={{ display: "flex", gap: 2 }}>
//               <FormControl fullWidth size="small">
//                 <InputLabel>اختر الهيئة التابع لها</InputLabel>
//                 <Select label="اختر الهيئة التابع لها">
//                   <MenuItem value="">اختر الهيئة</MenuItem>
//                 </Select>
//               </FormControl>

//               <FormControl fullWidth size="small">
//                 <InputLabel>اختر أعضاء الفريق</InputLabel>
//                 <Select label="اختر أعضاء الفريق">
//                   <MenuItem value="">اختر الأعضاء</MenuItem>
//                 </Select>
//               </FormControl>
//             </Box> */}

//             {/* <Box sx={{ display: "flex", gap: 2 }}>
//               <TextField
//                 label="تاريخ البداية"
//                 variant="outlined"
//                 fullWidth
//                 size="small"
//                 type="date"
//                 InputLabelProps={{ shrink: true }}
//               />

//               <TextField
//                 label="تاريخ الانتهاء"
//                 variant="outlined"
//                 fullWidth
//                 size="small"
//                 type="date"
//                 InputLabelProps={{ shrink: true }}
//               />
//             </Box> */}

//             {/* وصف المشروع */}
//             {/* <TextField
//               label="وصف المشروع"
//               variant="outlined"
//               fullWidth
//               multiline
//               rows={3}
//               size="small"
//               value={description}
//               onChange={(e) => setDescription(e.target.value)}
//             /> */}
//             <Box
//               sx={{
//                 direction: "rtl",
//                 display: "flex",

//                 alignItems: "center",
//                 justifyContent: imagePreview ? "space-between" : "center",
//                 gap: 2,
//                 mt: 1,
//                 width: "100%",
//               }}
//             >
//               <Button
//                 variant="contained"
//                 component="label"
//                 sx={{ gap: 3 }}
//                 startIcon={<PhotoCamera />}
//               >
//                 تحميل صورة
//                 <input
//                   hidden
//                   accept="image/*"
//                   type="file"
//                   onChange={(e) => {
//                     const file = e.target.files[0];
//                     setImageFile(file);
//                     setImage(file);
//                     setImagePreview(URL.createObjectURL(file));
//                   }}
//                 />
//               </Button>

//               {imagePreview && (
//                 <img
//                   src={imagePreview}
//                   alt="Preview"
//                   style={{ maxHeight: 150, marginTop: 10 }}
//                 />
//               )}
//             </Box>

//             {/* الأزرار */}
//             <Box
//               sx={{ display: "flex", justifyContent: "space-between", mt: 1 }}
//             >
//               <Button
//                 variant="outlined"
//                 onClick={handleClose}
//                 sx={{ fontFamily: "Tajawal" }}
//               >
//                 إلغاء
//               </Button>
//               <Button
//                 onClick={handleSubmit}
//                 variant="contained"
//                 sx={{
//                   backgroundColor: "#052F72",
//                   color: "white",
//                   fontFamily: "Tajawal",
//                   "&:hover": {
//                     backgroundColor: "#04215A",
//                   },
//                 }}
//                 disabled={isLoading}
//               >
//                 {isLoading ? "جاري الحفظ" : " حفظ"}
//               </Button>
//             </Box>
//           </Box>

//           {/* <Typography
//             sx={{
//               mt: 1,
//               textAlign: "center",
//               fontSize: "0.8rem",
//               color: "#666",
//             }}
//           >
//             تعرف على المزيد حول المشاريع من خلال مشاهدة الفردية التعليمية.
//           </Typography> */}
//         </Box>
//       </Modal>
//     </Box>
//   );
// }






import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Divider,
  Modal,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Autocomplete,
  IconButton,
} from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";
import AddIcon from "@mui/icons-material/Add";
import { PhotoCamera } from "@mui/icons-material";
import { useMutation, useQueryClient } from "react-query";
import { useSelector } from "react-redux";
import { addBranch } from "../../utilities/Apis.js";
import { toast } from "react-toastify";

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

export default function ProjectsHeader() {
  const [open, setOpen] = useState(false);
  // State variables for form inputs
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [image, setImage] = useState(null);
  // const [description, setDescription] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const queryClient = useQueryClient();
  const token = useSelector((state) => state.user.token);
  const { mutate, isLoading, isSuccess, isError, error } = useMutation({
    mutationFn: (branchData) => addBranch(branchData, token),
    onSuccess: () => {
      queryClient.invalidateQueries(["branches"]);
      handleClose();
      setName("");
      setLocation("");
      setImage(null);
      setImagePreview(null);
      // setDescription("");
    },
  });
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate required fields (removed image from required fields)
    if (!name || !location) {
      toast.warn("يرجى ملء جميع الحقول المطلوبة قبل الحفظ.");
      return;
    }

    const branchData = {
      name,
      location,
      image, // image is now optional
      // description,
    };

    mutate(branchData);
  };

  {
    isLoading && <p>Saving branch...</p>;
  }
  {
    isError && <p className="text-red-500">Error: {error.message}</p>;
  }
  {
    isSuccess && <p className="text-green-500">Branch added successfully!</p>;
  }

  return (
    <Box sx={{ width: "100%", mb: 4 }}>
      {/* الخط العلوي */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 2,
        }}
      >
        <Button
          variant="contained"
          // startIcon={<AddIcon />}
          onClick={handleOpen}
          sx={{
            backgroundColor: "#052F72",
            color: "white",
            fontFamily: "Tajawal",
            fontSize: { xs: "14px", sm: "16px" },
            height: { xs: 40, sm: 36 },
            whiteSpace: "nowrap",
            px: { xs: 2, sm: 3 },
            "&:hover": {
              backgroundColor: "#04215A",
            },
          }}
        >
          اضافة فرع
        </Button>

        <Typography
          variant="h5"
          sx={{
            fontFamily: "Tajawal",
            fontWeight: "bold",
            color: "#052F72",
          }}
        >
          الفـروع
        </Typography>
      </Box>

      {/* الخط الأزرق */}
      <Divider sx={{ backgroundColor: "#052F72", height: 2, mb: 3 }} />

      {/* Modal لإضافة مشروع جديد */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "Tajawal",
        }}
      >
        <Box
          sx={{
            backgroundColor: "white",
            p: 3,
            borderRadius: 2,
            width: { xs: "90%", sm: "60%", md: "40%" },
            maxWidth: "500px",
          }}
        >
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            sx={{ mb: 2, textAlign: "center", fontWeight: "bold" }}
          >
            إنشاء فرع جديد
          </Typography>

          <Box
            component="form"
            sx={{ display: "flex", flexDirection: "column", gap: 2 }}
          >
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <TextField
                label="اسم الفرع"
                variant="outlined"
                fullWidth
                size="small"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <Autocomplete
                options={municipalities}
                value={location}
                onChange={(e, newValue) => setLocation(newValue)}
                renderInput={(params) => (
                  <TextField {...params} label="العنوان" />
                )}
              />
            </Box>

            <Box
              sx={{
                direction: "rtl",
                display: "flex",
                alignItems: "center",
                justifyContent: imagePreview ? "space-between" : "center",
                gap: 2,
                mt: 1,
                width: "100%",
              }}
            >
              <Button
                variant="contained"
                component="label"
                sx={{ gap: 3 }}
                startIcon={<PhotoCamera />}
              >
                تحميل صورة (اختياري)
                <input
                  hidden
                  accept="image/*"
                  type="file"
                  onChange={(e) => {
                    const file = e.target.files[0];
                    if (file) {
                      setImageFile(file);
                      setImage(file);
                      setImagePreview(URL.createObjectURL(file));
                    }
                  }}
                />
              </Button>

              {imagePreview && (
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <img
                    src={imagePreview}
                    alt="Preview"
                    style={{ maxHeight: 150, marginTop: 10 }}
                  />
                  <IconButton
                    size="small"
                    onClick={() => {
                      setImage(null);
                      setImagePreview(null);
                      setImageFile(null);
                    }}
                    sx={{ alignSelf: "flex-start" }}
                  >
                    ×
                  </IconButton>
                </Box>
              )}
            </Box>

            {/* الأزرار */}
            <Box
              sx={{ display: "flex", justifyContent: "space-between", mt: 1 }}
            >
              <Button
                variant="outlined"
                onClick={handleClose}
                sx={{ fontFamily: "Tajawal" }}
              >
                إلغاء
              </Button>
              <Button
                onClick={handleSubmit}
                variant="contained"
                sx={{
                  backgroundColor: "#052F72",
                  color: "white",
                  fontFamily: "Tajawal",
                  "&:hover": {
                    backgroundColor: "#04215A",
                  },
                }}
                disabled={isLoading}
              >
                {isLoading ? "جاري الحفظ" : " حفظ"}
              </Button>
            </Box>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
}