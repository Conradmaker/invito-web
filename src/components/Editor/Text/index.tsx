/* eslint-disable @next/next/no-img-element */
import {useEditor, useNode} from "@craftjs/core";
import React, {useState} from "react";
import ContentEditable from "react-contenteditable";
import TextSettings from "./Setting";
import useNodeState from "@/hooks/useNodeState";
import {CreatorCardBox} from "../Toolbar/styles";
import Typo from "@/components/System/Typo";
import {TextSt} from "./styles";
import {RxMove} from "react-icons/rx";

export type TextProps = {
  text?: string;
  align?: "left" | "center" | "right" | "justify";
  color?: string;
  size: number;
  weight: "300" | "400" | "500" | "700";
  font: string;
};
function Text({text = "텍스트", ...rest}: TextProps) {
  const {
    connectors: {connect, drag},
    actions: {setProp},
  } = useNode();
  const {hovered, selected} = useNodeState();
  return (
    <TextSt {...rest} ref={(ref) => connect(drag(ref as HTMLDivElement))}>
      {selected ? (
        <ContentEditable
          html={text}
          onChange={(e) =>
            setProp(
              (props: TextProps) =>
                (props.text = e.target.value.replace(/<\/?[^>]+(>|$)/g, ""))
            )
          }
          tagName="span"
          className="border border-blue-400 outline-none"
        />
      ) : (
        text
      )}
      {selected && (
        <div className="absolute gap-1 text-xs h-6 -top-6 bg-blue-600 text-white flex items-center px-2 -left-[1px] whitespace-nowrap">
          <RxMove className="cursor-move" size={12} />{" "}
          <div className="h-4 w-[1px] bg-slate-400 mx-1" />
          텍스트
        </div>
      )}
    </TextSt>
  );
}
function TextCreator() {
  const {connectors, query} = useEditor();
  return (
    <CreatorCardBox
      ref={(ref) =>
        connectors.create(
          ref as HTMLParagraphElement,
          <Text weight="400" size={14} text="텍스트" font="Wanted Sans Variable" />
        )
      }
    >
      <img
        src="https://turnupstatic.blob.core.windows.net/assets/overview/text.png"
        alt="s"
      />
      <Typo.Body weight="regular">텍스트</Typo.Body>
    </CreatorCardBox>
  );
}

Text.Creator = TextCreator;
Text.craft = {
  related: {
    settings: TextSettings,
  },
};

export default Text;
