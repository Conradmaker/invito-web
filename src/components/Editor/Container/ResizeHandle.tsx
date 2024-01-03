import {useNode} from "@craftjs/core";
import React, {useCallback, useState} from "react";
import {ContainerConfigType, ContainerProps} from ".";
import {useEditorStore} from "@/modules/zustand/editor";

export default function ResizeHandle() {
  const {
    actions: {setProp},
  } = useNode<ContainerProps>((node) => node.data.props as ContainerProps);
  const {width} = useEditorStore();
  const [clicked, setClicked] = useState<"t" | "b" | "l" | "r" | null>(null);
  const onMouseDown = useCallback(
    (e: React.MouseEvent<HTMLDivElement, MouseEvent>, dir: "t" | "b" | "l" | "r") => {
      e.stopPropagation();
      setClicked(dir);
    },
    []
  );
  const onMouseUp = useCallback((e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
    setClicked(null);
  }, []);
  const onMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      e.stopPropagation();
      setProp((props: ContainerConfigType) => {
        if (clicked === "r" || clicked === "l") {
          props.$width.unit = "%";
          const percent = +((e.movementX / width) * 100).toFixed(3);
          if (clicked === "r") {
            if (percent > 0 && props.$width.value > 99) return (props.$width.value = 100);
            else if (percent < 0 && props.$width.value < 1)
              return (props.$width.value = 0);
            props.$width.value = +(props.$width.value + percent).toFixed(3);
          } else if (clicked === "l") {
            if (percent < 0 && props.$width.value > 99) return (props.$width.value = 100);
            else if (percent > 0 && props.$width.value < 1)
              return (props.$width.value = 0);
            props.$width.value = +(props.$width.value - percent).toFixed(3);
          }
        }
        if (clicked === "b" || clicked === "t") {
          props.$height.unit = "px";
          if (e.movementY < 0 && props.$height.value < 1)
            return (props.$height.value = 0);
          clicked === "b"
            ? (props.$height.value = props.$height.value + e.movementY)
            : (props.$height.value = props.$height.value - e.movementY);
        }
      });
    },
    [clicked, setProp, width]
  );
  return (
    <>
      <div
        draggable={false}
        className="handle top"
        onMouseDownCapture={(e) => onMouseDown(e, "t")}
        onMouseUp={onMouseUp}
      ></div>
      <div
        draggable={false}
        className="handle bottom"
        onMouseDownCapture={(e) => onMouseDown(e, "b")}
        onMouseUp={onMouseUp}
      ></div>
      <div
        draggable={false}
        className="handle left"
        onMouseDownCapture={(e) => onMouseDown(e, "l")}
        onMouseUp={onMouseUp}
      ></div>
      <div
        draggable={false}
        className="handle right"
        onMouseDownCapture={(e) => onMouseDown(e, "r")}
        onMouseUp={onMouseUp}
      ></div>
      <div
        draggable={false}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        className={clicked ? "clicked handle-layer" : "handle-layer"}
      ></div>
    </>
  );
}
