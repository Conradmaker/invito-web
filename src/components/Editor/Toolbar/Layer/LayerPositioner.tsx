import React from "react";
import {RxMove} from "react-icons/rx";
import {LayerNameEditBox} from "./styles";
import {LuLink} from "react-icons/lu";
import {useEditor, useNode} from "@craftjs/core";

type LayerPositionerProps = {
  link?: string;
  defaultName: string;
  editable?: boolean;
};
export default function LayerPositioner({
  link,
  defaultName,
  editable = true,
}: LayerPositionerProps) {
  const {
    id,
    connectors: {drag},
  } = useNode();
  const {displayName, actions} = useEditor((state) => ({
    displayName:
      state.nodes[id] && state.nodes[id].data.custom.displayName
        ? state.nodes[id].data.custom.displayName
        : state.nodes[id].data.displayName,
    hidden: state.nodes[id] && state.nodes[id].data.hidden,
  }));

  return (
    <div className="absolute text-xs h-6 -top-6 bg-blue-600 text-white flex items-center left-0">
      <div
        ref={(ref) => drag(ref as HTMLDivElement)}
        className="cursor-move w-6 h-6 flex items-center justify-center"
      >
        <RxMove size={14} />
      </div>
      <div className="h-4 w-[1px] bg-slate-400" />
      <div className="mx-1">
        {editable ? (
          <LayerNameEditBox
            html={displayName || defaultName}
            onChange={(e) =>
              actions.setCustom(id, (custom) => (custom.displayName = e.target.value))
            }
            tagName="span"
          />
        ) : (
          <span className="whitespace-nowrap">{displayName || defaultName}</span>
        )}
      </div>
      {link && (
        <div
          className="text-xs flex items-center gap-1 ml-2 cursor-pointer"
          onClick={() => window.open(link, "_blank")}
        >
          <LuLink size={10} />
          {link.slice(0, 20)}
        </div>
      )}
    </div>
  );
}
