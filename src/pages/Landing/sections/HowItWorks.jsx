import { Link } from "react-router-dom";
import img from "../../../../public/signUpScreen.png";

export default function HowItWorks() {
  return (
    <section id="how-it-works">
      <div className="flex flex-col-reverse lg:flex-row items-center gap-12">
        {/* Image */}
        <div className="flex justify-center items-center">
          <img src={img} alt="How it works " className=" object-contain" />
        </div>
        {/* Text Content */}
        <div className="text-center lg:text-right max-w-xl">
          <h2 className="text-4xl font-extrabold text-primary  mb-6 flex flex-col items-start gap-3">
            آلية ممتثل
            <div className="w-28 h-2 bg-secondary text-right"></div>
          </h2>
          <p className="text-gray-600 text-lg">
            للحصول على حساب في ممتثل يمكنك مشاهدة الفيديو واتباع الخطوات
            التالية:
          </p>
          <ul
            className="text-lg list-decimal list-inside mt-4 space-y-5 text-right text-primary font-semibold"
            dir="rtl"
          >
            <li>التسجيل في ممتثل</li>
            <li> أضف منشأة أو فرعًا أو مشروعًا</li>
            <li> اختر الجهات الحكومية</li>
            <li>قم بإجراء التقييم الذاتي للامتثال </li>
            <li>اعرض النتائج والإحصائيات</li>
          </ul>
          <Link to={"/register"}>
            <button className="mt-6 px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-blue-900 transition-colors">
              تسجيل الدخول
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
