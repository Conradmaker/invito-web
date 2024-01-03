import {EditorState, useEditor, useNode} from "@craftjs/core";

const getRootParent = (state: EditorState) => {
  let loop = true;
  const [currentSelectedId] = state.events.selected;

  let currentParent = currentSelectedId;
  while (loop) {
    const p = state.nodes[currentParent]?.data?.parent || null;
    if (!p || p.toUpperCase() === "ROOT") {
      loop = false;
    } else {
      currentParent = p;
    }
  }
  return currentParent;
};

export default function useNodeState() {
  const {id} = useNode();
  const {selected, hovered, isSelectedParent} = useEditor((state) => {
    const [currentSelectedId] = state.events.selected;
    const [currentHoveredId] = state.events.hovered;
    let selected = id === currentSelectedId ? true : false;
    let hovered = id === currentHoveredId ? true : false;
    return {
      selected,
      hovered,
      isSelectedParent: id === getRootParent(state),
    };
  });
  return {
    isSelectedParent,
    selected,
    hovered,
    id,
  };
}
