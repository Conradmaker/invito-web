"use client";
import React, {useEffect} from "react";

export default function P() {
  useEffect(() => {
    const a = async () => {
      if (typeof window === "undefined") return;
      if (window.navigator) {
        const {ClientJS} = await import("clientjs");
        const client = new ClientJS();
        console.log({
          os: client.getOS(),
          browser: client.getBrowser(),
          language: client.getLanguage(),
          fingerprint: client.getFingerprint(),
        });
      }
    };
    a();
  }, []);
  return (
    <div>
      <span>asd</span>
    </div>
  );
}
