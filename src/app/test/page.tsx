"use client";
import Box from "@/components/Editor/Container";
import {Editor, Element, Frame} from "@craftjs/core";
import React, {useState} from "react";
import Text from "@/components/Editor/Text";
import ToolBox from "@/components/Editor/Toolbar/ToolBox";
import Input from "@/components/System/Input";
import Label from "@/components/System/Input/Label";
import LayerList from "@/components/Editor/Toolbar/LayerList";
import Button from "@/components/System/Button";
import ComponentSetting from "@/components/Editor/Toolbar/ComponentSetting";

export default function page() {
  const [editable, setEditable] = useState(true);

  return (
    <div className="h-screen flex flex-col">
      <header className="h-12 border-b items-center flex px-6 text-2xl font-bold text-blue-700">
        <span style={{fontFeatureSettings: "ss03"}}>Invito</span>
      </header>
      <div className="flex flex-1">
        <Editor resolver={{Button, Box, Text}} enabled={editable}>
          <aside className="w-72 border-r">
            <ToolBox />
          </aside>
          <div className="flex-1 flex flex-col">
            <div className="h-12 border-b flex items-center justify-between px-4">
              <div className="flex gap-2 flex-1">
                <label className="flex gap-1 items-center text-xs">
                  보기모드
                  <Input.Switch
                    size="xs"
                    // checked={editable}
                    // onChange={(e) => setEditable(e.target.checked)}
                  />
                </label>
                <label className="flex gap-1 items-center text-xs">
                  테두리
                  <Input.Switch
                    size="xs"
                    // checked={editable}
                    // onChange={(e) => setEditable(e.target.checked)}
                  />
                </label>
              </div>
              <div className="flex gap-2 flex-1 justify-center"></div>
              <div className="flex gap-2 flex-1 justify-end">
                <Label title="화면 너비" size="sm" direction="horizontal">
                  <Input width={50} size="xs" />
                </Label>
                <Label title="배율" size="sm" direction="horizontal">
                  <Input.Select
                    size="xs"
                    value="1"
                    placeholder="100%"
                    data={[
                      {value: "1", label: "100%"},
                      {value: "1.25", label: "125%"},
                      {value: "1.5", label: "150%"},
                    ]}
                  />
                </Label>
              </div>
            </div>
            <div className="bg-slate-100 flex-1 flex items-center justify-center">
              <div className="w-96 h-[640px] bg-white border">
                <Frame>
                  <Element
                    is={Box}
                    paddingBottom={8}
                    paddingLeft={8}
                    paddingRight={8}
                    paddingTop={8}
                    direction="column"
                    background={{type: "transparent", filter: "none"}}
                    click={{type: "none"}}
                    canvas
                  ></Element>
                </Frame>
              </div>
            </div>

            <div className="h-12 border-b flex items-center justify-between px-4">
              <div className="flex gap-2 flex-1"></div>
              <div className="flex gap-2 flex-1 justify-center"></div>
              <div className="flex gap-2 flex-1 justify-end">
                <Button type="tertiary">임시저장</Button>
                <Button>저장하기</Button>
              </div>
            </div>
          </div>
          <aside className="w-72 border-l">
            {/* <div className="h-12 border-b"></div> */}
            <ComponentSetting />
          </aside>
        </Editor>
      </div>
    </div>
  );
}
