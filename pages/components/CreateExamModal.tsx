import React, { useState } from "react";
import Button from "../ui-custom-components/Button";
import Input from "../ui-custom-components/InputText";
import Dialog from "../ui-custom-components/Dialog";
import DialogContent from "../ui-custom-components/DialogContent";
import DialogTitle from "../ui-custom-components/DialogTitle";
import Text from "../ui-custom-components/Text";
import DatePicker from "../ui-custom-components/DatePicker";
// import Select from "../ui-custom-components/Select";
import { Select } from "antd";
const { Option } = Select;
// import Option from "../ui-custom-components/Option";

import { courseList } from "../data";

import ModalStyle from "./createExamModal.module.css";

export default function CreateExamModal() {
  const [open, setOpen] = React.useState(true);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // @ts-ignore
  function handleChangeSelect(value) {
    console.log(`selected ${value}`);
  }

  // @ts-ignore
  // const options = courseList.map((course) => (
  //   <Option id={course.id} value={course.courseCode}>
  //     {course.courseTitle}
  //   </Option>
  // ));
  // console.log(options);
  return (
    <div>
      <Button onClick={handleClickOpen}>Open form dialog</Button>
      <Dialog fullWidth open={open} onClose={handleClose}>
        <DialogTitle>Create an Exam</DialogTitle>
        <DialogContent className={ModalStyle.createExamModal}>
          <Select
            defaultValue="lucy"
            style={{ width: 120 }}
            onChange={handleChangeSelect}
          >
            <Option value="jack">Jack</Option>
            <Option value="lucy">Lucy</Option>
            <Option value="disabled" disabled>
              Disabled
            </Option>
            <Option value="Yiminghe">yiminghe</Option>
          </Select>

          {/* <Select defaultValue="CourseCode" onChange={handleChangeSelect}>
            {options}
            <Select.Option value="jack">Jack</Select.Option>
            <Select.Option value="lucy">Lucy</Select.Option>
          </Select> */}
          <Input
            id="courseTitle"
            placeholder="Course Title"
            disabled
            className={ModalStyle.inputStyle}
          />
          <Input
            required
            id="examTitle"
            placeholder="Exam Title"
            className={ModalStyle.inputStyle}
          />
        </DialogContent>
        <div className={ModalStyle.buttonFix}>
          <Button onClick={handleClose} style={{ marginRight: "5px" }}>
            Cancel
          </Button>
          <Button onClick={handleClose} style={{ marginLeft: "5px" }}>
            Create
          </Button>
        </div>
      </Dialog>
    </div>
  );
}
