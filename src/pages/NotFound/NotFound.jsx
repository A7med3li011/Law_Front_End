import { ArrowRight, Home, Login, Search } from "@mui/icons-material";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-[#04275D] via-[#0a3470] to-[#04275D] relative overflow-hidden"
      dir="rtl"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-32 h-32 bg-[#F7B21B] rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-32 left-16 w-48 h-48 bg-[#F7B21B] rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#F7B21B] rounded-full blur-3xl opacity-5"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center">
        {/* 404 Number */}
        <div className="mb-8 relative">
          <h1 className="text-4xl md:text-[12rem] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#F7B21B] to-[#ffd700] opacity-90 leading-none select-none">
            عذراً!
          </h1>
        </div>

        {/* Main message */}
        <div className="max-w-2xl mx-auto mb-12 space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
            حدث خطأ أثناء جلب البيانات
          </h2>
          <p className="text-xl text-blue-100 mb-2 leading-relaxed">
            عذراً، الصفحة التي تبحث عنها غير موجودة أو تم نقلها
          </p>
        </div>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          <button
            onClick={() => {
              navigate("/home");
            }}
            className="group flex items-center justify-center gap-3 bg-[#F7B21B] text-[#04275D] px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:bg-[#ffd700] hover:scale-105 hover:shadow-2xl hover:shadow-[#F7B21B]/30 active:scale-95"
          >
            <Home className="w-6 h-6 transition-transform group-hover:scale-110" />
            العودة للرئيسية
          </button>
          <button className="group flex items-center justify-center gap-3 bg-[#F7B21B] text-[#04275D] px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:bg-[#ffd700] hover:scale-105 hover:shadow-2xl hover:shadow-[#F7B21B]/30 active:scale-95">
            <Login
              onClick={() => {
                navigate("/login");
              }}
              className="w-6 h-6 transition-transform group-hover:scale-110"
            />
            تسجيل الدخول
          </button>
        </div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-[#F7B21B] rounded-full opacity-60 animate-ping delay-700"></div>
        <div className="absolute top-3/4 left-1/4 w-3 h-3 bg-[#F7B21B] rounded-full opacity-40 animate-ping delay-1000"></div>
        <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-[#F7B21B] rounded-full opacity-80 animate-ping delay-500"></div>
      </div>
    </div>
  );
}
