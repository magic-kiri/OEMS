import React from "react";
import bodystyle from "./body.module.css";
import ExamCardRunning from "./RunningExamCard";
import ExamCardNormal from "./ExamCard";

const Body = () => {
  return (
    <div className={bodystyle.bodyrest}>
      <ExamCardRunning
        title="Course Title"
        courseCode="CSE 334"
        time="1 hour and 30 minutes remaining."
      />
      <ExamCardNormal
        title="Course Title"
        courseCode="CSE 333"
        time="2:30PM, 29 October 2019"
      />
      <ExamCardNormal
        title="Course Title"
        courseCode="CSE 333"
        time="2:30PM, 29 October 2019"
      />
      <ExamCardNormal
        title="Course Title"
        courseCode="CSE 333"
        time="2:30PM, 29 October 2019"
      />
      <ExamCardNormal
        title="Course Title"
        courseCode="CSE 333"
        time="2:30PM, 29 October 2019"
      />
      <ExamCardNormal
        title="Course Title"
        courseCode="CSE 333"
        time="2:30PM, 29 October 2019"
      />
      <ExamCardNormal
        title="Course Title"
        courseCode="CSE 333"
        time="2:30PM, 29 October 2019"
      />
      <ExamCardNormal
        title="Course Title"
        courseCode="CSE 333"
        time="2:30PM, 29 October 2019"
      />
      <ExamCardNormal
        title="Course Title"
        courseCode="CSE 333"
        time="2:30PM, 29 October 2019"
      />
      <ExamCardNormal
        title="Course Title"
        courseCode="CSE 333"
        time="2:30PM, 29 October 2019"
      />
      <ExamCardNormal
        title="Course Title"
        courseCode="CSE 333"
        time="2:30PM, 29 October 2019"
      />
      <ExamCardNormal
        title="Course Title"
        courseCode="CSE 333"
        time="2:30PM, 29 October 2019"
      />
      <ExamCardNormal
        title="Course Title"
        courseCode="CSE 333"
        time="2:30PM, 29 October 2019"
      />
    </div>
  );
};

export default Body;
