import React from "react";
import cardstyle from "./examCard.module.css";
import Text from "../ui-custom-components/Text";

type ExamCardProps = {
  title: string;
  time: string; // Time and Date
  courseCode: string;
  onClick?: () => void;
};

const ExamCard = ({ title, time, courseCode, onClick }: ExamCardProps) => {
  return (
    <div className={cardstyle.cardNormal}>
      <div style={{ margin: "15px 45px", fontSize: "16px" }}>
        <Text>
          <strong>{`${courseCode}: ${title}`}</strong>
        </Text>
      </div>
      <Text style={{ margin: "15px 45px", minWidth: "20%" }}>{time}</Text>
    </div>
  );
};

export default ExamCard;
