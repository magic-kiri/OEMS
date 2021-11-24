import React from "react";
import cardstyle from "../styling/examcard.module.css";
import Button from "../ui-custom-components/Button";

const ExamCard = () => {
  return (
    <div className={cardstyle.cardRunning}>
      <div
        style={{ display: "flex", flexDirection: "column", marginLeft: "15px" }}
      >
        <p style={{ marginBottom: "unset" }}>Running Exam</p>
        <h3>
          <b>Course Code</b>
        </h3>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginRight: "15px",
          alignContent: "right",
        }}
      >
        <p>Date</p>
        <div>
          <Button style={{ marginBottom: "15px" }}>Enter</Button>
        </div>
      </div>
    </div>
  );
};

export default ExamCard;
