import { useSession } from "next-auth/client";
import React, { useContext } from "react";
import Navbar from "./components/Navbar";
import Body from './components/Body';
import { UserContext } from "./_app";

function Home() {
  const { userInfo, setUserInfo } = useContext(UserContext);
  const [session, loading] = useSession();
  return <div>{loading ? <>PLEASE LOGIN FIRST</> : <><Navbar /><Body/></>}</div>;
}

export default Home;
