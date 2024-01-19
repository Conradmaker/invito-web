"use client";
import Button from "@/components/System/Button";
import Tab from "@/components/System/Tab";
import Typo from "@/components/System/Typo";
import {usePathname} from "next/navigation";
import React from "react";
import {LuUserPlus} from "react-icons/lu";

export default function Layout({children}: {children: React.ReactNode}) {
  const path = usePathname();
  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between items-center mb-6">
        <div className="flex flex-col">
          <Typo.Heading level={3}>멤버 설정</Typo.Heading>
          <Typo.Body mt={4}>멤버들의 권한과 새로운 멤버를 초대할 수 있습니다.</Typo.Body>
        </div>
        <Button type="primary" size="md" leftIcon={<LuUserPlus />}>
          초대하기
        </Button>
      </div>

      <Tab
        data={[
          {
            href: "/dashboard/setting/member/list",
            label: "멤버 목록",
            isActive: path.endsWith("list") || path.endsWith("member"),
          },
          {
            href: "/dashboard/setting/member/invite",
            label: "초대 상황",
            isActive: path.endsWith("invite"),
          },
        ]}
      />

      {children}
    </div>
  );
}
