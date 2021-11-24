import Tracker from "@openreplay/tracker/cjs";
import trackerAssist from "@openreplay/tracker-assist/cjs";
import { v4 } from "uuid";

export const userId = v4();

const tracker = new Tracker({
  __DISABLE_SECURE_MODE: true,
  projectKey: process.env.NEXT_PUBLIC_OPEN_REPLAY_KEY,
  onStart: () => {
    tracker.setUserID(userId);
  },
});

tracker.use(trackerAssist({ confirmText: "Do you like to accept the call from service center?" }));

tracker.start();
