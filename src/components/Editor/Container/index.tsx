/* eslint-disable @next/next/no-img-element */
import {Element, useEditor, useNode} from "@craftjs/core";
import ContainerSettings from "./Setting";
import React from "react";
import {RxMove} from "react-icons/rx";
import useNodeState from "@/hooks/useNodeState";
import {CreatorCardBox} from "../Toolbar/styles";
import Typo from "@/components/System/Typo";
import {ContainerSt} from "./styles";
import {LuLink} from "react-icons/lu";

export type ContainerConfigType = {
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
      className={`bg-opacity-40`}
      ref={(ref) => connect(drag(ref as HTMLDivElement))}
    >
      <div>
        {children}
        {selected && (
          <div className="absolute gap-1 text-xs h-6 -top-6 bg-blue-600 text-white flex items-center px-2 -left-[1px]">
            <RxMove className="cursor-move" size={12} />{" "}
            <div className="h-4 w-[1px] bg-slate-400 mx-1" />
            컨테이너{" "}
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
            paddingBottom={8}
            paddingLeft={8}
            paddingRight={8}
            paddingTop={8}
            marginBottom={0}
            marginLeft={0}
            marginRight={0}
            marginTop={0}
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
  related: {
    settings: ContainerSettings,
  },
};
