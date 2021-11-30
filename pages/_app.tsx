import type { AppProps } from "next/app";
import { Provider, useSession } from "next-auth/client";
import React, { useEffect, useState } from "react";
import "../styles.css";

// import types
import { getSignInInformation } from "./utils/initalLoader";
import { ApolloProvider } from "@apollo/client";
import client from "../apollo-client";
import { UserInfo } from "../lib/types/types";

// Create context for UserInformation
export const UserContext = React.createContext(null);

//for Mui import
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

const Loader = ({ children }) => {
  const [session, loading] = useSession();
  const [userInfo, setUserInfo] = useState<UserInfo>();

  const loadUserInfo = async () => {
    const email = session.user.email;
    const name = session.user?.name;
    const { adminRole } = await getSignInInformation(email);
    setUserInfo({ name, email, adminRole });
  };

  useEffect(() => {
    if (session?.user?.email) {
      loadUserInfo();
    }
  }, [session]);

  return (
    <UserContext.Provider value={{ userInfo, setUserInfo }}>
      <ApolloProvider client={client}>{children}</ApolloProvider>
    </UserContext.Provider>
  );
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider
      // Provider options are not required but can be useful in situations where
      // you have a short session maxAge time. Shown here with default values.
      options={{
        // Client Max Age controls how often the useSession in the client should
        // contact the server to sync the session state. Value in seconds.
        // e.g.
        // * 0  - Disabled (always use cache value)
        // * 60 - Sync session state with server if it's older than 60 seconds
        clientMaxAge: 0,
        // Keep Alive tells windows / tabs that are signed in to keep sending
        // a keep alive request (which extends the current session expiry) to
        // prevent sessions in open windows from expiring. Value in seconds.
        //
        // Note: If a session has expired when keep alive is triggered, all open
        // windows / tabs will be updated to reflect the user is signed out.
        keepAlive: 0,
      }}
      session={pageProps.session}
    >
      <Loader>
        <Component {...pageProps} />
      </Loader>
    </Provider>
  );
}

export default MyApp;
