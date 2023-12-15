import React from "react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import {RxCaretDown} from "react-icons/rx";
import {NavMenuContainer} from "./styles";

function ListItem({title, desc}: {title: string; desc?: string}) {
  return (
    <li>
      <NavigationMenu.Link asChild>
        <a className="ListItemLink">
          <div className="ListItemHeading">{title}</div>
          <p className="ListItemText">{desc || ""}</p>
        </a>
      </NavigationMenu.Link>
    </li>
  );
}

export default function Navbar() {
  return (
    <NavMenuContainer className="NavigationMenuRoot" orientation="vertical">
      <NavigationMenu.List className="NavigationMenuList">
        <NavigationMenu.Item>
          <NavigationMenu.Trigger className="NavigationMenuTrigger">
            Learn <RxCaretDown className="CaretDown" aria-hidden />
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className="NavigationMenuContent">
            <ul className="List one">
              <li style={{gridRow: "span 3"}}>
                <NavigationMenu.Link asChild>
                  <a className="Callout" href="/">
                    <svg
                      aria-hidden
                      width="38"
                      height="38"
                      viewBox="0 0 25 25"
                      fill="white"
                    >
                      <path d="M12 25C7.58173 25 4 21.4183 4 17C4 12.5817 7.58173 9 12 9V25Z"></path>
                      <path d="M12 0H4V8H12V0Z"></path>
                      <path d="M17 8C19.2091 8 21 6.20914 21 4C21 1.79086 19.2091 0 17 0C14.7909 0 13 1.79086 13 4C13 6.20914 14.7909 8 17 8Z"></path>
                    </svg>
                    <div className="CalloutHeading">Radix Primitives</div>
                    <p className="CalloutText">
                      Unstyled, accessible components for React.
                    </p>
                  </a>
                </NavigationMenu.Link>
              </li>
              <ListItem
                title="Stitches"
                desc="CSS-in-JS with best-in-class developer experience."
              />
              <ListItem
                title="Stitches"
                desc="CSS-in-JS with best-in-class developer experience."
              />
              <ListItem
                title="Stitches"
                desc="CSS-in-JS with best-in-class developer experience."
              />
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Trigger className="NavigationMenuTrigger">
            Overview <RxCaretDown className="CaretDown" aria-hidden />
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className="NavigationMenuContent">
            <ul className="List two">
              <ListItem
                title="Introduction"
                desc="Build high-quality, accessible design systems and web apps."
              />
              <ListItem
                title="Introduction"
                desc="Build high-quality, accessible design systems and web apps."
              />
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Link
            className="NavigationMenuLink"
            href="https://github.com/radix-ui"
          >
            Github
          </NavigationMenu.Link>
        </NavigationMenu.Item>

        <NavigationMenu.Indicator className="NavigationMenuIndicator">
          <div className="Arrow" />
        </NavigationMenu.Indicator>
      </NavigationMenu.List>

      <div className="ViewportPosition">
        <NavigationMenu.Viewport className="NavigationMenuViewport" />
      </div>
    </NavMenuContainer>
  );
}
