import React from "react";
import bodystyle from "./body.module.css";

import RunningExamCard from "./RunningExamCard";
import ExamCard from "./ExamCard";

const Body = () => {
  

  return (
    <div className={bodystyle.bodyrest}>
      <RunningExamCard
        title="Database Management System and Software Engineering"
        courseCode="CSE 334"
        time="01:29:45"
      />
      <ExamCard
        title="Database Management System and Confused Unga Bunga with Many More Shits"
        courseCode="CSE 333"
        time="2:30PM, 29 October 2019"
      />
    </div>
  );
};

export default Body;
