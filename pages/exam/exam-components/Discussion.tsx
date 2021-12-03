import React from "react";
import Text from "../../ui-custom-components/Text";
import DiscussionStyle from "./discussion.module.css";
import { Divider } from "antd";
import InputCommentBox from "./InputComment";
import { imageLink } from "../../data";
import Image from "next/image";

const Discussion = () => {
  const myLoader = () => {
    return imageLink;
  };
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
