import React from "react";
import Text from "../../ui-custom-components/Text";
import DiscussionStyle from "./discussion.module.css";
import { Divider } from "antd";
import InputCommentBox from "./InputComment";

const Discussion = () => {
  return (
    <div className={DiscussionStyle.discussion}>
      <div style={{ alignItems: "left" }}>
        <Text>2 Comments</Text>
        <Divider style={{ margin: "15px 0px" }} />
        <div>
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
      <Divider />
      <InputCommentBox />
    </div>
  );
};

export default Discussion;
