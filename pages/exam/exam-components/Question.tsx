import React from "react";
import Upload from "../../../src/ui-custom-components/Upload";
import Text from "../../../src/ui-custom-components/Text";
import Link from "../../../src/ui-custom-components/Link";

const Question = () => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Text style={{ fontSize: "18px" }}> Exam Code: </Text>
      <Link href="https://google.com" target="_blank">
        Link goes here
      </Link>
      <Upload />
    </div>
  );
};

export default Question;
