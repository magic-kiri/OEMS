import React from "react";
import cardstyle from "../styling/examcard.module.css";

const ExamCard = () => {
  return (
    <div className={cardstyle.cardNormal}>
      <h4 style={{ marginLeft: "15px" }}>Upcoming Exam</h4>
      <p>
        <b>Course Code</b>
      </p>
      <p>Date</p>
      <div>
        <button style={{ margin: "15px" }}>Enter</button>
      </div>
    </div>
  );
};

export default ExamCard;
