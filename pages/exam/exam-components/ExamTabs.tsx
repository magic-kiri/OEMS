import React from "react";
import { Tabs } from "antd";
import TabsStyle from "./examTabs.module.css";
import Button from "../../ui-custom-components/Button";
import Discussion from "./Discussion";
import Clarification from "./Clarification";
import Question from "./Question";
import Participants from "./Participants";

const { TabPane } = Tabs;

const ExamTabs = () => {
  return (
    <div className={TabsStyle.tabs}>
      <Tabs centered size="large">
        <TabPane tab="Question" key="question">
          <Question />
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
};

export default ExamTabs;
