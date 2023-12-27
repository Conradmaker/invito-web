"use client";
import React from "react";
import {Layers} from "@craftjs/layers";
import {useEditor} from "@craftjs/core";
import {LayerContainer} from "./styles";
import {LayerTreeRenderer} from "./LayerTreeRenderer";

export default function LayerRoot() {
  const {store} = useEditor();
  return (
    <LayerContainer>
      <Layers renderLayer={LayerTreeRenderer} expandRootOnLoad />
    </LayerContainer>
  );
}
