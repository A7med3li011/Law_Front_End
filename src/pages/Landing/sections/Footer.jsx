import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#052F72] text-gray-200 dark:bg-gray-900 rounded-se-[100px] ">
      <div className="w-full max-w-[1500px] mx-auto px-8 sm:px-6 lg:px-8 py-4 lg:py-6 text-right">
        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
          logo
        </span>
        <div className="md:flex md:justify-between gap-10">
          <div className="grid grid-cols-1 gap-8 sm:gap-6 lg:grid-cols-3 ">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-100 uppercase dark:text-white">
                تواصل معنا
              </h2>
              <div className="relative w-full max-w-md">
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>

                <button
                  type="submit"
                  className="absolute left-0.5 top-1/2 -translate-y-1/2 rounded-md bg-white px-4 py-2 text-sm font-semibold text-gray-900 hover:bg-gray-300 transition-all duration-200"
                >
                  إرسال
                </button>

                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="w-full rounded-md bg-[#052F72] border-white border-[1px] px-4 py-2 pl-24 text-base text-white placeholder:text-white focus:outline-none sm:text-sm text-right placeholder:text-right"
                  placeholder="ادخل بريدك الإلكتروني"
                />
              </div>
            </div>
            <div>
              <ul className="text-gray-200 dark:text-gray-400 font-medium flex md:flex-col flex-row justify-center gap-5 md:gap-3 ">
                <li className=" hover:scale-105">
                  <a href="">الصفحة الرئيسية</a>
                </li>
                <li className=" hover:scale-110">
                  <a href="#about-us">من نحن </a>
                </li>
                <li className=" hover:scale-110">
                  <a href="#features">الخدمات </a>
                </li>
                <li className=" hover:scale-110">
                  <a href="#faq">الاسئلة الشائعة</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mb-6 md:mb-0">
            <p className="max-w-lg py-3">
              منصة "ممتثل" هي الحل الأمثل لإدارة المشاريع بذكاء وفعالية. نساعدك
              على تنظيم المهام، تعزيز التعاون بين أعضاء الفريق، وضمان الالتزام
              بالمعايير والتشريعات لتفادي الغرامات والمخالفات. انضم إلى الشركات
              التي تثق بنا لتبسيط إدارة مشاريعها وتحقيق نجاح مستدام.
            </p>
          </div>
        </div>
        <div className="items-center text-center mt-5">
          <span className="text-sm text-gray-400 sm:text-center dark:text-gray-400">
            .ممتثل ©2025 .جميع الحقوق محفوظة
          </span>
        </div>
      </div>
    </footer>
  );
}
