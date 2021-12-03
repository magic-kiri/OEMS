import { useSession } from "next-auth/client";
import React, { useContext } from "react";
import Navbar from "./components/Navbar";
import Body from "./components/Body";
import { UserContext } from "./_app";
import Loading from "./components/Loading";

function Home() {
  const { userInfo, setUserInfo } = useContext(UserContext);
  const [session, loading] = useSession();
  return (
    <div>
      {loading ? (
        <Loading/>
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
