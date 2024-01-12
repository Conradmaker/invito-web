"use client";
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import Button from "../System/Button";
import {LuGithub, LuInstagram, LuLinkedin} from "react-icons/lu";

export default function Footer() {
  return (
    <div className="w-full max-w-[1240px] mx-auto flex justify-between items-center h-20 flex-col">
      <div className="w-full flex items-center h-20 border-t border-slate-200 py-4 mt-4">
        <Link href={"/"} className="flex-1">
          <img
            src="https://static.invito.kr/assets/logos/logo-light.png"
            height={50}
            width={132}
            alt=""
            className="p-2"
          />
        </Link>
        <p className="flex-1 text-center text-sm text-slate-500">
          Copyright &copy; 2024 Conrad. All Rights Reserved
        </p>
        <div className="flex items-center justify-end gap-1 flex-1">
          <Button.Icon type="ghost" size="lg">
            <LuInstagram />
          </Button.Icon>
          <Button.Icon type="ghost" size="lg">
            <LuLinkedin />
          </Button.Icon>
          <Button.Icon type="ghost" size="lg">
            <LuGithub />
          </Button.Icon>
        </div>
      </div>
    </div>
  );
}
