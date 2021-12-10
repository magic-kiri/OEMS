import React, { useState } from "react";
import Text from "../../../src/ui-custom-components/Text";
import ParticipantsStyle from "./participants.module.css";
import { Divider } from "antd";
import SingleParticipant from "./SingleParticipant";
import Button from "../../../src/ui-custom-components/Button";
import AddStudentsModal from "./AddStudentsModal";

const Participants = () => {
  const [openStudents, setOpenStudents] = useState<boolean>(false);
  const handleClickStudents = () => {
    setOpenStudents((value) => !value);
  };

  return (
    <div className={ParticipantsStyle.participationBox}>
      <div style={{ alignItems: "left" }}>
        <div className={ParticipantsStyle.semiHeader}>
          <Text style={{ fontSize: "18px" }}>Teachers</Text>
          <Button theme="dark">Add Teachers</Button>
        </div>
        <Divider style={{ margin: "15px 0px" }} />
        <SingleParticipant />
        <SingleParticipant />
      </div>
      <Divider />
      <div style={{ alignItems: "left" }}>
        <div className={ParticipantsStyle.semiHeader}>
          <Text style={{ fontSize: "18px" }}>Students</Text>
          <Button theme="dark" onClick={handleClickStudents}>
            Add Students
          </Button>
          <AddStudentsModal open={openStudents} setOpen={setOpenStudents} />
        </div>
        <Divider style={{ margin: "15px 0px" }} />
        <SingleParticipant />
        <SingleParticipant />
        <SingleParticipant />
        <SingleParticipant />
      </div>
    </div>
  );
};

export default Participants;
