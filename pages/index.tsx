import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const handleClick = () => {
    router.push("/auth");
  };

  return (
    <div className="container" style={{ padding: "50px 0 100px 0" }}>
      Welcome to OEMS! Join with us
      <button onClick={handleClick}>Get Started</button>
    </div>
  );
}
