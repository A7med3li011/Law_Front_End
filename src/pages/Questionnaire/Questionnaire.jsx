import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faPlus, 
  faPoll, 
  faQuestion, 
  faCalendar, 
  faExclamationCircle 
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Popup from "../../components/Questionnaire/Popup";

export default function Questionnaire() {
  const navigate = useNavigate();
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const mockSurveys = [
    {
      id: 1,
      title: "Customer Satisfaction Survey",
      imageUrl: "",
      questionsCount: 8,
      createdAt: "2023-10-15",
      fines: 0
    },
    {
      id: 2,
      title: "Service Quality Survey",
      imageUrl: "",
      questionsCount: 12,
      createdAt: "2023-11-20",
      fines: 25
    },
    {
      id: 3,
      title: "User Experience Survey",
      imageUrl: "",
      questionsCount: 5,
      createdAt: "2023-12-05",
      fines: 0
    },
  ];

  const mockCategories = [
    { id: 1, name: "Marketing" },
    { id: 2, name: "Customer Service" },
    { id: 3, name: "Development" },
  ];

  const openPopup = () => setIsPopupOpen(true);

  const handleSurveyClick = (surveyId) => {
    navigate(`/questionnaire/${surveyId}/results`);
  };

  return (
    <div className="min-h-screen p-4 flex flex-col">
      {/* Header section */}
      <div className="flex items-center justify-between flex-row-reverse mb-6">
        <h4 className="text-lg font-semibold text-primary black">الاسنبيانات</h4>
        <button
          onClick={openPopup}
          className="bg-primary text-white py-2 px-3 rounded-lg flex items-center gap-x-3"
          aria-label="Create new survey"
        >
          <span>انشاء استبيان</span>
          <span className="text-sm">
            <FontAwesomeIcon icon={faPlus} />
          </span>
        </button>
      </div>

      {/* Main content centered */}
      <div className="flex-grow flex flex-col items-center justify-center">
        {/* Surveys grid centered */}
        <div className="w-full max-w-6xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {mockSurveys.map((survey) => (
              <div 
                key={survey.id} 
                className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow duration-300"
                onClick={() => handleSurveyClick(survey.id)}
                role="button"
                tabIndex={0}
              >
                {/* Survey image placeholder */}
                <div className="h-40 bg-gray-200 flex items-center justify-center">
                  {survey.imageUrl ? (
                    <img 
                      src={survey.imageUrl} 
                      alt={survey.title} 
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  ) : (
                    <FontAwesomeIcon 
                      icon={faPoll} 
                      className="text-4xl text-gray-400" 
                      aria-hidden="true"
                    />
                  )}
                </div>
                
                {/* Survey details section */}
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2 text-right">
                    {survey.title}
                  </h3>
                  
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>
                      <FontAwesomeIcon icon={faQuestion} className="ml-1" />
                      {survey.questionsCount} Questions
                    </span>
                    <span>
                      <FontAwesomeIcon icon={faCalendar} className="ml-1" />
                      {new Date(survey.createdAt).toLocaleDateString()}
                    </span>
                  </div>
                  
                  {survey.fines > 0 && (
                    <div className="mt-2 text-red-500 text-sm">
                      <FontAwesomeIcon icon={faExclamationCircle} className="ml-1" />
                      Fines: {survey.fines} SAR
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Popup for creating new survey */}
      {isPopupOpen && (
        <Popup 
          setIsPopupOpen={setIsPopupOpen} 
          data={mockCategories} 
        />
      )}
    </div>
  );
}