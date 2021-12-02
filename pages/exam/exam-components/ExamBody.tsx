import React from "react";
import ExamBodyStyle from "./examBody.module.css";
import Tabs from "./Tabs";
import ExamHeaderCard from "./ExamHeaderCard";

const ExamBody = () => {
  return (
    <div className={ExamBodyStyle.examBody}>
      <ExamHeaderCard
        status="Running Exam"
        title="Database Management System and Software Engineering"
        courseCode="CSE 334"
        time="01:29:45"
      />
      <Tabs />
    </div>
  );
};

export default ExamBody;
