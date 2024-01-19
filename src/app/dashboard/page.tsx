/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import Button from "@/components/System/Button";
import Typo from "@/components/System/Typo";
import {useUiStore} from "@/modules/zustand/ui";
import Link from "next/link";
import React, {useEffect} from "react";
import {LuPlus} from "react-icons/lu";

export default function Page() {
  const {triggerToast} = useUiStore();
  useEffect(() => {}, []);
  return (
    <>
      {/* <div className="flex items-center justify-between">
        <Typo.Heading level={2}>내 프로젝트</Typo.Heading>
        <Button size="md" rightIcon={<LuPlus />}>
          프로젝트 생성
        </Button>
      </div> */}
      <div className="flex-1 flex-col gap-24 py-32 flex items-center">
        <img
          src="/img/3d-glassy-geometric-composition-of-translucent-rectangles.png"
          width={500}
          alt=""
        />
        <Link href={"/project"}>
          <Button size="lg" rightIcon={<LuPlus />}>
            새 프로젝트 만들기
          </Button>
        </Link>
      </div>
    </>
  );
}
