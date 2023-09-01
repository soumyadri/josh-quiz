import React, { useState } from "react";
import "./../App.css";

export const Login = () => {
  const [details, setDetails] = useState({ name: "", email: "" });
  const handleUpdateDetails = (params, value) => {
    setDetails({ ...details, [params]: value });
  };
  const handleSubmit = () => {
    console.log(details);
    window.location.href = "/question"
  };
  return (
    <div className="login-container">
      <div>
        <h3>Please Login</h3>
        <div className="login-input-container">
          <label htmlFor="">Name : </label>
          <input
            className="login-input-box"
            onChange={(e) => handleUpdateDetails("name", e.target.value)}
            type="text"
            placeholder="Name"
          />
        </div>

        <div className="login-input-container">
          <label htmlFor="">Email : </label>
          <input
            className="login-input-box"
            onChange={(e) => handleUpdateDetails("email", e.target.value)}
            type="text"
            placeholder="Email"
          />
        </div>

        <div className="login-input-container">
          <button type="button" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};
