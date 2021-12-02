import React from "react";
import Text from "../../ui-custom-components/Text";
import DiscussionStyle from "./discussion.module.css";
import Input from "../../ui-custom-components/InputText";

const Discussion = () => {
  return (
    <div className={DiscussionStyle.discussion}>
      <div style={{ alignItems: "left" }}>
        <Text>2 Comments</Text>
        <div style={{ paddingBottom: "0px", margin: "0px 0px 5px 0px" }}>
          <Text>
            <strong> Kiriti Mukherjee </strong>
          </Text>
          <br />
          <Text>
            Sir, I am an Unga Bunga. Henten habijabi goru-chagol-khasi-murgi.
          </Text>
          <br />
        </div>
        <div style={{ paddingBottom: "0px", margin: "0px 0px 5px 0px" }}>
          <Text>
            <strong> Ashikur Rahman Bishal </strong>
          </Text>
          <br />
          <Text>
            Sir, I am an Unga Bunga. Henten habijabi goru-chagol-khasi-murgi.
          </Text>
          <br />
        </div>
      </div>
      <Input style={{ marginTop: "10px" }} />
    </div>
  );
};

export default Discussion;
