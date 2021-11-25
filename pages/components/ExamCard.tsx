import React from "react";
import cardstyle from "../styling/examcard.module.css";
import Button from "../ui-custom-components/Button";

const ExamCard = () => {
  return (
    <div className={cardstyle.cardNormal}>
      <h4 style={{ marginLeft: "15px" }}>Exam Title</h4>
      <p>Date</p>
      <div>
        <Button style={{ margin: "15px" }} theme="dark">
          Enter
        </Button>
      </div>
    </div>
  );
};

export default ExamCard;
