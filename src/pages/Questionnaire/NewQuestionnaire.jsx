import { useLocation, useNavigate } from "react-router-dom";
import { getVaiolations, sendAnswers } from "../../utilities/Apis";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { useSelector } from "react-redux";
import EachQuestion from "../../components/Questionnaire/EachQuestion";
import { useContext, useState } from "react";
import { StoringContext } from "../../context/StoringContext";
import { toast } from "react-toastify";

export default function NewQuestionnaire() {
  const location = useLocation();
  const user = useSelector((store) => store.user);
  const { asnwers, setAnswers } = useContext(StoringContext);
  const { categories, selectedBranch } = location.state || {};
  const navigate = useNavigate();
  const queryClient = useQueryClient();

const handleSubmit = () => {
  // لا نتحقق من وجود فرع قبل الإرسال
  const updatedAnswers = asnwers.map(answer => ({
    ...answer,
    assignTo: selectedBranch || user.user.branchId || null
  }));

  mutate(updatedAnswers);
};

  const { mutate } = useMutation({
    mutationKey: ["sendAnswers"],
    mutationFn: (answersToSend) => sendAnswers(user.token, answersToSend),
    onSuccess: () => {
      queryClient.invalidateQueries(["surveys"]);
      navigate("/questionnaire");
      toast.success("تم إرسال الاجابات بنجاح");
      setAnswers([]);
    },
    onError: () => {
      toast.error("حدث خطأ أثناء إرسال الإجابات");
    },
  });

  const { data, isFetching, isLoading } = useQuery({
    queryKey: ["questions"],
    queryFn: () => getVaiolations(user.token, categories),
    enabled: !!user.token && !!categories?.length,
  });

  const totalQuestions =
    data?.data?.reduce(
      (count, category) => count + (category.violations?.length || 0),
      0
    ) || 0;

  const answeredQuestions = asnwers?.length || 0;
  const progress =
    totalQuestions > 0
      ? Math.round((answeredQuestions / totalQuestions) * 100)
      : 0;
  
  if (isLoading) return <p>جاري التحميل...</p>;

  return (
    <div className="text-black">
      <div className="flex items-center justify-between flex-row-reverse">
        <h3 className="text-lg font-semibold">استبيان مخالفات</h3>
        <div className="flex items-center gap-2">
          {selectedBranch && (
            <div className="bg-gray-200 px-3 py-1 rounded">
              الفرع: {selectedBranch.name}
            </div>
          )}
          <button
            onClick={handleSubmit}
            className="py-2 px-5 text-white bg-primary rounded-lg"
          >
            تسجيل
          </button>
        </div>
      </div>
      <div className="w-4/5 mt-6 mx-auto">
        <div className="flex justify-between items-center mb-2">
          <p className="text-black font-medium">
            {answeredQuestions} / {totalQuestions} سؤال مكتمل
          </p>
          <p className="text-sm text-gray-600">{progress}%</p>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-primary h-2 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
      <ul className="w-4/5 mt-6 mx-auto ">
        {data?.data?.map((ele, index) => (
          <li
            key={index}
            className=" flex flex-col  items-center gap-y-5  w-full mt-10 border-[1px] rounded-lg border-primary py-1 "
          >
            <h5 className=" font-semibold   text-blue-900 w-full text-center py-1">
              {ele.categoryTitle}
            </h5>
            <div className="flex bg-[#AEB9E1] flex-row-reverse w-full font-semibold text-center px-3 text-blue-900 py-1">
              <p className=" w-6/12  ">السؤال</p>
              <p className=" w-2/12  ">نعم</p>
              <p className=" w-2/12  ">لا</p>
              <p className=" w-2/12  ">لا ينطبق</p>
            </div>
            {ele?.violations?.map((element, index) => (
              <EachQuestion
                data={element}
                key={index}
                ind={index}
                lenghtArray={ele?.violations?.length}
                needRepeations={element?.needNumberOFRepetition || null}
                needWorkers={element?.needNumberOFWorkers || null}
              />
            ))}
          </li>
        ))}
      </ul>
    </div>
  );
}