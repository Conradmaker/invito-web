"use client";
import Toast from "@/components/System/Notification/Toast";
import React from "react";

export default function ToastRegistry({children}: {children: React.ReactNode}) {
  return (
    <>
      {children}
      <Toast />
    </>
  );
}
