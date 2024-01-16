"use client";
import Container from "@/components/Editor/Container";
import Image from "@/components/Editor/Image";
import EButton from "@/components/Editor/Button";
import Text from "@/components/Editor/Text";
import Divider from "@/components/Editor/Divider";
import {Editor} from "@craftjs/core";
import React from "react";
import ToolBox from "@/components/Editor/Toolbar/ToolBox";
import ComponentSetting from "@/components/Editor/Toolbar/ComponentSetting";
import FrameCanvas from "@/components/Editor/Frame";
import {useEditorStore} from "@/modules/zustand/editor";
import BottomSetting from "@/components/Editor/Toolbar/BottomSetting";
import TopSetting from "@/components/Editor/Toolbar/TopSetting";
import Header from "@/components/System/Header";

export default function Test() {
  const {editable} = useEditorStore();
  return (
    <div className="h-screen flex flex-col">
      <Header.Dashboard />
      <div className="flex flex-1 border-t">
        <Editor
          resolver={{Button: EButton, Container, Text, Image, Divider}}
          enabled={editable}
        >
          <ToolBox />
          <div className="flex-1 flex flex-col">
            <TopSetting />
            <FrameCanvas />
            <BottomSetting />
          </div>
          <ComponentSetting />
        </Editor>
      </div>
    </div>
  );
}
