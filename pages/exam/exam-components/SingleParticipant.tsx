import React from "react";
import Text from "../../../src/ui-custom-components/Text";
import { imageLink } from "../../data";
import Image from "next/image";
import SingleParticipantStyle from "./singleParticipant.module.css";

const SingleClarification = () => {
  const myLoader = () => {
    return imageLink;
  };
  return (
    <div className={SingleParticipantStyle.singleParticipant}>
      <div className={SingleParticipantStyle.myImage}>
        <Image
          loader={myLoader}
          src="profilePicture.png"
          alt="profilePicture"
          height="35vh"
          width="35vw"
        />
      </div>
      <Text>Arnab Sen Sharma</Text>
      <br />
    </div>
  );
};

export default SingleClarification;
