import React, { useState } from "react";
import Button from "../ui-custom-components/Button";
import Input from "../ui-custom-components/InputText";
import Select from "../ui-custom-components/Select";
import Option from "../ui-custom-components/Option";
import Modal from "../ui-custom-components/Modal";
import DatePicker from "../ui-custom-components/DatePicker";
import TimePicker, { RangePicker } from "../ui-custom-components/TimePicker";

import ModalStyle from "./createExamModal.module.css";

import { courseList } from "../data";

// @ts-ignore
export default function CreateExamModal({ setOpen, open }) {
  const handleSubmit = () => {
    setOpen(false);
    alert("Done");
  };

  const handleClickClose = () => {
    setOpen(false);
  };

  // @ts-ignore
  function handleChangeSelect(value) {
    console.log(`selected ${value}`);
  }

  // @ts-ignore
  const courseCodeOptions = courseList.map((course) => (
    <Option id={course.id} value={course.courseCode}>
      {course.courseCode}
    </Option>
  ));
  const courseTitleOptions = courseList.map((course) => (
    <Option id={course.id} value={course.courseTitle}>
      {course.courseTitle}
    </Option>
  ));
  // console.log(options);
  return (
    <div>
      <Modal
        visible={open}
        title="Create an Exam"
        onCancel={handleClickClose}
        footer={[
          <Button theme="dark" onClick={handleClickClose}>
            {" "}
            Cancel{" "}
          </Button>,
          <Button
            theme="dark"
            onClick={handleSubmit}
            style={{ marginRight: "7px" }}
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
