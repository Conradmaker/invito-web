/* eslint-disable @next/next/no-img-element */
import {useEditor, useNode} from "@craftjs/core";
import React from "react";
import ContentEditable from "react-contenteditable";
import ButtonSettings from "./Setting";
import useNodeState from "@/hooks/useNodeState";
import {ButtonStyle} from "./styles";
import {RxMove} from "react-icons/rx";
import {CreatorCardBox} from "../Toolbar/styles";
import Typo from "@/components/System/Typo";
import {LuLink} from "react-icons/lu";
import {TextContentEditBox} from "../Text/styles";

export type ButtonConfigProps = {
  size?: "xs" | "sm" | "lg" | "md";
  block?: boolean;
  text?: string;
  color: {background: string; text: string};
  shape: "round" | "square";
  click: {
    type: "none" | "link" | "modal";
    link?: string;
  };
};
export type ButtonProps = {} & ButtonConfigProps;
function Button({text = "버튼", ...rest}: ButtonProps) {
  const {
    connectors: {connect, drag},
    actions: {setProp},
  } = useNode();
  const {hovered, selected} = useNodeState();
  return (
    <ButtonStyle
      {...rest}
      className={
        hovered ? "bg-white border-blue-100 border-2 px-4 py-2 relative" : "relative"
      }
      ref={(ref: HTMLButtonElement) => connect(drag(ref))}
    >
      {selected ? (
        <TextContentEditBox
          html={text}
          onChange={(e) =>
            setProp(
              (props: ButtonProps) =>
                (props.text = e.target.value.replace(/<\/?[^>]+(>|$)/g, ""))
            )
          }
          tagName="p"
        />
      ) : (
        text
      )}
      {selected && (
        <div className="absolute gap-1 text-xs h-6 -top-6 bg-blue-600 text-white flex items-center px-2 -left-[1px] whitespace-nowrap">
          <RxMove className="cursor-move" size={12} />{" "}
          <div className="h-4 w-[1px] bg-slate-400 mx-1" />
          버튼
          {rest.click.link && (
            <div
              className="text-xs flex items-center gap-1 ml-2 cursor-pointer"
              onClick={() => window.open(rest.click.link, "_blank")}
            >
              <LuLink size={10} />
              {rest.click.link.slice(0, 20)}
            </div>
          )}
        </div>
      )}
    </ButtonStyle>
  );
}
function ButtonCreator() {
  const {connectors, query} = useEditor();
  return (
    <CreatorCardBox
      ref={(ref: HTMLDivElement) =>
        connectors.create(
          ref,
          <Button
            shape="square"
            color={{background: "#4945FF", text: "#ffffff"}}
            click={{type: "none"}}
            size="sm"
            block={false}
            text="버튼"
          />
        )
      }
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
