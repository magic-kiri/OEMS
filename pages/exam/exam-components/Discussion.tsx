import React from "react";
import Text from "../../../src/ui-custom-components/Text";
import DiscussionStyle from "./discussion.module.css";
import { Divider } from "antd";
import InputCommentBox from "./InputComment";
import { imageLink } from "../../data";
import Image from "next/image";
import SingleComment from "./SingleComment";

const Discussion = () => {
  const myLoader = () => {
    return imageLink;
  };
  return (
    <div className={DiscussionStyle.discussion}>
      <div style={{ alignItems: "left" }}>
        <Text>2 Comments</Text>
        <Divider style={{ margin: "15px 0px" }} />
        <SingleComment />
        <SingleComment />
        <SingleComment />
      </div>
      <Divider />
      <div className={DiscussionStyle.commentFooter}>
        <div className={DiscussionStyle.myImage}>
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
};

export default Discussion;