/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import Button from "../Button";
import {useRouter} from "next/navigation";

export default function Header() {
  const {push} = useRouter();
  return (
    <div className="w-full max-w-[1240px] mx-auto flex justify-between items-center h-20">
      <Link href={"/auth"}>
        <img
          src="https://static.invito.kr/assets/logos/logo-light.png"
          height={50}
          width={132}
          alt=""
          className="p-2"
        />
      </Link>
      <div className="flex items-center gap-8">
        <ul className="flex items-center gap-5">
          <li className="cursor-pointer hover:font-medium">사용가이드</li>
          <li className="cursor-pointer hover:font-medium">템플릿</li>
          <li className="cursor-pointer hover:font-medium">가격</li>
        </ul>
        <Button size="md" onClick={() => push("/auth")}>
          시작하기
        </Button>
      </div>
    </div>
  );
}
