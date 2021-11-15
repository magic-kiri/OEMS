import { signIn, signOut, useSession } from "next-auth/client";

export default function Component() {
  const [session, loading] = useSession();
  return (
    <div>
      {!session && (
        <>
          <span>You are not signed in</span>
          <br />
          <a
            href={`/api/auth/signin`}
            onClick={(e) => {
              e.preventDefault();
              signIn();
            }}
          >
            Sign in
          </a>
        </>
      )}
      {session && (
        <>
          {session.user.image && (
            <span style={{ backgroundImage: `url(${session.user.image})` }} />
          )}
          <span>
            <small>Signed in as</small>
            <br />
            <strong>{session.user.email || session.user.name}</strong>
          </span>
          <a
            href={`/api/auth/signout`}
            onClick={(e) => {
              e.preventDefault();
              signOut();
            }}
          >
            Sign out
          </a>
        </>
      )}
    </div>
  );
}
