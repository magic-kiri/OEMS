import React from "react";
import cardstyle from "../styling/examcard.module.css";
import Button from "../ui-custom-components/Button";

type RunningExamCardProps = {
  title: string;
  time: string; // Time
  courseCode: string;
  onClick?: () => void;
};

const ExamCard = ({
  title,
  time,
  courseCode,
  onClick,
}: RunningExamCardProps) => {
  return (
    <div className={cardstyle.cardRunning}>
      <div
        style={{ display: "flex", flexDirection: "column", marginLeft: "15px" }}
      >
        <p style={{ marginBottom: "unset" }}>Running Exam: {courseCode}</p>
        <h3>
          <strong>{title}</strong>
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
        <p>{time}</p>
        <Button style={{ marginBottom: "15px" }} theme="transparent">
          Join Now
        </Button>
      </div>
    </div>
  );
};

export default ExamCard;
