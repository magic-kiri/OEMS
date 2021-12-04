import { useState } from "react";
import { useSession } from "next-auth/client";
import Image from "next/image";
import CreateExamModal from "./CreateExamModal";
import { PlusCircleOutlined } from "@ant-design/icons";
import PermissionModal from "./PermissionModal";
import Dropdown from "../../src/Dropdown";
import navstyle from "./navbar.module.css";

const NavbarRightComponenet = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [session, loading] = useSession();
  const [openPermission, setOpenPermission] = useState<boolean>(false);

  const handleClick = () => {
    setOpen((value) => !value);
  };

  const handleClickPermission = () => {
    setOpenPermission((value) => !value);
  };

  const myLoader = () => {
    return session?.image;
  };
  const dropDownItems = [
    {
      key: "permission",
      onclick: handleClickPermission,
      children: "Permission",
    },
    {
      key: "logout",
      onclick: (() => alert("log out!")),
      children: "Logout",
    },
  ];

  return session ? (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        padding: "10px",
        justifyContent: "flex-end",
        marginRight: "10px",
      }}
    >
      <div>
        <CreateExamModal open={open} setOpen={setOpen} />
        <PlusCircleOutlined
          style={{ fontSize: "24px", color: "#1890ff", marginLeft: "15px" }}
          onClick={handleClick}
        />
      </div>

      <>
        <PermissionModal open={openPermission} setOpen={setOpenPermission} />
        <Dropdown overlay={<></>} items={dropDownItems} trigger={["click"]}>
          <a onClick={(e) => e.preventDefault()}>
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
          </a>
        </Dropdown>
      </>
    </div>
  ) : (
    <></>
  );
};
export default NavbarRightComponenet;
