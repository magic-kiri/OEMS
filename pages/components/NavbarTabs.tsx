import React from "react";
import { Tabs } from "antd";
import TabsStyle from "./examTabs.module.css";
import Button from "../../src/ui-custom-components/Button";

const { TabPane } = Tabs;

const NavbarTabs = () => {
  return (
    <Tabs centered size="large">
      <TabPane tab="Active" key="active" ></TabPane>
      <TabPane tab="Finished" key="finished"></TabPane>
    </Tabs>
  );
};

export default NavbarTabs;
