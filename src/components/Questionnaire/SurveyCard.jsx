import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
function formatDateOnly(isoString) {
  const date = new Date(isoString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}
export default function SurveyCard({ survey }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/survey/${survey._id}`)}
      role="button"
      tabIndex={0}
      className="bg-white rounded-xl shadow-sm hover:shadow-lg cursor-pointer transition-shadow"
    >
      {/* Image */}
      <div className="bg-gray-200 flex items-center justify-center h-52 overflow-hidden rounded-t-lg  ">
        {survey.assignTo?.image?.secure_url ||
        survey.createdBy?.image?.secure_url ? (
          <img
            src={
              survey.assignTo?.image?.secure_url ||
              survey?.createdBy?.image?.secure_url
            }
            alt="Survey"
            className="w-full h-full object-cover  "
            loading="lazy"
          />
        ) : (
          <FontAwesomeIcon
            icon={"fa-solid fa-house"}
            className="text-5xl text-gray-400"
          />
        )}
      </div>

      {/* Survey Info */}
      <div className="p-4 text-gray-800 space-y-2">
        <div className="flex flex-row-reverse justify-between">
          <span>
            <span className="font-semibold mx-1">:</span>
            <span className="font-semibold">الشركة/الفرع</span>
          </span>
          <span>
            {survey?.assignTo?.branchName || survey?.createdBy?.companyName}
          </span>
        </div>

        <div className="flex flex-col items-end gap-1">
          <span>
            <span className="font-semibold mx-1">:</span>
            <span className="font-semibold">الجهات</span>
          </span>
          <div className="text-sm flex flex-wrap justify-end gap-1">
            {[
              ...new Set(
                survey?.respones?.map(
                  (ele) => ele?.responseId?.questionId?.categoryId?.title
                )
              ),
            ].map((title, index) => (
              <span
                key={index}
                className="bg-gray-100 rounded px-2 py-0.5 text-xs"
              >
                {title}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-row-reverse justify-between">
          <span>
            <span className="font-semibold mx-1">:</span>
            <span className="font-semibold">التاريخ</span>
          </span>
          <span>{formatDateOnly(survey?.createdAt)}</span>
        </div>

        <div className="flex flex-row-reverse justify-between">
          <span>
            <span className="font-semibold mx-1">:</span>
            <span className="font-semibold">عدد الأسئلة</span>
          </span>
          <span>{survey?.respones?.length} سؤالاً</span>
        </div>

        <div className="flex flex-row-reverse justify-between text-red-600">
          <span>
            <span className="font-semibold mx-1">:</span>
            <span className="font-semibold">عدد الغرامات</span>
          </span>
          <span>
            {
              survey?.respones?.filter(
                (ele) => ele?.responseId?.answer?.value == "نعم"
              ).length
            }{" "}
          </span>
        </div>
      </div>
    </div>
  );
}
