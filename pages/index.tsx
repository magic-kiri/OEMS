import { useRouter } from "next/router";
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
      <h3 style={{ marginBottom: "unset" }}>
        Shahjalal University of Science and Technology
      </h3>
      <h1 style={{ marginTop: "unset" }}>Online Exam Management System</h1>
      <Button onClick={logIn} theme="light">
        Get Started
      </Button>
    </div>
  );
}
