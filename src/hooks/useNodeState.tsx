import {useEditor, useNode} from "@craftjs/core";

export default function useNodeState() {
  const {id} = useNode();
  const {selected, hovered} = useEditor((state) => {
    const [currentSelectedId] = state.events.selected;
    const [currentHoveredId] = state.events.hovered;
    let selected = id === currentSelectedId ? true : false;
    let hovered = id === currentHoveredId ? true : false;

    return {
      selected,
      hovered,
    };
  });
  return {
    selected,
    hovered,
    id,
  };
}
