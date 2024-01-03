import React, {useState} from "react";

let timeout: NodeJS.Timeout;
export default function useDragable() {
  const [draggable, setDraggable] = useState(false);
  const onClickStart = () => {
    setTimeout(() => {
      setDraggable(true);
    }, 500);
  };
  const onClickEnd = () => {
    clearTimeout(timeout);
    setDraggable(false);
  };

  return {onClickEnd, onClickStart, draggable};
}
