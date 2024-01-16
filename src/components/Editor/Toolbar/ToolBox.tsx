import React from "react";
import Button from "../Button";
import Text from "../Text";
import Box from "../Container";
import {useEditor} from "@craftjs/core";
import Accordion from "@/components/System/Collapse/Accordion";
import Label from "@/components/System/Input/Label";
import Input from "@/components/System/Input";
import LayerRoot from "./Layer/LayerRoot";
import Image from "../Image";
import Divider from "../Divider";
import {ToolBoxSt} from "./styles";

export default function ToolBox() {
  const {connectors, query} = useEditor();
  return (
    <ToolBoxSt>
      <Accordion
        type="multiple"
        defaultOpenIdx={[1, 2]}
        data={[
          {
            title: "설정",
            content: (
              <div className="flex flex-col px-6 pt-2 pb-6 gap-2">
                <Label size="sm" title="프로젝트명">
                  <Input size="sm" />
                </Label>
              </div>
            ),
          },
          {
            title: "구성요소",
            content: (
              <div className="grid grid-cols-3 px-6 py-2 pb-4 gap-2">
                <Box.Creator />
                <Text.Creator />
                <Button.Creator />
                <Image.Creator />
                <Divider.Creator />
              </div>
            ),
          },
          {title: "레이어", content: <LayerRoot />},
        ]}
      />
    </ToolBoxSt>
  );
}
