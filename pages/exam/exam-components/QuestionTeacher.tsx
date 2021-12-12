import React, { useState } from "react";
import Upload from "../../../src/ui-custom-components/Upload";
import Link from "../../../src/ui-custom-components/Link";
import Button from "../../../src/ui-custom-components/Button";
import QuestionStyle from "./question.module.css";
import DownloadScriptModal from "./DownloadScriptModal";

type QuestionTeacherProps = {
  status: string;
};

const QuestionTeacher = ({ status }: QuestionTeacherProps) => {
  // const [status, setStatus] = useState<string>("finished");
  const [link, setLink] = useState<string>();
  const [openDownloadScript, setOpenDownloadScript] = useState<boolean>(false);
  const handleChange = () => {
    setOpenDownloadScript((value) => !value);
  };
  if (status === "Upcoming Exam") {
    return (
      <div className={QuestionStyle.question}>
        {link && (
          <Link style={{ fontSize: "18px" }} href={link} target="_blank">
            Question link.
          </Link>
        )}
        <Upload setLink={setLink} />
        <Button theme="dark" style={{ marginTop: "10px" }}>
          Upload
        </Button>
      </div>
    );
  } else if (status === "Running Exam") {
    return (
      <div className={QuestionStyle.question}>
        {link && (
          <Link style={{ fontSize: "18px" }} href={link} target="_blank">
            Question link.
          </Link>
        )}
      </div>
    );
  } else {
    return (
      <div className={QuestionStyle.question}>
        {link && (
          <Link style={{ fontSize: "18px" }} href={link} target="_blank">
            Question link.
          </Link>
        )}
        <Button
          theme="dark"
          style={{ marginTop: "10px" }}
          onClick={handleChange}
        >
          Download Scripts
        </Button>
        <DownloadScriptModal
          open={openDownloadScript}
          setOpen={setOpenDownloadScript}
        />
      </div>
    );
  }
};

export default QuestionTeacher;
