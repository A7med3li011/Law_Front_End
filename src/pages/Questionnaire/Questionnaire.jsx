import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Popup from "../../components/Questionnaire/Popup";
import { useQuery } from "react-query";
import { getCategories, surveys } from "../../utilities/Apis";
import { useSelector } from "react-redux";
import SurveyCard from "../../components/Questionnaire/SurveyCard";
import Loader from "../../components/Loader/Loader";

export default function Questionnaire() {
  const navigate = useNavigate();
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const user = useSelector((store) => store.user);

  const { data } = useQuery({
    queryKey: ["get-categories"],
    queryFn: () => getCategories(user?.token),
  });

  const {
    data: surveysData,
    isLoading,
    isFetching,
  } = useQuery({
    queryKey: ["surveys"],
    queryFn: () => surveys(user?.token),
  });

  const openPopup = () => setIsPopupOpen(true);

  const handleSurveyClick = (surveyId) => {
    navigate(`/questionnaire/${surveyId}/results`);
  };

  // Filter surveys based on search term (show all when search term is empty)
  const filteredSurveys = searchTerm
    ? surveysData?.data?.filter((survey) =>
        (survey?.assignTo?.branchName || survey?.createdBy?.companyName)
          ?.toLowerCase()
          .includes(searchTerm.toLowerCase())
      )
    : surveysData?.data;

  if (isLoading) return <Loader />;

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
      <div
        dir="rtl"
        className="flex items-center self-end gap-x-4 border-primary max-w-48 border-[1px] px-3 py-1 rounded-xl  text-black mb-2"
      >
        <input
          type="text"
          className="bg-transparent px-3  focus:outline-none"
          placeholder="اكتب اسم الفرع"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      {/* Content */}
      <div className="flex-grow flex flex-col items-center justify-start">
        <div className="w-full max-w-6xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSurveys?.length > 0 ? (
              filteredSurveys.map((survey, index) => (
                <SurveyCard survey={survey} key={index} />
              ))
            ) : (
              <p className="col-span-3 text-center py-10 text-gray-500">
                {searchTerm
                  ? "لا توجد استبيانات مطابقة للبحث"
                  : "لا توجد استبيانات متاحة"}
              </p>
            )}
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
