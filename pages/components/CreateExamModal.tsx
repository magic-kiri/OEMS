import React from "react";
import Button from "../ui-custom-components/Button";
import Input from "../ui-custom-components/InputText";
import Select from "../ui-custom-components/Select";
import Option from "../ui-custom-components/Option";
import Modal from "../ui-custom-components/Modal";
import DatePicker from "../ui-custom-components/DatePicker";
import { RangePicker } from "../ui-custom-components/TimePicker";

import ModalStyle from "./createExamModal.module.css";

import { courseList } from "../data";

export default function CreateExamModal({ setOpen, open }) {
  const handleSubmit = () => {
    setOpen(false);
    alert("Done");
  };

  const handleClickClose = () => {
    setOpen(false);
  };

  function handleChangeSelect(value) {
    console.log(`selected ${value}`);
  }

  const courseCodeOptions = courseList.map((course) => (
    <Option key={course.key} value={course.courseCode}>
      {course.courseCode}
    </Option>
  ));
  const courseTitleOptions = courseList.map((course) => (
    <Option key={course.key} value={course.courseTitle}>
      {course.courseTitle}
    </Option>
  ));
  return (
    <div>
      <Modal
        visible={open}
        title="Create an Exam"
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
            Create
          </Button>,
        ]}
      >
        <Select
          size="large"
          className={ModalStyle.inputStyle}
          placeholder="Course Code"
        >
          {courseCodeOptions}
        </Select>
        <Select
          size="large"
          className={ModalStyle.inputStyle}
          placeholder="Course Title"
        >
          {courseTitleOptions}
        </Select>
        <Input
          size="large"
          className={ModalStyle.inputStyle}
          placeholder="Exam Title"
        ></Input>
        <DatePicker
          size="large"
          className={ModalStyle.inputStyle}
          placeholder="Select Date"
        ></DatePicker>
        <RangePicker size="large" className={ModalStyle.inputStyle} />
      </Modal>
    </div>
  );
}
