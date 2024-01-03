"use client";
import Container from "@/components/Editor/Container";
import Image from "@/components/Editor/Image";
import EButton from "@/components/Editor/Button";
import Text from "@/components/Editor/Text";
import {Editor} from "@craftjs/core";
import React, {useState} from "react";
import ToolBox from "@/components/Editor/Toolbar/ToolBox";
import Input from "@/components/System/Input";
import Label from "@/components/System/Input/Label";
import Button from "@/components/System/Button";
import ComponentSetting from "@/components/Editor/Toolbar/ComponentSetting";
import FrameCanvas from "@/components/Editor/Frame";
import {useEditorStore} from "@/modules/zustand/editor";

export default function Test() {
  const {editable, border, setWidth, toggleBorder, toggleEditable, width} =
    useEditorStore();
  return (
    <div className="h-screen flex flex-col">
      <header className="h-12 border-b items-center flex px-6 text-2xl font-bold text-blue-700">
        <span style={{fontFeatureSettings: "ss03"}}>Invito</span>
      </header>
      <div className="flex flex-1">
        <Editor resolver={{Button: EButton, Container, Text, Image}} enabled={editable}>
          <aside className="w-72 border-r">
            <ToolBox />
          </aside>
          <div className="flex-1 flex flex-col">
            <div className="h-12 border-b flex items-center justify-between px-4">
              <div className="flex gap-2 flex-1">
                <label className="flex gap-1 items-center text-xs">
                  보기모드
                  <Input.Switch size="xs" checked={editable} onChange={toggleEditable} />
                </label>
                <label className="flex gap-1 items-center text-xs">
                  테두리
                  <Input.Switch size="xs" checked={border} onChange={toggleBorder} />
                </label>
              </div>
              <div className="flex gap-2 flex-1 justify-center"></div>
              <div className="flex gap-2 flex-1 justify-end">
                <Label title="화면 너비" size="sm" direction="horizontal">
                  <Input
                    width={50}
                    size="xs"
                    value={width}
                    type="number"
                    onChange={(e) => setWidth(+e.target.value)}
                  />
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

            <FrameCanvas />

            <div className="h-12 border-b flex items-center justify-between px-4">
              <div className="flex gap-2 flex-1"></div>
              <div className="flex gap-2 flex-1 justify-center"></div>
              <div className="flex gap-2 flex-1 justify-end">
                <Button type="tertiary">임시저장</Button>
                <Button>저장하기</Button>
              </div>
              F
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
