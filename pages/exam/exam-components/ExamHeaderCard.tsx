import React from "react";
import cardstyle from "./examHeaderCard.module.css";
import Button from "../../ui-custom-components/Button";
import Text from "../../ui-custom-components/Text";

type RunningExamCardProps = {
  status: string;
  title: string;
  time: string; // Time
  courseCode: string;
  onClick?: () => void;
};

const ExamHeaderCard = ({
  status,
  title,
  time,
  courseCode,
  onClick,
}: RunningExamCardProps) => {
  return (
    <div className={cardstyle.examHeaderCard}>
      <Text style={{ margin: "unset", fontSize: "16px", color: "white" }}>
        {status} : {courseCode}
      </Text>
      <Text style={{ margin: "unset", fontSize: "24px", color: "white" }}>
        <strong> {title} </strong>
      </Text>
      <Text style={{ fontSize: "16px", color: "white" }}>{time}</Text>
    </div>
  );
};

export default ExamHeaderCard;
