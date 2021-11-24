import "../styles/globals.css";
import type { AppProps } from "next/app";
import React from "react";

function MyApp({ Component, pageProps }: AppProps) {
  const [userId, setUserId] = React.useState("");

  React.useEffect(() => {
    import("../tracker").then(({ userId: trackerUserId }) => {
      setUserId(trackerUserId);
    });
  }, [setUserId]);

  return <Component {...pageProps} userId={userId} />;
}

export default MyApp;
