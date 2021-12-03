import { useSession } from "next-auth/client";
import React, { useContext } from "react";
import Navbar from "./components/Navbar";
import Body from "./components/Body";
import { UserContext } from "./_app";
import Loading from "./components/Loading";

function Home() {
  const [session, loading] = useSession();
  return (
    <div>
      {loading ? (
        <>
          <Navbar />
          <Loading />
        </>
      ) : (
        <>
          <Navbar />
          <Body />
        </>
      )}
    </div>
  );
}

export default Home;
