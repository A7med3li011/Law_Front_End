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
  // console.log(user._id);
  const { asnwers, setAnswers } = useContext(StoringContext);
  const [answer, setAnswer] = useState({
    questionId: data?._id || "",
    createdBy: user._id,
    assignTo: user.branchId || user._id,
    answer: { value: "", numberOfWorkers: "", numberOfRepetion: "" },
  });

  // تحديث الإجابات عند التغيير
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

    console.log(answer, "cccccccc");
  }, [answer]);

  const handleRadioChange = (value) => {
    setAnswer((prev) => ({
      ...prev,
      answer: {
        ...prev.answer,
        value: value,
      },
      status:
        value === "نعم" ? "active" : value === "لا" ? "achieved" : "settled",
    }));
  };

  const handleWorkerChange = (value) => {
    setAnswer((prev) => ({
      ...prev,
      answer: {
        ...prev.answer,
        numberOfWorkers: value,
      },
    }));
  };

  const handleRepeChange = (value) => {
    setAnswer((prev) => ({
      ...prev,
      answer: {
        ...prev.answer,
        numberOfRepetion: value,
      },
    }));
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

      {needRepeations && answer.answer.value === "نعم" && (
        <AutoComplete
          getOptionLabel={(option) => option}
          size="small"
          parentDeco={"w-1/3 !mt-5 py-0"}
          deco={"py-0"}
          label={"اختر عدد مرات تكرار المخالفة"}
          options={repetions}
          value={answer.answer.numberOfRepetion}
          onchange={(event, newValue) => {
            handleRepeChange(newValue);
          }}
        />
      )}

      {needWorkers && answer.answer.value === "نعم" && (
        <AutoComplete
          getOptionLabel={(option) => option}
          size="small"
          parentDeco={"w-1/3 !mt-5 py-0"}
          deco={"py-0"}
          label={"اختر عدد العمال"}
          options={workersClass}
          value={answer.answer.numberOfWorkers}
          onchange={(event, newValue) => {
            handleWorkerChange(newValue);
          }}
        />
      )}
    </div>
  );
}
