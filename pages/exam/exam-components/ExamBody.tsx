import React from "react";
import ExamBodyStyle from "./examBody.module.css";
import ExamTabs from "./ExamTabs";
import ExamHeaderCard from "./ExamHeaderCard";
import { useQuery } from "@apollo/client";
import { getExamByIdQuery } from "../../../lib/graphqlQuery/graphqlQuery";
import Loading from "../../../src/ui-custom-components/Loading";
import { convertExamDates } from "../../utils/quickFunctions";
import { ExamTypeDate } from "../../../lib/types/types";

const ExamBody = ({ id }: { id: string }) => {
  const { loading, error, data } = useQuery(getExamByIdQuery(id));
  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "200px",
        }}
      >
        <Loading />
      </div>
    );
  }
  if(data){
    const exams: ExamTypeDate[] = data.exams.map(convertExamDates);
    if(!exams.length){
      return <h1>Wrong URL</h1>
    }

    const exam = exams[0];

    return (
      <div className={ExamBodyStyle.examBody}>
        <ExamHeaderCard
          status="Running Exam"
          title="Database Management System and Software Engineering"
          courseCode="CSE 334"
          time= {exam.end_time}
          id={id}
        />
        <ExamTabs exam={exam}/>
      </div>
    );
  }
  if(error){
    return <h1>Something went wrong!</h1>
  }

};

export default ExamBody;
