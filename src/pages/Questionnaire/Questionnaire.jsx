import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Popup from "../../components/Questionnaire/Popup";
import { useQuery } from "react-query";
import { getCategories, surveys } from "../../utilities/Apis";
import { useSelector } from "react-redux";
import SurveyCard from "../../components/Questionnaire/SurveyCard";

export default function Questionnaire() {
  const navigate = useNavigate();
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const user = useSelector((store) => store.user);

  const { data } = useQuery({
    queryKey: ["get-categories"],
    queryFn: () => getCategories(user?.token),
  });

  const { data: survyes } = useQuery({
    queryKey: ["surveys"],
    queryFn: () => surveys(user?.token),
  });

  const openPopup = () => setIsPopupOpen(true);

  const handleSurveyClick = (surveyId) => {
    navigate(`/questionnaire/${surveyId}/results`);
  };

  return (
    <div className="min-h-screen p-6 bg-gray-50 flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between flex-row-reverse mb-8">
        <h1 className="text-2xl font-bold text-primary">الاستبيانات</h1>
        <button
          onClick={openPopup}
          className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg shadow-md transition"
        >
          <span>إنشاء استبيان</span>
          <FontAwesomeIcon icon={faPlus} className="text-sm" />
        </button>
      </div>

      {/* Content */}
      <div className="flex-grow flex flex-col items-center justify-start">
        <div className="w-full max-w-6xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {survyes?.data?.map((survey, index) => (
              <SurveyCard survey={survey} key={index} />
            ))}
          </div>
        </div>
      </div>

      {/* Create Survey Popup */}
      {isPopupOpen && (
        <Popup setIsPopupOpen={setIsPopupOpen} data={data?.data} />
      )}
    </div>
  );
}
