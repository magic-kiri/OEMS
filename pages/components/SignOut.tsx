import { signOut } from "next-auth/client";
import React, { useContext } from "react";
import { UserContext } from "../_app";

function SignOut() {
  const { userInfo, setUserInfo } = useContext(UserContext);

  const handleClick = (e) => {
    e.preventDefault();
    signOut({ callbackUrl: "http://localhost:3000/" });
    if (userInfo.name) {
      setUserInfo({});
    }
  };

  return <button onClick={handleClick}>Sign out</button>;
}

export default SignOut;
