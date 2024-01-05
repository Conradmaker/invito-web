"use client";
import Container from "@/components/Editor/Container";
import Image from "@/components/Editor/Image";
import EButton from "@/components/Editor/Button";
import Text from "@/components/Editor/Text";
import Divider from "@/components/Editor/Divider";
import {Editor} from "@craftjs/core";
import React, {useState} from "react";
import ToolBox from "@/components/Editor/Toolbar/ToolBox";
import ComponentSetting from "@/components/Editor/Toolbar/ComponentSetting";
import FrameCanvas from "@/components/Editor/Frame";
import {useEditorStore} from "@/modules/zustand/editor";
import BottomSetting from "@/components/Editor/Toolbar/BottomSetting";
import TopSetting from "@/components/Editor/Toolbar/TopSetting";

export default function Test() {
  const {editable} = useEditorStore();
  return (
    <div className="h-screen flex flex-col">
      <header className="h-12 border-b items-center flex px-6 text-2xl font-bold text-blue-700">
        <span style={{fontFeatureSettings: "ss03"}}>Invito</span>
      </header>
      <div className="flex flex-1">
        <Editor
          resolver={{Button: EButton, Container, Text, Image, Divider}}
          enabled={editable}
        >
          <aside className="w-72 border-r">
            <ToolBox />
          </aside>
          <div className="flex-1 flex flex-col">
            <TopSetting />
            <FrameCanvas />
            <BottomSetting />
          </div>
          <aside className="w-72 border-l">
            <ComponentSetting />
          </aside>
        </Editor>
      </div>
    </div>
  );
}
