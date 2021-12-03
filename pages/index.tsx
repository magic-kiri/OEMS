import { useRouter } from "next/router";
import Image from "next/image";
import sustlogo from "../public/image/sustlogo.png";
import indexstyle from "./index.module.css";
import Button from "../src/ui-custom-components/Button";

export default function Home() {
  const router = useRouter();
  const handleClick = () => {
    router.push("/auth");
  };

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
      <Button onClick={handleClick} theme="light">
        Get Started
      </Button>
    </div>
  );
}
