import React from "react";
import navstyle from "../styling/navbar.module.css";
import navlogo from "../../public/image/sustlogo.png";
import Image from "next/image";

const Navbar = () => {
  return (
    <>
      <div className={navstyle.navbar}>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div style={{ padding: "10px" }}>
            <Image src={navlogo} alt="sustlogo" height="44vh" width="40vw" />
          </div>
          <div>
            <p style={{ marginBottom: "unset" }}>
              Shahjalal University of Science & Technology{" "}
            </p>
            <h3 style={{ marginTop: "unset"}}>
              Online Exam Management System
            </h3>
          </div>
        </div>
        <div>
          <button className={navstyle.button}>Active</button>
          <button className={navstyle.button}>Finished</button>
        </div>
        <div>profile</div>
      </div>
    </>
  );
};

export default Navbar;
