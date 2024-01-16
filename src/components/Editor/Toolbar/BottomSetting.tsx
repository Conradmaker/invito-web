import Button from "@/components/System/Button";
import Input from "@/components/System/Input";
import {useEditorStore} from "@/modules/zustand/editor";
import React from "react";
import {BottomSettingSt} from "./styles";

export default function BottomSetting() {
  const {editable, border, toggleBorder, toggleEditable} = useEditorStore();
  return (
    <BottomSettingSt>
      <div className="left">
        <label className="flex gap-1 items-center text-xs">
          보기모드
          <Input.Switch
            size="xs"
            checked={!editable}
            onChange={(c) => toggleEditable(!c)}
          />
        </label>
        <label className="flex gap-1 items-center text-xs">
          테두리
          <Input.Switch size="xs" checked={border} onChange={toggleBorder} />
        </label>
      </div>
      <div className="right">
        <Button type="tertiary">임시저장</Button>
        <Button>저장하기</Button>
      </div>
    </BottomSettingSt>
  );
}
