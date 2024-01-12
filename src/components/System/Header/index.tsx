/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import Button from "../Button";

export default function Header() {
  return (
    <div className="w-full max-w-[1240px] mx-auto flex justify-between items-center h-20">
      <Link href={"/"}>
        <img
          src="https://static.invito.kr/assets/logos/logo-light.png"
          height={50}
          width={132}
          alt=""
          className="p-2"
        />
      </Link>
      <div className="flex items-center gap-16">
        <ul className="flex items-center gap-12">
          <li className="cursor-pointer hover:font-medium text-lg text-slate-800">
            사용가이드
          </li>
          <li className="cursor-pointer hover:font-medium text-lg text-slate-800">
            템플릿
          </li>
          <li className="cursor-pointer hover:font-medium text-lg text-slate-800">
            <Link href={"/pricing"}>가격</Link>
          </li>
        </ul>
        <Link href={"/auth"}>
          <Button size="md">&nbsp;시작하기&nbsp;</Button>
        </Link>
      </div>
    </div>
  );
}
