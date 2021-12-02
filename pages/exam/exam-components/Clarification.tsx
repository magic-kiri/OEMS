import React from "react";
import Text from "../../ui-custom-components/Text";
import ClarificationStyle from "./clarification.module.css";
import { Divider } from "antd";
import InputCommentBox from "./InputComment";

const Clarification = () => {
  return (
    <div className={ClarificationStyle.clarification}>
      <div style={{ alignItems: "left" }}>
        <Text>1 Clarification</Text>
        <Divider />
        <div>
          <Text>
            <strong> Arnab Sen Sharma </strong>
          </Text>
          <br />
          <Text>See the zip file.</Text>
          <br />
        </div>
      </div>
      <Divider />
      <InputCommentBox />
    </div>
  );
};

export default Clarification;
