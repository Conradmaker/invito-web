import {useEditor} from "@craftjs/core";
import {EditableLayerName, useLayer} from "@craftjs/layers";
import {
  LuBox,
  LuChevronRight,
  LuEye,
  LuEyeOff,
  LuGalleryVertical,
  LuImage,
  LuType,
  LuUnlink2,
} from "react-icons/lu";
import {LayerItemSt} from "./styles";

export default function LayerHeader() {
  const {
    id,
    depth,
    children,
    expanded,
    connectors: {drag, layerHeader},
    actions: {
      toggleLayer,
      // setExpandedState
    },
  } = useLayer((layer) => ({
    expanded: layer.expanded,
  }));
  const {hidden, actions, selected, type} = useEditor((state, query) => {
    const selected = query.getEvent("selected").first() === id;
    return {
      type: state.nodes[id].data.name as
        | "Container"
        | "Button"
        | "Text"
        | "Image"
        | "Divider",
      hidden: state.nodes[id] && state.nodes[id].data.hidden,
      selected,
      topLevel: query.node(id).isTopLevelCanvas(),
    };
  });
  return (
    <LayerItemSt
      $selected={selected}
      $isHidden={hidden}
      $depth={depth}
      $expanded={expanded}
      ref={drag as any}
    >
      <div className="icon">
        {type === "Text" && <LuType />}
        {type === "Button" && <LuUnlink2 />}
        {type === "Container" && <LuBox />}
        {type === "Image" && <LuImage />}
        {type === "Divider" && <LuGalleryVertical />}
      </div>

      <div className="inner">
        <div ref={layerHeader as any}>
          <p className="layer-name">
            <EditableLayerName />
          </p>
          <div className="hide" onClick={() => actions.setHidden(id, !hidden)}>
            {hidden ? <LuEyeOff /> : <LuEye />}
          </div>
          <div>
            {children && children.length ? (
              <div className="expand" onClick={toggleLayer}>
                <LuChevronRight />
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </LayerItemSt>
  );
}
