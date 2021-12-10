import React, { useState } from "react";
import Button from "../../../src/ui-custom-components/Button";
import Text from "../../../src/ui-custom-components/Text";
import Modal from "../../../src/ui-custom-components/Modal";
import Select from "../../../src/ui-custom-components/Select";
import Option from "../../../src/ui-custom-components/Option";

//@ts-ignore
export default function AddTeachersModal({ setOpen, open }) {
  const handleSubmit = () => {
    setOpen(false);
    alert("Done");
  };

  const handleClickClose = () => {
    setOpen(false);
  };

  function handleChange(value: any) {
    console.log(`selected ${value}`);
  }

  const children = [];
  for (let i = 10; i < 36; i++) {
    children.push(
      <Option key={i.toString(36) + i} value={i.toString(36) + i}>
        {i.toString(36) + i}
      </Option>
    );
  }

  return (
    <Modal
      visible={open}
      title="Add Teachers"
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
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Text style={{ fontSize: "16px", marginBottom: "10px" }}>
          Select a single or multiple teachers to add to this exam.
        </Text>
        <Select
          mode="multiple"
          allowClear
          style={{ width: "100%" }}
          placeholder="Select Teachers"
          onChange={handleChange}
        >
          {children}
        </Select>
        <Button theme="light" style={{ marginTop: "20px" }}>
          Add
        </Button>
      </div>
    </Modal>
  );
}
