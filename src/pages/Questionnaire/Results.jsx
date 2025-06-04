import { useMutation, useQuery } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import { surveysById, UpdatesurveysById } from "../../utilities/Apis";
import { useSelector } from "react-redux";
import EachQuestion from "../../components/Questionnaire/EachQuestion";
import EachResult from "../../components/Questionnaire/EachResult";
import { StoringContext } from "../../context/StoringContext";
import { useContext } from "react";
import { toast } from "react-toastify";

export default function Results() {
  const { id } = useParams();
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  const { data, isLoading } = useQuery({
    queryKey: ["survey_id", id],
    queryFn: () => surveysById(user.token, id),
  });

  const { updatedAsnwers, setupdatedAsnwers } = useContext(StoringContext);

  const { mutate } = useMutation({
    mutationKey: ["update_survey"],
    mutationFn: () => UpdatesurveysById(user.token, updatedAsnwers),
    onSuccess: () => {
      navigate("/questionnaire");
      toast.success("تم تعديل الإجابات بنجاح");
      setupdatedAsnwers([]);
    },
    onError: () => {
      toast.error("  حدث خطأ اثناء تعديل البيانات ");
    },
  });
  return (
    <div className="text-black ">
      <div className="flex justify-between flex-row-reverse items-center py-2">
        <h1 className="text-xl font-semibold  ">اجابات الاستبيان</h1>
        <button
          onClick={() => {
            if (!updatedAsnwers.length) {
              toast.error("لم تقم يتعديل اي من الإجابات");
            } else {
              mutate();
            }
          }}
          className="py-2 px-5 text-white bg-primary rounded-lg"
        >
          حفظ التعديل
        </button>
      </div>
      <div>
        <ul className="w-11/12 mt-6 mx-auto ">
          {data?.data?.respones?.map((ele, index) => (
            <li
              key={index}
              className=" flex flex-col  items-center gap-y-5  w-full mt-10 border-[1px] rounded-lg border-primary py-1 "
            >
              <h5 className=" font-semibold   text-blue-900 w-full text-center py-1">
                {ele.categoryTitle}
              </h5>
              <div className="flex bg-[#AEB9E1] flex-row-reverse w-full font-semibold text-center px-3 text-blue-900 py-1">
                <p className=" w-4/12  ">السؤال</p>
                <p className=" w-2/12 text-center ">الجهة</p>
                <p className=" w-2/12  ">نعم</p>
                <p className=" w-2/12  ">لا</p>
                <p className=" w-2/12  ">لا ينطبق</p>
              </div>
              <EachResult data={ele?.responseId} />
              {/* {ele?.violations?.map((element, index) => (
                <EachQuestion
                  data={element}
                  key={index}
                  ind={index}
                  lenghtArray={ele?.violations?.length}
                  needRepeations={element?.needNumberOFRepetition || null}
                  needWorkers={element?.needNumberOFWorkers || null}
                />
              ))} */}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
