import React from "react";

export default function FAQ() {
  return (
    <section className="relative w-full " id="faq">
      <div className="mx-auto px-5">
        <div className="flex flex-col items-center">
          <h1 className="mt-5 text-center font-semibold tracking-tight text-4xl  text-primary">
            الأسئلة الشائعة
          </h1>
        </div>
        <div className=" divide-y divide-neutral-200">
          <div className="py-5">
            <details className="group">
              <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                <span>كيف يمكنني إنشاء حساب على المنصة؟</span>
                <span className="transition group-open:rotate-180">
                  <svg
                    fill="none"
                    height={24}
                    shapeRendering="geometricPrecision"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    width={24}
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </span>
              </summary>
              <p className="group-open:animate-fadeIn mt-3 text-neutral-600">
                تعرف على خطوات التسجيل وتفعيل الحساب خلال دقائق.
              </p>
            </details>
          </div>
          <div className="py-5">
            <details className="group">
              <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                <span> هل يجب إضافة منشأة أو مشروع بعد التسجيل؟</span>
                <span className="transition group-open:rotate-180">
                  <svg
                    fill="none"
                    height={24}
                    shapeRendering="geometricPrecision"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    width={24}
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </span>
              </summary>
              <p className="group-open:animate-fadeIn mt-3 text-neutral-600">
                اكتشف أهمية إضافة منشأة أو فرع للاستفادة من خدمات المنصة.
              </p>
            </details>
          </div>
          <div className="py-5">
            <details className="group">
              <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                <span>
                  {" "}
                  ما هي الجهات الحكومية التي يمكنني التعامل معها عبر المنصة؟
                </span>
                <span className="transition group-open:rotate-180">
                  <svg
                    fill="none"
                    height={24}
                    shapeRendering="geometricPrecision"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    width={24}
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </span>
              </summary>
              <p className="group-open:animate-fadeIn mt-3 text-neutral-600">
                تعرّف على أنواع الجهات الرسمية المتاحة ضمن النظام.
              </p>
            </details>
          </div>
          <div className="py-5">
            <details className="group">
              <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                <span> كيف يمكنني إجراء تقييم ذاتي للامتثال؟</span>
                <span className="transition group-open:rotate-180">
                  <svg
                    fill="none"
                    height={24}
                    shapeRendering="geometricPrecision"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    width={24}
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </span>
              </summary>
              <p className="group-open:animate-fadeIn mt-3 text-neutral-600">
                خطوات مبسطة لإجراء التقييم الذاتي وتقديمه بسهولة.
              </p>
            </details>
          </div>
          <div className="py-5">
            <details className="group">
              <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                <span> هل يمكنني تعديل بيانات الامتثال بعد الإرسال؟</span>
                <span className="transition group-open:rotate-180">
                  <svg
                    fill="none"
                    height={24}
                    shapeRendering="geometricPrecision"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    width={24}
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </span>
              </summary>
              <p className="group-open:animate-fadeIn mt-3 text-neutral-600">
                معلومات حول إمكانية التعديل بعد تقديم التقييم.
              </p>
            </details>
          </div>
          <div className="py-5">
            <details className="group">
              <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                <span> كيف يتم احتساب النتائج والإحصائيات؟</span>
                <span className="transition group-open:rotate-180">
                  <svg
                    fill="none"
                    height={24}
                    shapeRendering="geometricPrecision"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    width={24}
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </span>
              </summary>
              <p className="group-open:animate-fadeIn mt-3 text-neutral-600">
                شرح لطريقة تحليل واحتساب نتائج التقييم الذاتي.
              </p>
            </details>
          </div>
        </div>
      </div>
    </section>
  );
}
