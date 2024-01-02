/* eslint-disable @next/next/no-img-element */
import {useEditor, useNode} from "@craftjs/core";
import React from "react";
import ButtonSettings from "./Setting";
import useNodeState from "@/hooks/useNodeState";
import {ButtonStyle} from "./styles";
import {CreatorCardBox} from "../Toolbar/styles";
import Typo from "@/components/System/Typo";
import {TextContentEditBox} from "../Text/styles";
import LayerPositioner from "../Toolbar/Layer/LayerPositioner";

export type ButtonConfigProps = {
  $size?: "xs" | "sm" | "lg" | "md";
  $block?: boolean;
  $text?: string;
  $color: {background: string; text: string};
  $shape: "round" | "square";
  $click: {
    type: "none" | "link" | "modal";
    link?: string;
  };
};
export type ButtonProps = {} & ButtonConfigProps;
function Button({$text = "버튼", ...rest}: ButtonProps) {
  const {
    connectors: {connect, drag},
    actions: {setProp},
  } = useNode();
  const {hovered, selected} = useNodeState();

  return (
    <ButtonStyle
      {...rest}
      $hovered={hovered}
      $selected={selected}
      ref={(ref: HTMLButtonElement) => connect(drag(ref))}
    >
      {selected ? (
        <TextContentEditBox
          html={$text}
          onChange={(e) =>
            setProp(
              (props: ButtonProps) =>
                (props.$text = e.target.value.replace(/<\/?[^>]+(>|$)/g, ""))
            )
          }
          tagName="p"
        />
      ) : (
        $text
      )}
      {selected && <LayerPositioner link={rest.$click.link} defaultName="버튼" />}
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
            $shape="square"
            $color={{background: "#4945FF", text: "#ffffff"}}
            $click={{type: "none"}}
            $size="sm"
            $block={false}
            $text="버튼"
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
  displayName: "버튼",
  related: {
    settings: ButtonSettings,
  },
};

export default Button;
