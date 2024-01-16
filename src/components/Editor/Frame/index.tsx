import {Element, Frame, useEditor} from "@craftjs/core";
import React, {useEffect} from "react";
import Container from "../Container";
import {useEditorStore} from "@/modules/zustand/editor";

export default function FrameCanvas() {
  const {
    actions: {setProp},
  } = useEditor();
  const {width, scale} = useEditorStore();
  const onChange = () => {
    // setProp("YxWgm2VzBN", (props: ContainerConfigType) => {
    //   props.$height.value = 50;
    // });
  };
  useEffect(() => {}, []);
  return (
    <div className="bg-slate-100 flex-1 flex items-center justify-center overflow-auto relative">
      <div
        className={`h-[640px] bg-white border`}
        style={{width, scale: scale / 100}}
        onClick={onChange}
      >
        <Frame key={1}>
          <Element
            id={1 + ""}
            is={Container}
            $paddingBottom={8}
            $paddingLeft={8}
            $paddingRight={8}
            $paddingTop={8}
            $direction="column"
            $background={{type: "transparent", filter: {type: "none", blur: 0}}}
            $height={{value: 100, unit: "%"}}
            $width={{value: 100, unit: "%"}}
            $click={{type: "none"}}
            canvas
          ></Element>
        </Frame>
      </div>
    </div>
  );
}
