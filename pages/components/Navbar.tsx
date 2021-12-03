import React from "react";
import navstyle from "./navbar.module.css";
import navlogo from "../../public/image/sustlogo.png";
import Image from "next/image";
import { PlusOutlined } from "@ant-design/icons";
import Title from "../ui-custom-components/Title";
import CreateExamModal from "./CreateExamModal";
import NavbarTabs from "./NavbarTabs";
import { useSession } from "next-auth/client";

import { Row, Col } from "antd";
import { imageLink } from "../data";

const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  const [session, loading] = useSession();
  const handleClick = () => {
    setOpen((value) => !value);
  };

  const leftComponent = (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <div style={{ padding: "10px", marginLeft: "10px" }}>
        <Image src={navlogo} alt="sustlogo" height="55vh" width="50vw" />
      </div>
      <div style={{ padding: "10px" }}>
        <Title level={5} style={{ marginBottom: "-5px", fontSize: "16.25px" }}>
          <strong>Shahjalal University of Science & Technology</strong>
        </Title>
        <Title level={4} style={{ margin: "unset", fontSize: "21px" }}>
          <strong>Online Exam Management System</strong>
        </Title>
      </div>
    </div>
  );
  
  const myLoader = () => {
    return session?.image;
  };
  const rightComponent = ( session?
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        padding: "10px",
      }}
    >
      <div>
        <CreateExamModal open={open} setOpen={setOpen} />
        <PlusOutlined
          style={{ fontSize: "20px", color: "#1169ba" }}
          onClick={handleClick}
        />
      </div>

      <div className={navstyle.myImage}>
        <Image
          //@ts-ignore
          loader={myLoader}
          src="profilePicture.png"
          alt="profilePicture"
          height="45vh"
          width="45vw"
        />
      </div>
    </div>: <></>
  );

  return (
    <div className={navstyle.navbar}>
      <Row justify="center" align="middle">
        <Col span={10}>{leftComponent}</Col>
        <Col span={4}>
          <NavbarTabs />
        </Col>
        <Col span={10} push={8}>
          {rightComponent}
        </Col>
      </Row>
    </div>
  );
};

export default Navbar;
