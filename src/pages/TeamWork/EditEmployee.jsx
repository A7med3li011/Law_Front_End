import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave, faTimes } from "@fortawesome/free-solid-svg-icons";

export default function EditEmployee() {
  return (
    <div className="min-h-screen bg-gray-100 p-0">
      {/* Header Section */}
      <div className="bg-white-600 p-6 text-white shadow-md">
        <div className="container mx-auto flex justify-between items-center">
               <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-primary">تعديل بيانات العضو</h1>
        
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto p-6">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          {/* Form Section */}
          <div className="p-8">
            <form className="space-y-8">
              {/* Employee Name */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-gray-700 text-lg mb-3">اسم العضو</label>
                  <input 
                    type="text" 
                    className="w-full px-5 py-3 text-lg border text-gray-600 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    defaultValue="أحمد محمد"
                  />
                </div>

                {/* Branch Select */}
                <div>
                  <label className="block text-gray-700 text-lg mb-3 ">اسم الفرع</label>
                  <select className="w-full px-5 py-3 text-lg border text-gray-600 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option value="">اختر الفرع</option>
                    <option selected>الفرع الرئيسي</option>
                    <option>فرع الرياض</option>
                    <option>فرع جدة</option>
                    <option>فرع الدمام</option>
                  </select>
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-gray-700 text-lg mb-3">البريد الإلكتروني</label>
                <input 
                  type="email" 
                  className="w-full px-5 py-3 text-lg border text-gray-600 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  defaultValue="ahmed@example.com"
                />
              </div>

              {/* Password */}
              <div>
                <label className="block text-gray-700 text-lg mb-3">كلمة المرور</label>
                <input 
                  type="password" 
                  className="w-full px-5 py-3 text-lg border text-gray-600 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="اتركه فارغًا إذا كنت لا تريد التغيير"
                />
              </div>

              {/* Address */}
              <div>
                <label className="block text-gray-700 text-lg mb-3">العنوان</label>
                <textarea 
                  rows={3}
                  className="w-full px-5 py-3 text-lg border text-gray-600 border-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  defaultValue="الرياض، حي الصحافة، شارع الملك فهد"
                ></textarea>
              </div>

              {/* Action Buttons */}
              <div className="flex justify-end space-x-4 pt-8">
                <button 
                  type="button"
                  className="px-8 py-3 flex items-center gap-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 transition text-lg"
                >
                  <FontAwesomeIcon icon={faTimes} />
                  إلغاء
                </button>
                <button 
                  type="submit"
                  className="px-8 py-3 flex items-center gap-2 bg-primary text-white rounded-lg hover:bg-blue-700 transition text-lg"
                >
                  <FontAwesomeIcon icon={faSave} />
                  حفظ التعديلات
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}