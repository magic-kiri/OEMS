import React, { useState } from "react";
import Button from "../../../src/ui-custom-components/Button";
import Modal from "../../../src/ui-custom-components/Modal";
import CheckBox from "./CheckBox";
import Link from "../../../src/ui-custom-components/Link";

//@ts-ignore
export default function DownloadScriptModal({ setOpen, open }) {
  const [link, setLink] = useState<string>();

  const handleSubmit = () => {
    setOpen(false);
    alert("Done");
  };

  const handleClickClose = () => {
    setOpen(false);
  };

  return (
    <Modal
      visible={open}
      title="Download Answer Scripts"
      onCancel={handleClickClose}
      footer={[
        <Button key="cancelButton" theme="dark" onClick={handleClickClose}>
          Cancel
        </Button>,
        <Button
          key="submitButton"
          theme="dark"
          onClick={handleSubmit}
          style={{ marginRight: "7px", marginLeft: "10px" }}
        >
          Done
        </Button>,
      ]}
    >
      <CheckBox />
      {link && (
        <Link
          style={{ fontSize: "18px", marginTop: "5px" }}
          href={link}
          target="_blank"
        >
          Script link.
        </Link>
      )}
    </Modal>
  );
}
