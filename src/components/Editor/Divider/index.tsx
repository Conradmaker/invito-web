/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import useNodeState from "@/hooks/useNodeState";
import {useEditor, useNode} from "@craftjs/core";
import React from "react";
import LayerPositioner from "../Toolbar/Layer/LayerPositioner";
import {CreatorCardBox} from "../Toolbar/styles";
import Typo from "@/components/System/Typo";
import {DividerSt} from "./styles";
import DividerSettings from "./Setting";

export type DividerConfigProps = {
  $marginTop: number;
  $marginBottom: number;
  $color: string;
  $stroke: number;
  $width: number;
};
export type DividerProps = {} & DividerConfigProps;
function Divider({...rest}: DividerProps) {
  const {
    connectors: {connect, drag},
    actions: {setProp},
  } = useNode();
  const {hovered, selected} = useNodeState();
  return (
    <DividerSt
      {...rest}
      $hovered={hovered}
      $selected={selected}
      ref={(ref: HTMLDivElement) => connect(drag(ref))}
    >
      <hr />
      {selected && <LayerPositioner editable defaultName="구분선" />}
    </DividerSt>
  );
}

function DividerCreator() {
  const {connectors, query} = useEditor();
  return (
    <CreatorCardBox
      ref={(ref: HTMLDivElement) =>
        connectors.create(
          ref,
          <Divider
            $stroke={1}
            $width={100}
            $color="#eee"
            $marginBottom={8}
            $marginTop={8}
          />
        )
      }
    >
      <img
        src="https://turnupstatic.blob.core.windows.net/assets/overview/divider.png"
        alt="s"
      />
      <Typo.Body weight="regular">구분선</Typo.Body>
    </CreatorCardBox>
  );
}

Divider.Creator = DividerCreator;
Divider.craft = {
  displayName: "구분선",
  related: {
    settings: DividerSettings,
  },
};

export default Divider;
