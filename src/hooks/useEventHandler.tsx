import {ContainerConfigType, ContainerProps} from "@/components/Editor/Container";
import {useNode} from "@craftjs/core";
import React, {useCallback, useState} from "react";

export default function useEventHandler() {
  const {
    actions: {setProp},
  } = useNode<ContainerProps>((node) => node.data.props as ContainerProps);
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
          props.$width.unit = "px";
          props.$width.value = props.$width.value + e.movementX;
          clicked === "r"
            ? (props.$width.value = props.$width.value + e.movementX)
            : (props.$width.value = props.$width.value - e.movementX);
        }
        if (clicked === "b" || clicked === "t") {
          props.$height.unit = "px";
          clicked === "b"
            ? (props.$height.value = props.$height.value + e.movementY)
            : (props.$height.value = props.$height.value - e.movementY);
        }
      });
    },
    [clicked, setProp]
  );
  return {
    onMouseDown,
    onMouseUp,
    onMouseMove,
  };
}
