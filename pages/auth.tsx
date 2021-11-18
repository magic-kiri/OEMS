import { useSession } from "next-auth/client";
import SignIn from "./components/SignIn";
import SignOut from "./components/SignOut";

export default function Component() {
  const [session, loading] = useSession();

  return (
    <div>
      {!session && (
        <>
          <span>You are not signed in</span>
          <br />
          <SignIn />
        </>
      )}
      {session && (
        <>
          <span>
            <small>Signed in as</small>
            <br />
            <strong>{session.user.email || session.user.name}</strong>
          </span>
          <SignOut />
        </>
      )}
    </div>
  );
}
