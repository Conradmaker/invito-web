/* eslint-disable @next/next/no-img-element */
"use client";
import Button from "@/components/System/Button";
import useAuth from "@/hooks/Form/useAuth";
import {useUserStore} from "@/modules/zustand/user";
import {useRouter} from "next/navigation";
import React, {useEffect} from "react";
import {LuArrowLeft} from "react-icons/lu";

export default function Layout({children}: {children: React.ReactNode}) {
  const {back, replace} = useRouter();
  const {tokenLogin} = useAuth();
  const {user, accessToken} = useUserStore();
  useEffect(() => {
    if (!user) tokenLogin();
    else replace("/dashboard");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);
  return (
    <div className="flex w-full h-screen overflow-hidden">
      <div className="flex-[1.5] h-full flex items-center justify-center relative">
        <div className="flex flex-col w-96 translate-x-24">{children}</div>
        <Button.Icon
          className="absolute left-6 top-6"
          type="tertiary"
          size="md"
          onClick={back}
        >
          <LuArrowLeft size={24} />
        </Button.Icon>
      </div>
      <div className="flex-1 h-full flex items-center relative">
        <div className="h-full w-[1px] bg-slate-200 absolute left-8" />
        <div className="h-36 bg-white relative flex items-center">
          <img
            src="https://static.invito.kr/assets/logos/logo-light.png"
            width={204}
            alt=""
            className="p-2"
            draggable={false}
          />
        </div>
        <img
          src="/img/3d-glassy-luminous-orbital-disks-floating.png"
          className="absolute right-12 bottom-48"
          alt=""
          draggable={false}
        />
      </div>
    </div>
  );
}
