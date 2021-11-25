import React from "react";
import cardstyle from "../styling/examcard.module.css";
import Button from "../ui-custom-components/Button";

type ExamCardProps = {
  title: string;
  time: string; // Time and Date
  courseCode: string;
  onClick?: () => void;
};

const ExamCard = ({ title, time, courseCode, onClick }: ExamCardProps) => {
  return (
    <div className={cardstyle.cardNormal}>
      <h4 style={{ marginLeft: "15px" }}>{title}</h4>
      <p>{time}</p>
    </div>
  );
};

export default ExamCard;
