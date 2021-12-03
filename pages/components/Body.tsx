import React, { useContext } from "react";
import bodystyle from "./body.module.css";

import { UserContext } from "../_app";

import { useQuery } from "@apollo/client";
import { getAllExamsQuery } from "../../lib/graphqlQuery/graphqlQuery";

import RunningExamCard from "./RunningExamCard";
import ExamCard from "./ExamCard";
import Loading from "../../src/ui-custom-components/Loading";
import { ExamType } from "../../lib/types/types";

const Body = () => {
  const { userInfo } = useContext(UserContext);

  const { data, loading, error } = useQuery(getAllExamsQuery());

  if (loading) {
    return (
      <div className={bodystyle.bodyrest}>
        <Loading />
      </div>
    );
  }
  if (error) {
    return <h1>Error in this section! {error.message}</h1>;
  }
  if (data) {
    const exams: ExamType[] = data.exams;

    return (
      <div className={bodystyle.bodyrest}>
        <RunningExamCard
          title="Database Management System and Software Engineering"
          courseCode="CSE 334"
          time="01:29:45"
        />
        {exams.map((exam) => (
          <ExamCard
            key={exam.id}
            title={exam.exam_title}
            courseCode={exam.course.course_code}
            time="2:30PM, 29 October 2019"
          />
        ))}
      </div>
    );
  }
};

export default Body;
