import React, { useState } from "react";
import { Tabs } from "antd";
import TabsStyle from "./examTabs.module.css";
import Discussion from "./Discussion";
import Clarification from "./Clarification";
import QuestionTeacher from "./QuestionTeacher";
import Participants from "./Participants";
import QuestionStudent from "./QuestionStudent";
import { ExamTypeDate } from "../../../lib/types/types";
import { useSession } from "next-auth/client";
import Loading from "../../../src/ui-custom-components/Loading";

const { TabPane } = Tabs;

type ExamTabsProps = {
  exam: ExamTypeDate;
  status: string;
};

const ExamTabs = ({ exam, status }: ExamTabsProps) => {
  let adminRole: boolean = false;
  const [session, loading] = useSession();

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
  } else {
    if (session?.adminRole) {
      adminRole = true;
    }
  }

  if (adminRole) {
    return (
      <div className={TabsStyle.tabs}>
        <Tabs centered size="large">
          <TabPane tab="Question" key="question">
            <QuestionTeacher status={status} />
          </TabPane>
          <TabPane tab="Discussion" key="discussion">
            <Discussion />
          </TabPane>
          <TabPane tab="Clarifications" key="clarifications">
            <Clarification />
          </TabPane>
          <TabPane tab="Participants" key="participants">
            <Participants />
          </TabPane>
        </Tabs>
      </div>
    );
  } else {
    return (
      <div className={TabsStyle.tabs}>
        <Tabs centered size="large">
          <TabPane tab="Question" key="question">
            <QuestionStudent status={status} />
          </TabPane>
          <TabPane tab="Discussion" key="discussion">
            <Discussion />
          </TabPane>
          <TabPane tab="Clarifications" key="clarifications">
            <Clarification />
          </TabPane>
        </Tabs>
      </div>
    );
  }
};

export default ExamTabs;
