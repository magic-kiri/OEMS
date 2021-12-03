import React from "react";
import Text from "../../../src/ui-custom-components/Text";
import { imageLink } from "../../data";
import Image from "next/image";
import SingleCommentStyle from "./singleComment.module.css";

const SingleComment = () => {
  const myLoader = () => {
    return imageLink;
  };
  return (
    <div className={SingleCommentStyle.singleComment}>
      <div className={SingleCommentStyle.myImage}>
        <Image
          loader={myLoader}
          src="profilePicture.png"
          alt="profilePicture"
          height="35vh"
          width="35vw"
        />
      </div>
      <div>
        <Text>
          <strong> Quamrul Islam </strong>
        </Text>
        <br />
        <Text>We can see this exam from a Nationalist point of view.</Text>
        <br />
      </div>
    </div>
  );
};

export default SingleComment;
