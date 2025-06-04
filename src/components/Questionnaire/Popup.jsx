import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { StoringContext } from "../../context/StoringContext";
import { baseUrl } from "../../utilities/Apis";

export default function Popup({ setIsPopupOpen, data }) {
  const token = useSelector((state) => state.user.token);
  const user = useSelector((store) => store.user.user);
  const closePopup = () => setIsPopupOpen(false);
  const [selectedCategory, setSelectedCategory] = useState([]);
  const navigate = useNavigate();

  const [branches, setBranches] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedBranch, setSelectedBranch] = useState("");

  function controlledCheckBox(id) {
    if (selectedCategory.includes(id)) {
      setSelectedCategory((prev) => prev.filter((ele) => ele != id));
    } else {
      setSelectedCategory((prev) => [...prev, id]);
    }
  }

  useEffect(() => {
    const fetchBranches = async () => {
      setLoading(true);
      try {
        const response = await fetch(`${baseUrl}/branch/list`, {
          headers: { token }
        });
        const responseData = await response.json();
        setBranches(responseData.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBranches();
  }, [token]);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 text-black ">
      <div className="bg-white rounded-lg px-6 py-3 max-w-md w-full mx-4 relative ">
        <div className="text-right" dir="rtl">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold mb-4">اختار الجهة</h3>
           
            <button
              onClick={closePopup}
              className="bg-primary text-white h-7 w-7 block rounded-full"
            >
              <FontAwesomeIcon icon="fa-solid fa-xmark" />
            </button>
          </div>
          
          <select
            className="bg-[#AEB9E1] hover:bg-[#9CA8D0] focus:bg-[#8C97C0] rounded p-2 w-full"
            value={selectedBranch}
            onChange={(e) => setSelectedBranch(e.target.value)}
            disabled={loading}
          >
            <option value="">اختر الفرع (اختياري)...</option>
            {loading ? (
              <option disabled>جاري تحميل الفروع...</option>
            ) : branches && branches.length > 0 ? (
              branches.map(branch => (
                <option key={branch._id} value={branch._id}>
                  {branch.branchName} 
                </option>
              ))
            ) : (
              <option disabled>لا توجد فروع متاحة</option>
            )}
          </select>

          <ul className="h-[300px] overflow-y-auto px-3">
            {data?.map((ele, index) => (
              <li
                key={index}
                className="flex items-center justify-between py-2 border-b-[1px] border-b-primary"
              >
                <p>{ele.title}</p>
                <input
                  onChange={(e) => controlledCheckBox(ele._id)}
                  type="checkbox"
                  className=""
                />
              </li>
            ))}
          </ul>
          
          <button
            disabled={!selectedCategory.length}
            onClick={() => {
              navigate("/newQuestionnaire", {
                state: {
                  categories: selectedCategory,
                  selectedBranch: selectedBranch || user.branchId // استخدام branchId الخاص بالمستخدم إذا لم يتم اختيار فرع
                },
              });
            }}
            className="bg-primary text-white block py-2 px-3 rounded-lg mt-10 ms-auto disabled:bg-blue-900 disabled:cursor-not-allowed"
          >
            بدء الاستبيان
          </button>
        </div>
      </div>
    </div>
  );
}