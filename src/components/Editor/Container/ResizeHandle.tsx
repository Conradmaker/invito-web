import {useNode} from "@craftjs/core";
import React, {useState} from "react";
import {ContainerConfigType} from ".";

export default function ResizeHandle() {
  const {
    connectors: {connect, drag},
    actions: {setProp},
  } = useNode();
  const [clicked, setClicked] = useState<"x" | "y" | null>(null);
  const [startPos, setStartPos] = useState<{x: number; y: number} | null>(null);
  const onMouseDown = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    dir: "x" | "y"
  ) => {
    e.stopPropagation();
    setClicked(dir);
    setStartPos({x: e.clientX, y: e.clientY});
    console.log("down", e.clientX, e.clientY);
  };
  const onMouseUp = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
    setClicked(null);
    setStartPos(null);
    console.log("up", e.clientX, e.clientY);
  };
  const onMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
    setProp((props: ContainerConfigType) => {
      props.$width.value = props.$width.value + e.movementX;
    });
    console.log("startPos", startPos);
    console.log("clientX", e.clientX);
    console.log("movement", e.movementX);
    console.log("pageX", e.pageX);
    console.log("screenX", e.screenX);
  };
  return (
    <>
      <div
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        className={clicked ? "clicked layer" : "layer"}
      ></div>
      <div
        className="handle top"
        onMouseDown={(e) => onMouseDown(e, "y")}
        onMouseUp={onMouseUp}
      ></div>
      <div
        className="handle bottom"
        onMouseDown={(e) => onMouseDown(e, "y")}
        onMouseUp={onMouseUp}
      ></div>
      <div
        className="handle left"
        onMouseDown={(e) => onMouseDown(e, "x")}
        onMouseUp={onMouseUp}
      ></div>
      <div
        className="handle right"
        onDrag={(e) => console.log("drag")}
        onDragStart={(e) => console.log("drag s")}
        onDragEnd={(e) => console.log("drag e")}
        onMouseDown={(e) => onMouseDown(e, "x")}
      ></div>
    </>
  );
}
