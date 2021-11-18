import { useSession } from "next-auth/client";
import React, { useContext } from "react";
import SignOut from "./components/SignOut";
import { UserContext } from './_app';

function Home() {
  const [session, loading] = useSession();
  const { userInfo, setUserInfo } = useContext(UserContext);

  return (
    <div>
      {session ? (
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
