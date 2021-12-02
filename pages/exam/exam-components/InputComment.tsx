import React from "react";
import Input from "../../ui-custom-components/InputText";
import Button from "../../ui-custom-components/Button";
import { SendOutlined } from "@ant-design/icons";

const InputCommentBox = () => {
  return (
    <Input
      suffix={
        <Button theme="transparent">
          <SendOutlined />
        </Button>
      }
      style={{ borderRadius: "20px" }}
    />
  );
};

export default InputCommentBox;
