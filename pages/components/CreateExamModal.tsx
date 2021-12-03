import React, { useEffect, useState } from "react";
import Button from "../../src/ui-custom-components/Button";
import Input from "../../src/ui-custom-components/InputText";
import Select from "../../src/ui-custom-components/Select";
import Option from "../../src/ui-custom-components/Option";
import Modal from "../../src/ui-custom-components/Modal";
import DatePicker from "../../src/ui-custom-components/DatePicker";
import { RangePicker } from "../../src/ui-custom-components/TimePicker";

import CreateExamModalStyle from "./createExamModal.module.css";

import { courseList } from "../data";
import { useQuery } from "@apollo/client";
import { getAllCourseQuery } from "../../lib/graphqlQuery/graphqlQuery";
import Loading from "../../src/ui-custom-components/Loading";
import { CourseType, ExamType } from "../../lib/types/types";

const nullExam = {
  course_code: undefined,
  course_title: undefined,
  exam_title: undefined,
  start_date: undefined,
  start_time: undefined,
  end_time: undefined,
};

export default function CreateExamModal({
  setOpen,
  open,
}: {
  open: boolean;
  setOpen: (value: boolean) => void;
}) {
  const [examInfo, setExamInfo] = useState(nullExam);

  const { data, loading, error } = useQuery(getAllCourseQuery());
  const [courses, setCourses] = useState<CourseType[]>([]);
  useEffect(() => {
    if (data) {
      setCourses(data.courses);
    }
  }, [data]);

  const handleSubmit = () => {
    setOpen(false);
    alert(JSON.stringify(examInfo));
  };

  const handleClickClose = () => {
    setOpen(false);
  };
  //@ts-ignore
  function handleChangeSelect(value) {
    console.log(`selected ${value}`);
  }

  const courseCodeOptions = courses.map((course) => (
    <Option key={course.course_code} value={course.course_code}>
      {course.course_code}
    </Option>
  ));
  const courseTitleOptions = courses.map((course) => (
    <Option key={course.course_code} value={course.course_title}>
      {course.course_title}
    </Option>
  ));

  const courseCodeChange = (code: unknown) => {
    const course = courses.find((course) => course.course_code === code);
    if (course) {
      // @ts-ignore
      setExamInfo((prevExamInfo) => ({
        ...prevExamInfo,
        course_code: course.course_code,
        course_title: course.course_title,
      }));
    }
  };

  const courseTitleChange = (title: unknown) => {
    const course = courses.find((course) => course.course_title === title);
    if (course) {
      // @ts-ignore
      setExamInfo((prevExamInfo) => ({
        ...prevExamInfo,
        course_code: course.course_code,
        course_title: course.course_title,
      }));
    }
  };

  const examTitleChange = (e: any) => {
    setExamInfo((prev) => ({ ...prev, exam_title: e.target.value }));
  };

  // const startDateChange = (date: any, dateString: string) => {
  //   setExamInfo((prev) => ({ ...prev, exam_title: dateString.toString() }));
  // };

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
          className={CreateExamModalStyle.inputStyle}
          placeholder="Course Code"
          value={examInfo?.course_code}
          onChange={courseCodeChange}
        >
          {courseCodeOptions}
        </Select>
        <Select
          size="large"
          className={CreateExamModalStyle.inputStyle}
          placeholder="Course Title"
          value={examInfo?.course_title}
          onChange={courseTitleChange}
        >
          {courseTitleOptions}(
        </Select>
        <Input
          size="large"
          className={CreateExamModalStyle.inputStyle}
          placeholder="Exam Title"
          value={examInfo?.exam_title}
          onChange={examTitleChange}
        ></Input>
        <DatePicker
          size="large"
          className={CreateExamModalStyle.inputStyle}
          placeholder="Select Date"
          format="DD/MM/YYYY"
          // onChange={startDateChange}
        ></DatePicker>
        <RangePicker size="large" className={CreateExamModalStyle.inputStyle} />
      </Modal>
    </div>
  );
}
