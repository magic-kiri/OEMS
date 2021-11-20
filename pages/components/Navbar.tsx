import React from "react";
import navstyle from "../styling/navbar.module.css";
import navlogo from "../../public/image/navlogo.png";
import Image from "next/image";

const Navbar = () => {
  return (
    <>
      <div className={navstyle.navbar}>
        <div className="navstyle.navlogo">
          <Image src={navlogo} alt="navlogo" height="50vh" width="280vw" />
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
