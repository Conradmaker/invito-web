/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import useNodeState from "@/hooks/useNodeState";
import {useEditor, useNode} from "@craftjs/core";
import React from "react";
import LayerPositioner from "../Toolbar/Layer/LayerPositioner";
import {CreatorCardBox} from "../Toolbar/styles";
import Typo from "@/components/System/Typo";
import ImageSettings from "./Setting";
import {ImageSt} from "./styles.ts";
import {TextContentEditBox} from "../Text/styles";

export type ImageConfigProps = {
  $src?: string;
  $radius: number;
  $width: {value: number; unit: "px" | "%"};
  $height: {value: number; unit: "px" | "%"};
  $caption: {
    text: string;
    visible: boolean;
    placement: null | "bottom-right" | "bottom-center" | "bottom-left";
  };
  $fit: "fill" | "contain" | "cover" | "stretch" | "none";
  $click: {
    type: "none" | "link" | "modal";
    link?: string;
  };
};
export type ImageProps = {} & ImageConfigProps;
function Image({$src, ...rest}: ImageProps) {
  const {
    connectors: {connect, drag},
    actions: {setProp},
  } = useNode();
  const {hovered, selected} = useNodeState();
  return (
    <ImageSt
      {...rest}
      $hovered={hovered}
      $selected={selected}
      ref={(ref: HTMLDivElement) => connect(drag(ref))}
    >
      <div className="img-positioner">
        <img src={$src} alt={rest.$caption.text} />
      </div>
      {rest.$caption.visible && rest.$caption.text && (
        <div className="caption">
          <Typo.Desc color="secondary">
            {selected ? (
              <TextContentEditBox
                html={rest.$caption.text}
                onChange={(e) =>
                  setProp(
                    (prop: ImageConfigProps) => (prop.$caption.text = e.target.value)
                  )
                }
                tagName="span"
              />
            ) : (
              rest.$caption.text
            )}
          </Typo.Desc>
        </div>
      )}
      {selected && <LayerPositioner editable defaultName="이미지" />}
    </ImageSt>
  );
}

function ImageCreator() {
  const {connectors, query} = useEditor();
  return (
    <CreatorCardBox
      ref={(ref: HTMLDivElement) =>
        connectors.create(
          ref,
          <Image
            $caption={{text: "", visible: false, placement: null}}
            $click={{type: "none"}}
            $fit="cover"
            $height={{unit: "%", value: 100}}
            $width={{unit: "%", value: 100}}
            $radius={0}
          />
        )
      }
    >
      <img
        src="https://turnupstatic.blob.core.windows.net/assets/overview/image.png"
        alt="s"
      />
      <Typo.Body weight="regular">이미지</Typo.Body>
    </CreatorCardBox>
  );
}

Image.Creator = ImageCreator;
Image.craft = {
  displayName: "이미지",
  related: {
    settings: ImageSettings,
  },
};

export default Image;
