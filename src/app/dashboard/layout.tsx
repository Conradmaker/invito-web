/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import Header from "@/components/System/Header";
import Tab from "@/components/System/Tab";
import {useUserStore} from "@/modules/zustand/user";
import {usePathname, useRouter} from "next/navigation";
import React, {useEffect} from "react";

export default function Layout({children}: {children: React.ReactNode}) {
  const pathname = usePathname();
  const {user} = useUserStore();
  const {replace} = useRouter();
  useEffect(() => {
    if (!user) replace("/auth");
  }, [user]);
  return (
    <div className="flex flex-col">
      <Header.Dashboard />
      <Tab
        py={48}
        data={[
          {
            href: "/dashboard",
            label: "프로젝트",
            isActive: pathname.endsWith("dashboard"),
          },
          {
            href: "/dashboard/setting/general",
            label: "설정",
            isActive: pathname.startsWith("/dashboard/setting"),
          },
        ]}
      />
      <main className="flex flex-col mx-auto max-w-7xl w-full py-12">{children}</main>
    </div>
  );
}
