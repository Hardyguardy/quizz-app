import React from "react";
import "./Quizz.css";

const Quizz = () => {
  return (
    <div className="container">
      <h1>Quizz App</h1>
      <hr />
      <h2>What is the capital of Canada?</h2>
      <ul>
        <li>Ottawa</li>
        <li>Vancouver</li>
        <li>Prague</li>
        <li>New York</li>
      </ul>
      <button>Next</button>
      <div className="index">1 of 5 questions</div>
    </div>
  );
};

export default Quizz;
