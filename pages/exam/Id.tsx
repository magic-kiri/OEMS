import React from "react";
import Navbar from "../components/Navbar";
import ExamBody from "./exam-components/ExamBody";

const Id = () => {
  return (
    <div>
      <Navbar showTabs={false}/>
      <ExamBody />
    </div>
  );
};

export default Id;
