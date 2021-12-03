import React from "react";
import Text from "../../ui-custom-components/Text";
import ClarificationStyle from "./clarification.module.css";
import { Divider } from "antd";
import InputCommentBox from "./InputComment";
import { imageLink } from "../../data";
import Image from "next/image";

const Clarification = () => {
  const myLoader = () => {
    return imageLink;
  };
  return (
    <div className={ClarificationStyle.clarification}>
      <div style={{ alignItems: "left" }}>
        <Text>1 Clarification</Text>
        <Divider style={{ margin: "15px 0px" }} />
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
        <InputCommentBox/>
      </div>
    </div>
  );
};

export default Clarification;
