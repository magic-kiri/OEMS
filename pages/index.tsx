import { useRouter } from "next/router";
import Image from "next/image";
import sustlogo from "../public/image/sustlogo.png";
import indexstyle from "./styling/index.module.css";

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
      <button onClick={handleClick} className={indexstyle.button}>
        Get Started
      </button>
    </div>
  );
}
