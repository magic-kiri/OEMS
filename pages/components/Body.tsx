import React, { useContext } from "react";
import bodystyle from "./body.module.css";

import { UserContext } from "../_app";

import { useQuery } from "@apollo/client";
import { getAllExamsQuery } from "../../lib/graphqlQuery/graphqlQuery";

import RunningExamCard from "./RunningExamCard";
import ExamCard from "./ExamCard";
import Loading from "./Loading";

const Body = () => {
  const { userInfo } = useContext(UserContext);

  const { data, loading, error } = useQuery(getAllExamsQuery());

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <h1>Error in this section! {error.message}</h1>;
  }
  if (data) {
    console.log(data);
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
  }
};

export default Body;
