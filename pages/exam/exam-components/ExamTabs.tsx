import React from "react";
import { Tabs } from "antd";
import TabsStyle from "./examTabs.module.css";
import Button from "../../ui-custom-components/Button";
import Discussion from "./Discussion";
import Clarification from "./Clarification";

const { TabPane } = Tabs;

const AntdTabs = () => {
  return (
    <div className={TabsStyle.tabs}>
      <Tabs centered size="large">
        <TabPane tab="Question" key="dashboard">
          <p>Yet to work</p>
        </TabPane>
        <TabPane tab="Discussion" key="discussion">
          <Discussion />
        </TabPane>
        <TabPane tab="Clarifications" key="clarifications">
          <Clarification />
        </TabPane>
        <TabPane tab="Participants" key="participants">
          <p>Yet to work</p>
        </TabPane>
      </Tabs>
    </div>
  );
};

export default AntdTabs;
