import "../styles/globals.css";
import React from "react";
import type { AppProps } from "next/app";
import dynamic from "next/dynamic";

const OpenReplayTracker = dynamic(() => import("../components/OpenReplayTracker"), { ssr: false });

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} trackerComponent={<OpenReplayTracker />} />;
}

export default MyApp;
