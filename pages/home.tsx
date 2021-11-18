import { useSession } from "next-auth/client";
import React, { useContext } from "react";
import SignOut from "./components/SignOut";
import { UserContext } from './_app';

function Home() {
  const { userInfo, setUserInfo } = useContext(UserContext);

  return (
    <div>
      {userInfo?.name ? (
        <>
          HI, {userInfo.name}!!
          Welcome to OEMS!
          <SignOut />
        </>
      ) : (
        <>PLEASE LOGIN FIRST</>
      )}
    </div>
  );
}

export default Home;
