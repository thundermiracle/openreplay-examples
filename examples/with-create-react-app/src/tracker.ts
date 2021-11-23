import Tracker from "@openreplay/tracker/cjs";
import trackerAssist from "@openreplay/tracker-assist/cjs";

const tracker = new Tracker({
  __DISABLE_SECURE_MODE: true,
  projectKey: process.env.REACT_APP_OPEN_REPLAY_KEY,
});

tracker.use(trackerAssist({ confirmText: "Do you like to accept the call from service center?" }));

tracker.start();
