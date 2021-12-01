import React from "react";
import cardstyle from "./runningExamCard.module.css";
import Button from "../ui-custom-components/Button";
import Text from "../ui-custom-components/Text";

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
        style={{
          display: "flex",
          flexDirection: "column",
          margin: "15px 45px",
        }}
      >
        <Text
          style={{ marginBottom: "unset", fontSize: "16px", color: "white" }}
        >
          Running Exam: {courseCode}
        </Text>
        <Text
          style={{ marginBottom: "unset", fontSize: "24px", color: "white" }}
        >
          <strong> {title} </strong>
        </Text>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          margin: "15px 45px",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={{ fontSize: "16px", color: "white", padding: "10px" }}>
          {time}
        </Text>
        <Button style={{ marginBottom: "15px" }} theme="transparent">
          Participate Now
        </Button>
      </div>
    </div>
  );
};

export default ExamCard;
