import { useSession } from "next-auth/client";
import React, { useContext } from "react";
import Navbar from "./components/Navbar";
import Body from "./components/Body";
import { UserContext } from "./_app";
import Loading from "../src/ui-custom-components/Loading";
import Title from "../src/ui-custom-components/Title";

function Home() {
  const [session, loading] = useSession();
  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "200px",
        }}
      >
        <Loading />
      </div>
    );
  } else {
    if (session) {
      return (
        <>
          <Navbar />
          <Body />
        </>
      );
    }
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "200px",
        }}
      >
        <Title style={{ fontSize: "24px" }}>You are not logged in.</Title>
      </div>
    );
  }
}

export default Home;
