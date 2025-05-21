import { useState } from "react";
import image from "../utilities/assets/publicImage.png";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
//-------------------
export default function Questions() {
  const [hasMultipleBranches, setHasMultipleBranches] = useState(null);
  const [branches, setBranches] = useState([{ 
    name: "", 
    code700: "", 
    address: "", 
    employees: "" 
  }]);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (hasMultipleBranches === false) {
      navigate("/");
    } else {
      toast.success("تم حفظ بيانات الفروع بنجاح");
      navigate("/");
    }
  };

  const addBranch = () => {
    setBranches([...branches, { 
      name: "", 
      code700: "", 
      address: "", 
      employees: "" 
    }]);
  };

  const handleBranchChange = (index, field, value) => {
    const updatedBranches = [...branches];
    updatedBranches[index][field] = value;
    setBranches(updatedBranches);
  };

  return (
    <div className="flex flex-col sm:flex-row justify-between items-center h-[100vh]">
      {/* Left Section - Form */}
      <div className="w-full sm:w-1/3 mx-auto h-ful py-10">
        <h2 className="sm:max-w-3xl my-5 w-full px-3 text-xl font-semibold">
          الأسئلة الأولية
        </h2>
        <p className="text-xs text-light px-3">
          الرجاء الإجابة على الأسئلة التالية للمتابعة
        </p>

        <form onSubmit={handleSubmit} className="max-w-3xl mt-5 flex-wrap py-3 px-3">
          {/* Main Question */}
          <div className="mb-8">
            <label className="block text-lg font-medium mb-4 text-gray-700">
              هل الشركة مكونة من أكثر من فرع؟
            </label>
            
            <div className="flex gap-4 justify-center">
              <button
                type="button"
                onClick={() => setHasMultipleBranches(true)}
                className={`px-6 py-2 rounded-full ${
                  hasMultipleBranches === true 
                    ? "bg-primary text-white"
                    : "bg-gray-200 text-gray-700"
                }`}
              >
                نعم
              </button>
              
              <button
                type="button"
                onClick={() => setHasMultipleBranches(false)}
                className={`px-6 py-2 rounded-full ${
                  hasMultipleBranches === false 
                    ? "bg-primary text-white"
                    : "bg-gray-200 text-gray-700"
                }`}
              >
                لا
              </button>
            </div>
          </div>

          {/* Branches Fields (appears when "Yes" is selected) */}
          {hasMultipleBranches === true && (
            <div className="space-y-4 max-h-[300px] overflow-y-auto pr-2">
              <h3 className="text-md font-semibold text-gray-700">
                بيانات الفروع الإضافية
              </h3>
              
              {branches.map((branch, index) => (
                <div key={index} className="bg-gray-50 p-3 rounded-lg">
                  <div className="mb-3">
                    <label className="block text-sm font-medium mb-1 text-gray-600">
                      اسم الفرع {index + 1}
                    </label>
                    <input
                      value={branch.name}
                      onChange={(e) => handleBranchChange(index, 'name', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      required
                    />
                  </div>
                  
                  <div className="mb-3">
                    <label className="block text-sm font-medium mb-1 text-gray-600">
                      كود 700
                    </label>
                    <input
                      value={branch.code700}
                      onChange={(e) => handleBranchChange(index, 'code700', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      required
                    />
                  </div>
                  
                  <div className="mb-3">
                    <label className="block text-sm font-medium mb-1 text-gray-600">
                      عنوان الفرع
                    </label>
                    <input
                      value={branch.address}
                      onChange={(e) => handleBranchChange(index, 'address', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      required
                    />
                  </div>
                  
                  <div className="mb-3">
                    <label className="block text-sm font-medium mb-1 text-gray-600">
                      عدد الموظفين
                    </label>
                    <input
                      type="number"
                      value={branch.employees}
                      onChange={(e) => handleBranchChange(index, 'employees', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      required
                    />
                  </div>
                </div>
              ))}
              
              <button
                type="button"
                onClick={addBranch}
                className="text-primary text-sm flex items-center gap-1 mt-2"
              >
                <span>+</span>
                إضافة فرع جديد
              </button>
            </div>
          )}

          {/* Submit Button */}
          <div className="w-full my-5">
            <button
              type="submit"
              disabled={hasMultipleBranches === null}
              className={`block w-[93%] mx-auto py-2 px-3 my-4 rounded-xl text-lg font-semibold ${
                hasMultipleBranches === null
                  ? "bg-gray-300 cursor-not-allowed"
                  : "bg-primary text-white"
              }`}
            >
              {hasMultipleBranches === true ? "حفظ البيانات" : "المتابعة"}
            </button>
          </div>
        </form>
      </div>

      {/* Right Section - Image (same design as Otp.jsx) */}
      <div className="sm:w-1/3 bg-primary flex justify-center items-center h-full rounded-lg">
        <img
          className="w-full border-2 border-white rounded-lg shadow-lg relative sm:right-1/3 h-fit sm:h-4/5"
          src={image}
          alt="صورة توضيحية"
        />
      </div>
    </div>
  );
}