import React, { useState } from "react";
import Text from "../../../src/ui-custom-components/Text";
import ClarificationStyle from "./clarification.module.css";
import { Divider } from "antd";
import InputCommentBox from "./InputComment";
import { imageLink } from "../../data";
import Image from "next/image";
import SingleClarification from "./SingleClarification";

const Clarification = () => {
  const [role, setRole] = useState("student");
  const myLoader = () => {
    return imageLink;
  };
  if (role === "teacher") {
    return (
      <div className={ClarificationStyle.clarificationBox}>
        <div style={{ alignItems: "left" }}>
          <Text>1 Clarification</Text>
          <Divider style={{ margin: "15px 0px" }} />
          <SingleClarification />
        </div>
        <Divider />
        <div className={ClarificationStyle.commentFooter}>
          <div className={ClarificationStyle.myImage}>
            <Image
              loader={myLoader}
              src="profilePicture.png"
              alt="profilePicture"
              height="35vh"
              width="35vw"
            />
          </div>
          <InputCommentBox />
        </div>
      </div>
    );
  } else {
    return (
      <div className={ClarificationStyle.clarificationBox}>
        <div style={{ alignItems: "left" }}>
          <Text>1 Clarification</Text>
          <Divider style={{ margin: "15px 0px" }} />
          <SingleClarification />
        </div>
      </div>
    );
  }
};

export default Clarification;
