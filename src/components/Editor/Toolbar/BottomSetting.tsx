import Button from "@/components/System/Button";
import Input from "@/components/System/Input";
import {useEditorStore} from "@/modules/zustand/editor";
import React from "react";

export default function BottomSetting() {
  const {editable, border, toggleBorder, toggleEditable} = useEditorStore();
  return (
    <div className="h-12 border-b flex items-center justify-between px-4">
      <div className="flex gap-2 flex-1">
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
      <div className="flex gap-2 flex-1 justify-center"></div>
      <div className="flex gap-2 flex-1 justify-end">
        <Button type="tertiary">임시저장</Button>
        <Button>저장하기</Button>
      </div>
    </div>
  );
}
