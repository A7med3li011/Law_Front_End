import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function formatDateOnly(isoString) {
  const date = new Date(isoString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

export default function Row({ data }) {
  const [showPopup, setShowPopup] = useState(false);

  const handleButtonClick = () => {
    setShowPopup(!showPopup);
  };

  return (
    <tr className="text-primary text-xs relative">
      <td className="border px-4 py-2">
        <button
          className="flex items-center justify-center w-full text-xl"
          onClick={handleButtonClick}
        >
          <FontAwesomeIcon icon="fa-solid fa-circle-question" />
        </button>
        {showPopup && (
          <div className="absolute bg-slate-300 w-[300px] py-3 px-4 z-10 shadow-lg rounded-md border top-full left-0 mt-1">
            <div className="flex justify-between items-start mb-2">
              <span className="font-semibold">إضاحات/ملاحظات</span>
              <button
                onClick={() => setShowPopup(false)}
                className="text-gray-600 hover:text-gray-800"
              >
                ×
              </button>
            </div>
            {/* <p className="text-sm">
              {data?.questionId?.questionText || "No question text available"}
            </p> */}
            <div className="mt-2 text-xs text-gray-600">
              {data?.questionId?.notes && (
                <p className="my-2 flex justify-between flex-row-reverse">
                  <span className="text-sm ">ملاحظات</span>
                  <span className="mx-1">:</span>
                  <span> {data?.questionId?.notes}</span>
                </p>
              )}
              {data?.questionId?.description && (
                <p className="my-2 flex justify-between flex-row-reverse">
                  <span className="text-sm ">الوصف</span>
                  <span className="mx-1">:</span>

                  <span> {data?.questionId?.description}</span>
                </p>
              )}
            </div>
          </div>
        )}
      </td>
      <td className="border px-4 py-2 text-end">
        {data?.status == "active" ? "لم يتم الحل" : ""}
      </td>
      <td className="border px-4 py-2 text-end">
        {data?.questionId?.categoryId?.title}
      </td>
      <td className="border px-4 py-2">{formatDateOnly(data?.createdAt)}</td>
      <td className="border px-4 py-2 text-center">
        {data?.questionId?.needNumberOFRepetition == true && (
          <span className="">
            {data?.answer?.numberOfRepetion == "مرتان"
              ? data?.questionId?.punishmentDependRepetition[1]?.fine
              : data?.answer?.numberOfRepetion == "ثلاث مرات"
              ? data?.questionId?.punishmentDependRepetition[2]?.fine
              : data?.answer?.numberOfRepetion == "اربع مرات"
              ? data?.questionId?.punishmentDependRepetition[3]?.fine
              : data?.answer?.numberOfRepetion == "اكثر من اربع مرات"
              ? data?.questionId?.punishmentDependRepetition[4]?.fine
              : data?.questionId?.punishmentDependRepetition[0]?.fine}
          </span>
        )}
        {data?.questionId?.needNumberOFWorkers == true && (
          <span className="">
            {data?.answer?.numberOfWorkers == "فئه من 21 عامل الى 49"
              ? data?.questionId?.punishmentDependWorkers[1]?.amount
              : data?.answer?.numberOfWorkers == "فئه خمسين عامل فأكثر"
              ? data?.questionId?.punishmentDependWorkers[2]?.amount
              : data?.questionId?.punishmentDependWorkers[0]?.amount}
          </span>
        )}

        {data?.questionId?.punishment}
      </td>
      <td className="border px-4 py-2 text-end ">
        {data?.questionId?.questionText}
      </td>
    </tr>
  );
}
