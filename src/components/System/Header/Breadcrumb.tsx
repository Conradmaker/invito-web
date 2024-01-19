import React from "react";
import {LuChevronRight} from "react-icons/lu";
import {BreadcrumbSt} from "./styles";
import {useUiStore} from "@/modules/zustand/ui";
import {useUserStore} from "@/modules/zustand/user";
import Input from "../Input";

export default function Breadcrumb() {
  const {user} = useUserStore();
  const {currentTeam, setCurrentTeam, currentProject} = useUiStore();
  return (
    <BreadcrumbSt>
      <div className="team">
        <Input.Select
          value={currentTeam?.id + ""}
          onChange={(v) => {
            setCurrentTeam(user?.teams.find((t) => t.id === +v) || null);
          }}
          ghost
          size="lg"
          data={user?.teams.map((t) => ({label: t.name, value: t.id + ""})) || []}
        />
      </div>
      {currentProject && (
        <>
          <LuChevronRight />
          <p>프로젝트1</p>
        </>
      )}
    </BreadcrumbSt>
  );
}
