import React from "react";
import cardstyle from "../styling/examcard.module.css";
import Button from "../ui-custom-components/Button";

const ExamCard = () => {
  return (
    <div className={cardstyle.cardRunning}>
      <div
        style={{ display: "flex", flexDirection: "column", marginLeft: "15px" }}
      >
        <p style={{ marginBottom: "unset" }}>Running Exam: Course Code</p>
        <h3>
          <strong>Exam Title</strong>
        </h3>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginRight: "15px",
          alignItems: "right",
          justifyContent: "right",
        }}
      >
        <p>Duration</p>
        <Button style={{ marginBottom: "15px" }} theme="transparent">
          Join Now
        </Button>
      </div>
    </div>
  );
};

export default ExamCard;
