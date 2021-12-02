import React from "react";
import cardstyle from "./examHeaderCard.module.css";
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
      <Text style={{ marginTop: "10px", fontSize: "16px", color: "white" }}>
        {status} : {courseCode}
      </Text>
      <Text style={{ margin: "-5px", fontSize: "24px", color: "white" }}>
        <strong> {title} </strong>
      </Text>
      <Text style={{ marginBottom: "10px", fontSize: "16px", color: "white" }}>
        {time}
      </Text>
    </div>
  );
};

export default ExamHeaderCard;
