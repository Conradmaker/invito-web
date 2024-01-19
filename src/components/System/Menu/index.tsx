"use client";
import React from "react";
import * as Menubar from "@radix-ui/react-menubar";
import {MenuContainer, SubmenuContent} from "./styles";
import Navbar from "./Navbar";
import Dropdown from "./Dropdown";
import SideTab from "./SideTab";

function Menu() {
  return (
    <MenuContainer>
      <Menubar.Menu>
        <Menubar.Trigger className="menubar-trigger">File</Menubar.Trigger>
        <Menubar.Portal>
          <SubmenuContent
            className="MenubarContent"
            align="start"
            sideOffset={5}
            alignOffset={-3}
          >
            <Menubar.Item className="menubar-item">
              New Tab <div className="right-slot">⌘ T</div>
            </Menubar.Item>
            <Menubar.Item className="menubar-item">
              New Window <div className="right-slot">⌘ N</div>
            </Menubar.Item>
            <Menubar.Item className="menubar-item" disabled>
              New Incognito Window
            </Menubar.Item>
            <Menubar.Separator className="menubar-separator" />
            <Menubar.Item className="menubar-item">
              Print… <div className="right-slot">⌘ P</div>
            </Menubar.Item>
          </SubmenuContent>
        </Menubar.Portal>
      </Menubar.Menu>

      <Menubar.Menu>
        <Menubar.Trigger className="menubar-trigger">File</Menubar.Trigger>
        <Menubar.Portal>
          <SubmenuContent
            className="MenubarContent"
            align="start"
            sideOffset={5}
            alignOffset={-3}
          >
            <Menubar.Item className="menubar-item">
              New Tab <div className="right-slot">⌘ T</div>
            </Menubar.Item>
            <Menubar.Item className="menubar-item">
              New Window <div className="right-slot">⌘ N</div>
            </Menubar.Item>
            <Menubar.Item className="menubar-item" disabled>
              New Incognito Window
            </Menubar.Item>
            <Menubar.Separator className="menubar-separator" />
            <Menubar.Item className="menubar-item">
              Print… <div className="right-slot">⌘ P</div>
            </Menubar.Item>
          </SubmenuContent>
        </Menubar.Portal>
      </Menubar.Menu>
    </MenuContainer>
  );
}

Menu.Navbar = Navbar;
Menu.Dropdown = Dropdown;
export default Menu;
