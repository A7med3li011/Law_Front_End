import { Link } from "react-router-dom";
import img from "../../../../public/aboutus.svg";

export default function AboutUs() {
  return (
    <section id="about-us">
      <div className="flex flex-col lg:flex-row items-center lg:justify-between gap-12">
        {/* Text Content */}
        <div className="text-center lg:text-right max-w-xl space-y-3">
          <h2 className="text-4xl font-extrabold text-primary  mb-6 flex flex-col items-start gap-3">
            من نحن
            <div className="w-28 h-2 bg-secondary text-right "></div>
          </h2>
          <p className="text-primary font-semibold text-lg">
            وداعًا للغرامات المفاجئة: نحن هنا لحمايتك.
          </p>
          <p>
            في جوهر رؤيتنا، نؤمن بأن الالتزام بالأنظمة لا يجب أن يكون معقدًا أو
            مصدر قلق. لهذا صممنا منصة ترشدك في كل خطوة من خطوات الامتثال
            للمتطلبات النظامية — بوضوح وسهولة واحترافية. لن تواجه بعد اليوم
            غرامات غير متوقعة أو التزامات غائبة عنك. نحن نساعدك على البقاء على
            اطلاع واستباق المتطلبات، لتتمكن من التركيز على تنمية أعمالك بثقة
            وأمان.
          </p>
          <Link to={"/register"}>
            <button className="mt-6 px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-blue-900 transition-colors">
              لمعرفة المزيد
            </button>
          </Link>
        </div>
        {/* Image */}
        <div className="flex justify-center items-center w-full lg:w-1/2">
          <img src={img} alt="about us " className=" object-contain " />
        </div>
      </div>
    </section>
  );
}
