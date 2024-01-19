"use client";
import Button from "@/components/System/Button";
import Avatar from "@/components/System/Icon/Avatar";
import Menu from "@/components/System/Menu";
import Table from "@/components/System/Table";
import Typo from "@/components/System/Typo";
import Link from "next/link";
import React from "react";
import {LuLink, LuMenu, LuMoreHorizontal} from "react-icons/lu";

export default function page() {
  return (
    <div className="flex flex-col">
      <Typo.Heading level={3}>프로젝트 설정</Typo.Heading>
      <Typo.Body mt={4}>팀 프로필을 변경하고 삭제할 수 있습니다.</Typo.Body>

      <ul className="flex flex-col gap-3 mt-8">
        {Array.from({length: 6}).map((_, idx) => (
          <li
            className="border flex rounded p-4 py-5 justify-between items-center"
            key={idx}
          >
            <div className="flex flex-col">
              <div className="flex gap-4 items-center">
                <Typo.Heading level={5}>프로젝트{idx}</Typo.Heading>
                <Link href={""} className="flex items-center gap-1">
                  <LuLink size={11} />
                  <Typo.Desc color="secondary">https://www.naver.com</Typo.Desc>
                </Link>
              </div>
              <div className="flex items-center gap-1 mt-3">
                <Avatar size={16} name="유원근" />{" "}
                <Typo.Desc color="secondary">유원근님이 2022년 11월 03일 생성</Typo.Desc>
                <Typo.Desc color="secondary">( 3일전에 수정됨 )</Typo.Desc>
              </div>
            </div>

            <div className="flex gap-4">
              <Button type="tertiary" size="sm">
                보기
              </Button>
              <Menu.Dropdown
                data={[
                  {label: "수정하기", value: "open"},
                  {
                    label: "프로젝트 삭제",
                    value: "delete",
                    onClick: () => alert("삭제!"),
                  },
                ]}
              >
                <Button.Icon type="tertiary" size="sm">
                  <LuMoreHorizontal />
                </Button.Icon>
              </Menu.Dropdown>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
