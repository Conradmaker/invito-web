import {useNode} from "@craftjs/core";
import React from "react";
import {TextProps} from ".";
import Input from "@/components/System/Input";
import Typo from "@/components/System/Typo";
import {LuAlignCenter, LuAlignJustify, LuAlignLeft, LuAlignRight} from "react-icons/lu";
import FontSelector, {fontVars, fontWeightVars} from "./FontSelector";

export default function TextSetting() {
  const {
    text,
    weight,
    size,
    align,
    color,
    font,
    actions: {setProp},
  } = useNode<TextProps>((node) => node.data.props as TextProps);
  return (
    <div className="flex flex-col gap-8 items-start p-4 h-[calc(100vh-48px)] overflow-y-scroll">
      <div className="flex flex-col gap-2 w-full">
        <Typo.Body color="secondary" mb={2}>
          스타일
        </Typo.Body>
        <Input.Label title="폰트" size="sm">
          <FontSelector
            block
            value={font}
            onChange={(v) =>
              setProp((prop: TextProps) => {
                prop.font = v;
                prop.weight = "400";
              })
            }
          />
        </Input.Label>
        <div className="flex gap-2">
          <Input.Label title="사이즈" size="sm">
            <Input
              block
              value={size}
              onChange={(e) =>
                setProp((prop: TextProps) => {
                  prop.size = +e.target.value;
                })
              }
              type="number"
            />
          </Input.Label>
          <Input.Label title="굵기" size="sm">
            <Input.Select
              block
              value={weight}
              onChange={(value) =>
                setProp((props: TextProps) => {
                  props.weight = value as "300" | "400" | "500" | "700";
                })
              }
              data={fontWeightVars.filter((fw) =>
                fontVars.find((f) => f.value === font)?.weights.includes(+fw.value)
              )}
            />
          </Input.Label>
        </div>
        <Input.Label title="정렬" size="sm">
          <Input.Toggle.Group
            block
            size="sm"
            value={align || "left"}
            onChange={(v) => setProp((props: TextProps) => (props.align = v as "left"))}
            data={[
              {icon: <LuAlignLeft />, value: "left"},
              {icon: <LuAlignCenter />, value: "center"},
              {icon: <LuAlignRight />, value: "right"},
              {icon: <LuAlignJustify />, value: "justify"},
            ]}
          />
        </Input.Label>
        <Input.Label title="글씨색" size="sm">
          <Input.Color
            size="sm"
            value={color || "#000000"}
            onChange={(v) => setProp((props: TextProps) => (props.color = v))}
          />
        </Input.Label>
      </div>
    </div>
  );
}
