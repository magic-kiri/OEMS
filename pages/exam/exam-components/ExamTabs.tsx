import React, { useState } from "react";
import { Tabs } from "antd";
import TabsStyle from "./examTabs.module.css";
import Discussion from "./Discussion";
import Clarification from "./Clarification";
import QuestionTeacher from "./QuestionTeacher";
import Participants from "./Participants";
import QuestionStudent from "./QuestionStudent";

const { TabPane } = Tabs;

const ExamTabs = () => {
  const [role, useRole] = useState<string>("teacher");
  if (role === "teacher") {
    return (
      <div className={TabsStyle.tabs}>
        <Tabs centered size="large">
          <TabPane tab="Question" key="question">
            <QuestionTeacher />
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
            <QuestionStudent />
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
