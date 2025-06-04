import { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import AutoComplete from "../../ui/AutoComplete";
import { StoringContext } from "../../context/StoringContext";

// Define the options arrays (these should ideally come from constants or props)
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

export default function EachResult({ data, onAnswerChange }) {
  const user = useSelector((store) => store.user.user);
  const { updatedAsnwers, setupdatedAsnwers } = useContext(StoringContext);

  const [newAnswer, setNewAnswer] = useState({
    changed: false,
    responseId: data?._id || "",
    createdBy: user?._id || "",
    assignTo: data?.assignTo || user?._id,
    answer: {
      value: "",
      numberOfWorkers: "",
      numberOfRepetion: "",
    },
  });

  // Fixed useEffect for context updates
  useEffect(() => {
    if (newAnswer.changed === true) {
      const existingAnswerIndex = updatedAsnwers.findIndex(
        (ele) => ele.responseId === newAnswer.responseId // Fixed: using newAnswer instead of updatedAsnwers
      );

      if (existingAnswerIndex !== -1) {
        // Update existing answer
        setupdatedAsnwers((prev) => {
          const updated = [...prev];
          updated[existingAnswerIndex] = newAnswer;
          return updated;
        });
      } else {
        // Add new answer
        setupdatedAsnwers((prev) => [...prev, newAnswer]);
      }
    }
  }, [newAnswer]); // Added missing dependencies

  // Update state when data changes
  useEffect(() => {
    if (data) {
      setNewAnswer({
        changed: false, // Reset changed flag when initializing
        responseId: data._id || "",
        assignTo: data?.assignTo || user?._id,
        createdBy: user?._id || "",
        answer: {
          value: data?.answer?.value || "",
          numberOfWorkers: data?.answer?.numberOfWorkers || "",
          numberOfRepetion: data?.answer?.numberOfRepetion || "",
        },
      });
    }
  }, [data, user]);
  console.log(newAnswer, "newAcvvv");

  // Handle radio button changes
  function handleRadioChange(value) {
    const updatedAnswer = {
      ...newAnswer,
      changed: true,
      answer: {
        ...newAnswer.answer,
        value: value,
        // Reset dependent fields when changing radio selection
        numberOfWorkers:
          value === "نعم" ? newAnswer.answer.numberOfWorkers : "",
        numberOfRepetion:
          value === "نعم" ? newAnswer.answer.numberOfRepetion : "",
      },
      status:
        value === "نعم" ? "active" : value === "لا" ? "achieved" : "settled",
      assignTo: newAnswer.assignTo || user._id,
      createdBy: user?._id || "",
    };

    setNewAnswer({
      ...updatedAnswer,
      assignTo: data.assignTo || user._id,
      createdBy: user?._id || "",
    });

    // Call parent callback if provided
    if (onAnswerChange) {
      onAnswerChange(updatedAnswer);
    }
  }

  console.log(updatedAsnwers, "updatedAnser");

  function handleWorkerChange(value) {
    const updatedAnswer = {
      ...newAnswer,
      changed: true,
      answer: {
        ...newAnswer.answer,
        numberOfWorkers: value,
      },
    };

    setNewAnswer(updatedAnswer);

    if (onAnswerChange) {
      onAnswerChange(updatedAnswer);
    }
  }

  function handleRepeChange(value) {
    const updatedAnswer = {
      ...newAnswer,
      changed: true,
      answer: {
        ...newAnswer.answer,
        numberOfRepetion: value,
      },
    };

    setNewAnswer(updatedAnswer);

    if (onAnswerChange) {
      onAnswerChange(updatedAnswer);
    }
  }

  // Early return if no data
  if (!data || !data.questionId) {
    return null;
  }

  return (
    <div className="w-full text-center flex flex-row-reverse items-center flex-wrap px-3 p-2">
      {/* Question text */}
      <p className="w-4/12 text-xs text-end">{data.questionId.questionText}</p>
      <p className="w-2/12 text-xs text-center">
        {data.questionId.categoryId.title}
      </p>

      {/* Radio buttons */}
      <input
        checked={newAnswer.answer.value === "نعم"}
        onChange={(e) => handleRadioChange(e.target.value)}
        className="w-2/12 block"
        type="radio"
        name={`answers_${data._id}`}
        value="نعم"
        id={`yes_${data._id}`}
      />

      <input
        checked={newAnswer.answer.value === "لا"}
        onChange={(e) => handleRadioChange(e.target.value)}
        className="w-2/12 block"
        type="radio"
        name={`answers_${data._id}`}
        value="لا"
        id={`no_${data._id}`}
      />

      <input
        checked={newAnswer.answer.value === "لا ينطبق"}
        onChange={(e) => handleRadioChange(e.target.value)}
        className="w-2/12 block"
        type="radio"
        name={`answers_${data._id}`}
        value="لا ينطبق"
        id={`na_${data._id}`}
      />

      {/* Conditional fields */}
      {data.questionId.needNumberOFRepetition &&
        newAnswer.answer.value === "نعم" && (
          <div>
            <span>عدد مرات تكرار المخالفة</span>
            <AutoComplete
              getOptionLabel={(option) => option}
              size="small"
              parentDeco="w-1/3 !mt-5 py-0"
              deco="py-0"
              label="اختر عدد مرات تكرار المخالفة"
              options={repetions}
              value={newAnswer.answer.numberOfRepetion}
              onchange={(event, newValue) => {
                handleRepeChange(newValue);
              }}
            />
          </div>
        )}

      {data.questionId.needNumberOFWorkers &&
        newAnswer.answer.value === "نعم" && (
          <AutoComplete
            getOptionLabel={(option) => option}
            size="small"
            parentDeco="w-1/3 !mt-5 py-0"
            deco="py-0"
            label="اختر عدد العمال"
            options={workersClass}
            value={newAnswer.answer.numberOfWorkers}
            onchange={(event, newValue) => {
              handleWorkerChange(newValue);
            }}
          />
        )}
    </div>
  );
}
