import React from "react";
import bodystyle from "../styling/body.module.css";
import ExamCardRunning from "./RunningExamCard";
import ExamCardNormal from "./ExamCard";

const Body = () => {
  return (
    <div className={bodystyle.bodyrest}>
      <ExamCardRunning />
      <ExamCardNormal />
      <ExamCardNormal />
    </div>
  );
};

export default Body;
