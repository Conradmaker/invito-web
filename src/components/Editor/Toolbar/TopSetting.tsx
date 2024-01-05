import Button from "@/components/System/Button";
import Input from "@/components/System/Input";
import Label from "@/components/System/Input/Label";
import {useEditorStore} from "@/modules/zustand/editor";
import {useEditor} from "@craftjs/core";
import React from "react";
import {LuArrowLeft, LuArrowRight} from "react-icons/lu";

export default function TopSetting() {
  const {canUndo, canRedo, actions} = useEditor((_, query) => ({
    canUndo: query.history.canUndo(),
    canRedo: query.history.canRedo(),
  }));
  const {setWidth, width, setScale, scale} = useEditorStore();
  return (
    <div className="h-12 border-b flex items-center justify-between px-4">
      <div className="flex gap-2 flex-1">
        <Button.Icon
          size="xs"
          type="tertiary"
          disabled={!canUndo}
          onClick={actions.history.undo}
        >
          <LuArrowLeft />
        </Button.Icon>
        <Button.Icon
          size="xs"
          type="tertiary"
          disabled={!canRedo}
          onClick={actions.history.redo}
        >
          <LuArrowRight />
        </Button.Icon>
      </div>
      <div className="flex gap-8 justify-end">
        <Label title="화면 너비" size="sm" direction="horizontal">
          <Input
            width={50}
            size="xs"
            textAlign="right"
            value={width}
            type="number"
            onChange={(e) => setWidth(+e.target.value)}
          />
        </Label>
        <Label title="배율" size="sm" direction="horizontal">
          <Input.Select
            size="xs"
            value={scale + ""}
            onChange={(v) => setScale(+v)}
            placeholder="100%"
            data={[
              {value: "100", label: "100%"},
              {value: "125", label: "125%"},
              {value: "150", label: "150%"},
            ]}
          />
        </Label>
      </div>
    </div>
  );
}
