import {useEditor} from "@craftjs/core";
import {useLayer} from "@craftjs/layers";
import React from "react";
import LayerHeader from "./LayerHeader";
import {LayerNodeSt} from "./styles";

export const LayerTreeRenderer: React.FC<{children?: React.ReactNode}> = ({children}) => {
  const {
    id,
    expanded,
    // hovered,
    connectors: {layer},
  } = useLayer((layer) => ({
    expanded: layer.expanded,
  }));
  const {hasChildCanvases} = useEditor((_, query) => {
    return {
      hasChildCanvases: query.node(id).isParentOfTopLevelNodes(),
    };
  });

  return (
    <LayerNodeSt ref={layer as any} $expanded={expanded} $hasCanvases={hasChildCanvases}>
      <LayerHeader />
      {children ? <div className="layer-children">{children}</div> : null}
    </LayerNodeSt>
  );
};
