import React from "react";
import Text from "../../ui-custom-components/Text";
import ClarificationStyle from "./clarification.module.css";
import Input from "../../ui-custom-components/InputText";

const Clarification = () => {
  return (
    <div className={ClarificationStyle.clarification}>
      <div style={{ alignItems: "left" }}>
        <Text>1 Clarification</Text>
        <div style={{ paddingBottom: "0px", margin: "0px 0px 5px 0px" }}>
          <Text>
            <strong> Arnab Sen Sharma </strong>
          </Text>
          <br />
          <Text>See the zip file.</Text>
          <br />
        </div>
      </div>
      <Input style={{ marginTop: "10px" }} />
    </div>
  );
};

export default Clarification;
