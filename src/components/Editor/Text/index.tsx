/* eslint-disable @next/next/no-img-element */
import {useEditor, useNode} from "@craftjs/core";
import React from "react";
import TextSettings from "./Setting";
import useNodeState from "@/hooks/useNodeState";
import {CreatorCardBox} from "../Toolbar/styles";
import Typo from "@/components/System/Typo";
import {TextContentEditBox, TextSt} from "./styles";
import LayerPositioner from "../Toolbar/Layer/LayerPositioner";

export type TextProps = {
  $width: {value: number; unit: "px" | "%" | "auto"};
  $text?: string;
  $align?: "left" | "center" | "right" | "justify";
  $color?: string;
  $size: number;
  $weight: "300" | "400" | "500" | "700";
  $font: string;
};
function Text({$text = "텍스트", ...rest}: TextProps) {
  const {
    connectors: {connect, drag},
    actions: {setProp},
  } = useNode();
  const {hovered, selected} = useNodeState();
  return (
    <TextSt {...rest} ref={(ref) => connect(ref as HTMLDivElement)}>
      {selected ? (
        <TextContentEditBox
          html={$text}
          onChange={(e) => setProp((props: TextProps) => (props.$text = e.target.value))}
          tagName="p"
          translate="yes"
        />
      ) : (
        <p dangerouslySetInnerHTML={{__html: $text || ""}} />
      )}
      {selected && <LayerPositioner defaultName="텍스트" editable={false} />}
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
          <Text
            $weight="400"
            $width={{value: 0, unit: "auto"}}
            $size={14}
            $text="텍스트"
            $font="Wanted Sans Variable"
          />
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
  displayName: "텍스트",
  related: {
    settings: TextSettings,
  },
};

export default Text;
