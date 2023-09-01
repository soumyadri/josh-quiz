import React, { useEffect, useState } from "react";
import { getQuestion } from "../api";
import MultipleSelect from "./MultipleSelect";
import "./../App.css";

export const Questions = () => {
  const [questionSet, setQuestionSet] = useState([]);
  const [timer, setTimer] = useState(600);
  const [timerString, setTimerString] = useState("10 min 0 sec");
  const [questionAnswer, setQuestionAnswer] = useState({});
  const questions = async () => {
    const result = await getQuestion(15);
    setQuestionSet(result);
    localStorage.setItem("questions", JSON.stringify(result));
  };
  const getDropDownValue = (params) => {
    let array = [];
    array.push({ value: 1, label: params.correct_answer });
    for (var i = 0; i < 3; i++) {
      array.push({ value: i + 1, label: params.incorrect_answers[i] });
    }
    return array;
  };
  const booleanDropDownValue = (params) => {
    return [
      { value: 1, label: "True" },
      { value: 2, label: "False" },
    ];
  };
  const calculateTime = (params) => {
    const min = Math.floor(params / 60);
    const sec = params % 60;
    return `${min} min ${sec}`;
  };
  const handleSubmit = () => {
    console.log("ques", questionAnswer);
    localStorage.setItem("questionAnswers", JSON.stringify(questionAnswer));
    window.location.href = "/result";
  };
  const handleChange = (index, value) => {
    setQuestionAnswer({ ...questionAnswer, [index]: value });
  };
  useEffect(() => {
    questions();
  }, []);

  useEffect(() => {
    const res = calculateTime(timer);
    console.log(res);
    setTimerString(res);
  }, [timer]);
  return (
    <div className="question-container-page">
      <div>
        <h2>Question</h2>
        <h5>Time Remaining : {timerString} sec</h5>
      </div>
      <div className="question-outer-container">
        {questionSet.map((el, i) => (
          <div className="question-inner-container">
            <div className="question-index">{i + 1}</div>
            {el.type === "multiple" ? (
              <div className="question-container">
                <div className="question-topbar">
                  <div className="question-category">{el.category}</div>
                  <div className="question-question">{el.question}</div>
                </div>
                <MultipleSelect
                  index={i + 1}
                  options={getDropDownValue(el)}
                  placeholder="Select options"
                  onChange={handleChange}
                />
              </div>
            ) : (
              <div className="question-container">
                <div className="question-topbar">
                  <div className="question-category">{el.category}</div>
                  <div className="question-question">{el.question}</div>
                </div>
                <MultipleSelect
                  index={i + 1}
                  options={booleanDropDownValue(el)}
                  placeholder="Select options"
                  onChange={handleChange}
                />
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="login-input-container">
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};
