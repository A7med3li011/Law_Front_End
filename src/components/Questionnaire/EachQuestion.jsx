import { useContext, useEffect, useState } from "react";
import AutoComplete from "../../ui/AutoComplete";
import { StoringContext } from "../../context/StoringContext";
import { useSelector } from "react-redux";

const workersClass = [
  "فئه عشرين عامل فاقل",
  "فئه من 21 عامل الى 49",
  "فئه خمسين عامل فأكثر",
];

const repetions = [
  "مره",
  "مرتان",
  "ثلاث مرات",
  "اربع مرات",
  "اكثر من اربع مرات",
];

export default function EachQuestion({
  data,
  ind,
  lenghtArray,
  needWorkers,
  needRepeations,
}) {


  const user = useSelector((store) => store.user.user);
  
  const { asnwers, setAnswers } = useContext(StoringContext);
 
  const [answer, setAnswer] = useState({
    questionId: data?._id || "",
    createdBy: user._id,
    assignTo: user.branchId || user._id,
    answer: { value: "", numberOfWorkers: "", numberOfRepetion: "" },
  });
  const [validationError, setValidationError] = useState("");

  
  useEffect(() => {
    if (answer.answer.value) {
      const existAnswer = asnwers.find(
        (ele) => ele.questionId == answer.questionId
      );
      if (existAnswer) {
        setAnswers((prev) => {
          const filterd = prev.filter(
            (ele) => ele.questionId != answer.questionId
          );
          return [...filterd, answer];
        });
      } else {
        setAnswers((prev) => [...prev, answer]);
      }
    }
  }, [answer]);

  const validateAnswer = () => {
    if (answer.answer.value === "نعم") {
      if (needWorkers && !answer.answer.numberOfWorkers) {
        setValidationError("يجب اختيار عدد العمال");
        return false;
      }
      if (needRepeations && !answer.answer.numberOfRepetion) {
        setValidationError("يجب اختيار عدد مرات التكرار");
        return false;
      }
    }
    setValidationError("");
    return true;
  };

  const handleRadioChange = (value) => {
    setAnswer((prev) => ({
      ...prev,
      answer: {
        ...prev.answer,
        value: value,
        numberOfWorkers: value === "نعم" ? prev.answer.numberOfWorkers : "",
        numberOfRepetion: value === "نعم" ? prev.answer.numberOfRepetion : "",
      },
      status:
        value === "نعم" ? "active" : value === "لا" ? "achieved" : "settled",
    }));
    validateAnswer();
  };

  const handleWorkerChange = (value) => {
    setAnswer((prev) => ({
      ...prev,
      answer: {
        ...prev.answer,
        numberOfWorkers: value,
      },
    }));
    validateAnswer();
  };

  const handleRepeChange = (value) => {
    setAnswer((prev) => ({
      ...prev,
      answer: {
        ...prev.answer,
        numberOfRepetion: value,
      },
    }));
    validateAnswer();
  };

  return (
<div
  className={`w-full text-center flex flex-row-reverse items-center flex-wrap px-3 ${
    lenghtArray - 1 == ind ? "" : "border-b-primary border-b-[1px]"
  } p-2`}
>
  <p className="w-6/12 text-xs text-end">{data?.questionText}</p>

  <input
    checked={answer.answer.value === "نعم"}
    onChange={(e) => handleRadioChange(e.target.value)}
    className="w-2/12 block"
    type="radio"
    name={`answers_${data?._id || ind}`}
    value="نعم"
  />
  <input
    checked={answer.answer.value === "لا"}
    onChange={(e) => handleRadioChange(e.target.value)}
    className="w-2/12 block"
    type="radio"
    name={`answers_${data?._id || ind}`}
    value="لا"
  />
  <input
    checked={answer.answer.value === "لا ينطبق"}
    onChange={(e) => handleRadioChange(e.target.value)}
    className="w-2/12 block"
    type="radio"
    name={`answers_${data?._id || ind}`}
    value="لا ينطبق"
  />

  {/* وضع حقول الاختيار الإضافية هنا مباشرة بعد حقول الإدخال */}
  <div className="w-full flex flex-col gap-2">
    {needWorkers && answer.answer.value === "نعم" && (
      <AutoComplete
        getOptionLabel={(option) => option}
        size="small"
        parentDeco={"w-1/3 !mt-2 py-0"}
        deco={"py-0"}
        label={"اختر عدد العمال"}
        options={workersClass}
        value={answer.answer.numberOfWorkers}
        onchange={(event, newValue) => {
          handleWorkerChange(newValue);
        }}
        required
      />
    )}

    {needRepeations && answer.answer.value === "نعم" && (
      <AutoComplete
        getOptionLabel={(option) => option}
        size="small"
        parentDeco={"w-1/3 !mt-2 py-0"}
        deco={"py-0"}
        label={"اختر عدد مرات تكرار المخالفة"}
        options={repetions}
        value={answer.answer.numberOfRepetion}
        onchange={(event, newValue) => {
          handleRepeChange(newValue);
        }}
        required
      />
    )}
  </div>

  {validationError && (
    <div className="w-full text-right pr-4">
      <p className="text-red-500 text-sm">{validationError}</p>
    </div>
  )}
</div>
  );
}
