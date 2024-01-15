/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import React, {useEffect} from "react";
import {getDeviceInfo} from "../deviceInfo";
import axios from "axios";
import {useUserStore} from "@/modules/zustand/user";

export default function DeviceInfoProvider({children}: {children: React.ReactNode}) {
  const {setDevice} = useUserStore();
  useEffect(() => {
    const getDevice = async () => {
      const info = await getDeviceInfo();
      if (info) {
        axios.defaults.headers.common["x-device-info"] = info.cipher;
        setDevice(info);
      }
    };
    getDevice();
  }, []);
  return <>{children}</>;
}
