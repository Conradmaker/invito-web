"use client";
import Button from "@/components/System/Button";
import Avatar from "@/components/System/Icon/Avatar";
import Input from "@/components/System/Input";
import Typo from "@/components/System/Typo";
import {useUiStore} from "@/modules/zustand/ui";
import React from "react";
import {LuSave, LuSaveAll, LuSiren} from "react-icons/lu";

export default function General() {
  const {currentTeam} = useUiStore();
  return (
    <div className="flex flex-col">
      <Typo.Heading level={3}>일반 설정</Typo.Heading>
      <Typo.Body mt={4}>
        {currentTeam?.name}팀 프로필을 변경하고 삭제할 수 있습니다.
      </Typo.Body>

      <div className="flex flex-col w-80 gap-10 mt-8">
        <div className="flex flex-col">
          <Typo.Heading level={5} mb={12}>
            팀이름
          </Typo.Heading>
          <div className="flex gap-1">
            <Input width={300} />
            <Button type="tertiary">저장</Button>
          </div>
        </div>
      </div>

      <hr className="my-12" />

      <div>
        <div className="border p-5 px-4 rounded border-red-100 bg-red-50 flex flex-col">
          <div className="flex items-center gap-1">
            <LuSiren size={16} className="mb-0.5" />{" "}
            <Typo.Heading level={5}>팀 삭제</Typo.Heading>
          </div>
          <ul className="my-2">
            <li>
              <Typo.Body>팀 삭제시 팀의 모든 프로젝트가 함께 삭제됩니다.</Typo.Body>
            </li>
            <li>
              <Typo.Body>
                공개되어있는 모든 프로젝트의 페이지를 접근할 수 없게 됩니다.
              </Typo.Body>
            </li>
          </ul>
          <div className="flex justify-end items-center">
            <Button type="tertiary" size="md">
              {currentTeam?.name} 삭제
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
