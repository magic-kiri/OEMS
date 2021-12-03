import React from "react";
import ExamBodyStyle from "./examBody.module.css";
import ExamTabs from "./ExamTabs";
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
      <ExamTabs />
    </div>
  );
};

export default ExamBody;
