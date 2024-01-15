import getBrowserFingerprint from "get-browser-fingerprint";
import Bowser from "bowser";
import {appStorage} from "./storage";
import CryptoJS from "crypto-js";

export const getDeviceInfo = async () => {
  let fp = await appStorage.local.get("fingerPrint");
  if (typeof window === "undefined") return null;
  const browser = Bowser.getParser(window.navigator.userAgent);
  if (!fp) {
    fp = await getBrowserFingerprint({
      debug: process.env.NODE_ENV === "development",
      enableScreen: false,
      enableWebgl: true,
      hardwareOnly: false,
    });
    await appStorage.local.set({fingerPrint: fp});
  }
  const data = {
    fingerPrint: fp,
    browser: browser.getBrowser().name || null,
    os: browser.getOS().name || null,
  };
  const cipher = CryptoJS.AES.encrypt(
    JSON.stringify(data),
    process.env.NEXT_PUBLIC_DEVICE_KEY as string
  ).toString();

  return {...data, cipher};
};
