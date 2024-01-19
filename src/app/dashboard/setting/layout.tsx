"use client";
import SideTab from "@/components/System/Menu/SideTab";
import {usePathname} from "next/navigation";
import React from "react";

export default function Layout({children}: {children: React.ReactNode}) {
  const path = usePathname();
  return (
    <div className="flex gap-10">
      <SideTab
        data={[
          {
            href: "/dashboard/setting/general",
            label: "일반",
            isActive: path === "/dashboard/setting/general",
          },
          {
            href: "/dashboard/setting/project",
            label: "프로젝트",
            isActive: path === "/dashboard/setting/project",
          },
          {
            href: "/dashboard/setting/member",
            label: "멤버",
            isActive: path.startsWith("/dashboard/setting/member"),
          },
        ]}
      />
      <div className="flex-1">{children}</div>
    </div>
  );
}
