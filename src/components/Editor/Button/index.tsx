/* eslint-disable @next/next/no-img-element */
import {useEditor, useNode} from "@craftjs/core";
import React from "react";
import ContentEditable from "react-contenteditable";
import ButtonSettings from "./Setting";
import useNodeState from "@/hooks/useNodeState";
import {ButtonStyle} from "./styles";
import {RxComponent2, RxLayers, RxMove} from "react-icons/rx";
import {CreatorCardBox} from "../Toolbar/styles";
import Typo from "@/components/System/Typo";

export type ButtonStyleProps = {
  color?: string;
  size?: "xs" | "lg" | "md" | "sm";
  block?: boolean;
};
export type ButtonProps = {
  text?: string;
} & ButtonStyleProps;
function Button({text = "버튼"}: ButtonProps) {
  const {
    connectors: {connect, drag},
    actions: {setProp},
  } = useNode();
  const {hovered, selected} = useNodeState();
  return (
    <ButtonStyle
      className={
        hovered ? "bg-white border-blue-100 border-2 px-4 py-2 relative" : "relative"
      }
      ref={(ref: HTMLButtonElement) => connect(drag(ref))}
    >
      {selected ? (
        <ContentEditable
          html={text}
          onChange={(e) =>
            setProp(
              (props: ButtonProps) =>
                (props.text = e.target.value.replace(/<\/?[^>]+(>|$)/g, ""))
            )
          }
          tagName="p"
          style={{outline: "none"}}
        />
      ) : (
        text
      )}
      {selected && (
        <div className="absolute gap-1 text-xs h-6 -top-6 bg-blue-600 text-white flex items-center px-2 -left-[1px]">
          <RxMove className="cursor-move" size={12} />{" "}
          <div className="h-4 w-[1px] bg-slate-400 mx-1" /> <RxComponent2 size={12} />{" "}
          버튼
        </div>
      )}
    </ButtonStyle>
  );
}
function ButtonCreator() {
  const {connectors, query} = useEditor();
  return (
    <CreatorCardBox
      ref={(ref: HTMLDivElement) => connectors.create(ref, <Button text="버튼" />)}
    >
      <img
        src="https://turnupstatic.blob.core.windows.net/assets/overview/button.png"
        alt="s"
      />
      <Typo.Body weight="regular">버튼</Typo.Body>
    </CreatorCardBox>
  );
}

Button.Creator = ButtonCreator;
Button.craft = {
  related: {
    settings: ButtonSettings,
  },
};

export default Button;
