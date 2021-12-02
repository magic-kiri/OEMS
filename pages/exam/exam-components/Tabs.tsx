import React from "react";
import { Tabs } from "antd";
import TabsStyle from "./tabs.module.css";

const { TabPane } = Tabs;

const AntdTabs = () => {
  return (
    <div className={TabsStyle.tabs}>
      <Tabs type="card" centered size="large">
        <TabPane tab="Question" key="dashboard">
          <p>Content of Tab Pane 1</p>
          <p>Content of Tab Pane 1</p>
          <p>Content of Tab Pane 1</p>
        </TabPane>
        <TabPane tab="Discussion" key="discussion">
          <p>Content of Tab Pane 2</p>
          <p>Content of Tab Pane 2</p>
          <p>Content of Tab Pane 2</p>
        </TabPane>
        <TabPane tab="Clarifications" key="clarifications">
          <p>Content of Tab Pane 3</p>
          <p>Content of Tab Pane 3</p>
          <p>Content of Tab Pane 3</p>
        </TabPane>
        <TabPane tab="Participants" key="participants">
          <p>Content of Tab Pane 4</p>
          <p>Content of Tab Pane 4</p>
          <p>Content of Tab Pane 4</p>
        </TabPane>
      </Tabs>
    </div>
  );
};

export default AntdTabs;
