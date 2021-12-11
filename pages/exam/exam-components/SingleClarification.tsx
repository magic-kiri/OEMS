import React from "react";
import Text from "../../../src/ui-custom-components/Text";
import { imageLink } from "../../data";
import Image from "next/image";
import SingleClarificationStyle from "./clarification.module.css";

const SingleClarification = () => {
  const myLoader = () => {
    return imageLink;
  };
  return (
    <div className={SingleClarificationStyle.singleClarification}>
      <div className={SingleClarificationStyle.myImage}>
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
          <strong> Arnab Sen Sharma </strong>
        </Text>
        <br />
        <Text>See the zip file.</Text>
        <br />
      </div>
    </div>
  );
};

export default SingleClarification;
