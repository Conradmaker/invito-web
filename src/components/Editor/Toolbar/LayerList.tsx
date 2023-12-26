"use client";
import React from "react";
import {DefaultLayerHeader, useLayer, DefaultLayer, Layers} from "@craftjs/layers";

export default function LayerList() {
  return (
    <div>
      <Layers
        renderLayer={() => (
          <div>
            {/* <DefaultLayerHeader /> */}
            <DefaultLayer />
          </div>
        )}
      />
    </div>
  );
}
