"use client";
import {usePathname} from "next/navigation";
import React from "react";
import Menu from "../Menu";
import {DashboardHeaderSt} from "./styles";
import Breadcrumb from "./Breadcrumb";
import Avatar from "../Icon/Avatar";
import {useUserStore} from "@/modules/zustand/user";
import useAuth from "@/hooks/Form/useAuth";
import {useUiStore} from "@/modules/zustand/ui";

export default function Dashboard() {
  const pathname = usePathname();
  const {user} = useUserStore();
  const {currentTeam, setCurrentTeam} = useUiStore();
  const {tokenLogout} = useAuth();
  return (
    <DashboardHeaderSt $pathname={pathname}>
      <div className="left">
        <img
          src="https://static.invito.kr/assets/logos/logo-light.png"
          alt=""
          draggable={false}
        />
        <Breadcrumb />
      </div>
      <Menu.Dropdown
        data={[
          {label: user?.nickname + "님 안녕하세요!"},
          {type: "separator"},
          {
            label: "팀",
            value: currentTeam?.id + "",
            onChange: (v) => {
              setCurrentTeam(user?.teams.find((t) => t.id === +v) || null);
            },
            options: user?.teams.map((t) => ({value: t.id + "", label: t.name})) || [],
          },
          {type: "separator"},
          {label: "프로필 설정"},
          {label: "로그아웃", onClick: tokenLogout},
          // {label: "test", children: [{label: "test"}]},
        ]}
      >
        <div className="avatar">
          <Avatar size={36} name={user?.nickname || ""} />
        </div>
      </Menu.Dropdown>
    </DashboardHeaderSt>
  );
}
