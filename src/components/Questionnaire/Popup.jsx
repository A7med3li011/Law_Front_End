import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Popup({ setIsPopupOpen, data }) {
  const closePopup = () => setIsPopupOpen(false);
  const [selectedCategory, setSelectedCategory] = useState([]);
  const navigate = useNavigate();

  function controlledCheckBox(id) {
    if (selectedCategory.includes(id)) {
      setSelectedCategory((prev) => prev.filter((ele) => ele != id));
    } else {
      setSelectedCategory((prev) => [...prev, id]);
    }
  }
  useEffect(() => {
    console.log(selectedCategory);
  }, [selectedCategory]);

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

          <ul className="h-[300px] overflow-y-auto px-3">
            {data?.map((ele, index) => (
              <li
                key={index}
                className="flex items-center justify-between py-2 border-b-[1px]  border-b-primary"
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
                },
              });
            }}
            className="bg-primary text-white  block  py-2 px-3 rounded-lg mt-10 ms-auto disabled:bg-blue-900 disabled:cursor-not-allowed"
          >
            بدء الاستبيان
          </button>
        </div>
      </div>
    </div>
  );
}
