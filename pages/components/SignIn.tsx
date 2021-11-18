import { signIn, useSession } from "next-auth/client";
import React, { useContext } from "react";
import { UserContext } from "../_app";

function SignIn() {
  const [session, loading] = useSession();
  const { userInfo, setUserInfo } = useContext(UserContext);

  const handleClick = (e) => {
    e.preventDefault();
    signIn("google", { callbackUrl: "http://localhost:3000/home" });
    console.log("Passed!");
    if (session?.user) {
      if (session?.user?.name != userInfo?.name) {
        setUserInfo({ name: session?.user?.name });
      }
    }
  };

  return <button onClick={handleClick}>Sign In</button>;
}

export default SignIn;
