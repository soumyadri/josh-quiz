import React, { useEffect, useState } from "react";
import "./../App.css";

export const Result = () => {
      const [totalResult, setTotalResult] = useState(0);
  const handleSubmit = () => {
    window.location.href = "/";
  };
  const checkResult = async (params) => {
      console.log(params);
      var totalNumber = 0;
      const question = JSON.parse(localStorage.getItem('questions'));
      for(var i = 0; i < question.length; i++) {
            if(params[i+1] && params[i+1] === question[i].correct_answer) {
                  totalNumber++;
            }
      }
      setTotalResult(totalNumber);
  }
  useEffect(()=> {
      const result = JSON.parse(localStorage.getItem("questionAnswers"));
      checkResult(result);
  }, []);
  return (
    <div className="login-container">
      <div>
        <h3>Result</h3>
        <div className="login-input-container">Score : {totalResult}</div>

        <div className="login-input-container">
          <button type="button" onClick={handleSubmit}>
            Go to Homepage
          </button>
        </div>
      </div>
    </div>
  );
};
