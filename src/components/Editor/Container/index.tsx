/* eslint-disable @next/next/no-img-element */
import {Element, useEditor, useNode} from "@craftjs/core";
import ContainerSettings from "./Setting";
import React from "react";
import useNodeState from "@/hooks/useNodeState";
import {CreatorCardBox} from "../Toolbar/styles";
import Typo from "@/components/System/Typo";
import {ContainerSt} from "./styles";
import LayerPositioner from "../Toolbar/Layer/LayerPositioner";

export type ContainerConfigType = {
  width: {value: number; unit: "px" | "%"};
  height: {value: number; unit: "px" | "%"};
  paddingLeft?: number;
  paddingRight?: number;
  paddingTop?: number;
  paddingBottom?: number;
  marginLeft?: number;
  marginRight?: number;
  marginTop?: number;
  marginBottom?: number;
  direction?: "row" | "column";
  justify?: "start" | "center" | "end" | "space-between";
  align?: "start" | "center" | "end" | "space-between";
  gap?: number;
  background: {
    type: "color" | "transparent" | "image";
    color?: string;
    src?: string;
    filter: {
      type: "sepia" | "contrast" | "invert" | "grayscale" | "none";
      value?: number;
      blur: number;
    };
  };
  click: {
    type: "link" | "none";
    link?: string;
  };
};
export type ContainerProps = {
  children?: React.ReactNode;
} & ContainerConfigType;
export default function Container({children, ...rest}: ContainerProps) {
  const {
    connectors: {connect, drag},
  } = useNode();
  const {selected, hovered} = useNodeState();

  return (
    <ContainerSt
      {...rest}
      $hovered={hovered}
      $selected={selected}
      ref={(ref) => connect(drag(ref as HTMLDivElement))}
    >
      <div>
        {children}
        {selected && <LayerPositioner defaultName="컨테이너" link={rest.click.link} />}
      </div>
    </ContainerSt>
  );
}

function ContainerCreator() {
  const {connectors, query} = useEditor();
  return (
    <CreatorCardBox
      ref={(ref) =>
        connectors.create(
          ref as HTMLDivElement,
          <Element
            is={Container}
            canvas
            gap={0}
            direction="row"
            justify="start"
            align="start"
            paddingBottom={8}
            paddingLeft={8}
            paddingRight={8}
            paddingTop={8}
            marginBottom={0}
            marginLeft={0}
            marginRight={0}
            marginTop={0}
            height={{value: 100, unit: "px"}}
            width={{value: 100, unit: "%"}}
            background={{type: "transparent", filter: {type: "none", blur: 0}}}
            click={{type: "none"}}
          />
        )
      }
    >
      <img
        src="https://turnupstatic.blob.core.windows.net/assets/overview/box.png"
        alt="s"
      />
      <Typo.Body weight="regular">컨테이너</Typo.Body>
    </CreatorCardBox>
  );
}

Container.Creator = ContainerCreator;

Container.craft = {
  displayName: "컨테이너",
  related: {
    settings: ContainerSettings,
  },
};
