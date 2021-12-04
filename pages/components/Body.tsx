import React, { useContext } from "react";
import bodystyle from "./body.module.css";

import { UserContext } from "../_app";

import { useQuery } from "@apollo/client";
import { getAllExamsQuery } from "../../lib/graphqlQuery/graphqlQuery";

import RunningExamCard from "./RunningExamCard";
import ExamCard from "./ExamCard";
import Loading from "../../src/ui-custom-components/Loading";
import { ExamTypeDate } from "../../lib/types/types";
import moment from "moment";
import { convertExamDates, parseExams } from "../utils/quickFunctions";

const Body = ({ examCatagory }: { examCatagory: string }) => {
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
    const exams: ExamTypeDate[] = data.exams.map(convertExamDates);
    const { upcomming, running, finished } = parseExams(exams);
    if (examCatagory === "active") {
      return (
        <div className={bodystyle.bodyrest}>
          <RunningExamCard
            title="Database Management System and Software Engineering"
            courseCode="CSE 334"
            time="01:29:45"
          />
          {upcomming.map((exam) => {
            const time = moment(exam.start_time).format("LT");
            const date = moment(exam.start_date).format("ll");
            return (
              <ExamCard
                key={exam.id}
                title={exam.exam_title}
                courseCode={exam.course.course_code}
                time={`${time}, ${date}`}
              />
            );
          })}
        </div>
      );
    } else {
      return (
        <div className={bodystyle.bodyrest}>
          {finished.map((exam) => {
            const time = moment(exam.start_time).format("LT");
            const date = moment(exam.start_date).format("ll");
            return (
              <ExamCard
                key={exam.id}
                title={exam.exam_title}
                courseCode={exam.course.course_code}
                time={`${time}, ${date}`}
              />
            );
          })}
        </div>
      );
    }
  }
};

export default Body;
