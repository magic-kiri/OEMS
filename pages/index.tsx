import Image from "next/image";
import sustlogo from "../public/image/sustlogo.png";
import indexstyle from "./index.module.css";
import Button from "../src/ui-custom-components/Button";
import { logIn } from "./utils/authentication";

export default function Home() {
  return (
    <div className={indexstyle.indexpage}>
      <div>
        <Image
          src={sustlogo}
          alt="sustlogo"
          height="253vh"
          width="230vw"
          // layout="responsive"
        />
      </div>
      <h3
        style={{ marginBottom: "unset", fontSize: "22px", marginTop: "10px" }}
      >
        Shahjalal University of Science and Technology
      </h3>
      <h1 style={{ marginTop: "-5px", fontSize: "30px" }}>
        Online Exam Management System
      </h1>
      <Button onClick={logIn} theme="dark">
        Get Started
      </Button>
    </div>
  );
}
