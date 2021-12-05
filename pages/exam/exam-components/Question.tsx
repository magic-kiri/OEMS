import React, { useState } from "react";
import Upload from "../../../src/ui-custom-components/Upload";
import Text from "../../../src/ui-custom-components/Text";
import Link from "../../../src/ui-custom-components/Link";

const Question = () => {
  const [link, setLink] = useState<string>();
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center", marginBottom: "20px" }}
    >
      <Text style={{ fontSize: "18px" }}> Exam Code: 22</Text>
      {
        link && 
        <Link style={{ fontSize: "18px" }} href={link} target="_blank">
          Question link.
        </Link>
      }
      <Upload setLink={setLink}/>
    </div>
  );
};

export default Question;
