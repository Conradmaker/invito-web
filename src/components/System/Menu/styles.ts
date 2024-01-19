import styled from "styled-components";
import * as Menubar from "@radix-ui/react-menubar";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";

export const MenuContainer = styled(Menubar.Root)`
  display: flex;
  background-color: white;
  padding: 3px;
  border-radius: 6px;
  box-shadow: 0 2px 10px #000;
  .menubar-trigger {
    padding: 8px 12px;
    outline: none;
    user-select: none;
    font-weight: 500;
    line-height: 1;
    border-radius: 4px;
    color: ${({theme}) => theme.colors.primary[400]};
    font-size: 13px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2px;
    &[data-highlighted],
    &[data-state="open"] {
      background-color: ${({theme}) => theme.colors.primary[300]};
    }
  }
`;

export const SubmenuContent = styled(Menubar.Content)`
  min-width: 220px;
  background-color: white;
  border-radius: 6px;
  padding: 5px;
  box-shadow: 0px 10px 38px -10px rgba(22, 23, 24, 0.35),
    0px 10px 20px -15px rgba(22, 23, 24, 0.2);
  animation-duration: 400ms;
  animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
  transform-origin: var(--radix-menubar-content-transform-origin);
  animation: scaleIn 0.2s ease-out;
  will-change: transform, opacity;
  @keyframes scaleIn {
    from {
      opacity: 0;
      transform: scale(0);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }

  .menubar-item,
  .menubar-sub-trigger {
    background-color: ${({theme}) => theme.colors.primary[300]};
    color: ${({theme}) => theme.colors.primary[500]};
  }
  .menubar-item,
  .menubar-sub-trigger,
  .menubar-checkbox-item,
  .menubar-radio-item {
    all: unset;
    font-size: 13px;
    line-height: 1;
    color: ${({theme}) => theme.colors.primary[500]};
    border-radius: 4px;
    display: flex;
    align-items: center;
    height: 25px;
    padding: 0 10px;
    position: relative;
    user-select: none;
    &.inset {
      padding-left: 20px;
    }
    &[data-highlighted] {
      background-image: linear-gradient(
        135deg,
        ${({theme}) => theme.colors.primary[400]} 0%,
        ${({theme}) => theme.colors.primary[400]} 100%
      );
      color: var(--violet-1);
    }
    &[data-disabled] {
      color: ${({theme}) => theme.colors.primary[100]};
      pointer-events: none;
    }
    .menubar-item-indicator {
      position: absolute;
      left: 0;
      width: 20px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
    }
    .menubar-separator {
      height: 1px;
      background-color: ${({theme}) => theme.colors.primary[200]};
      margin: 5px;
    }

    .right-slot {
      margin-left: auto;
      padding-left: 20px;
      color: ${({theme}) => theme.colors.primary[300]};
    }

    [data-highlighted] > .right-slot {
      color: white;
    }

    [data-disabled] > .right-slot {
      color: ${({theme}) => theme.colors.primary[200]};
    }
  }
`;

export const NavMenuContainer = styled(NavigationMenu.Root)`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100vw;
  z-index: 1;

  .NavigationMenuList {
    display: flex;
    justify-content: center;
    background-color: white;
    padding: 4px;
    border-radius: 6px;
    list-style: none;
    box-shadow: 0 2px 10px ${({theme}) => theme.colors.primary[100]};
    margin: 0;
  }

  .NavigationMenuTrigger,
  .NavigationMenuLink {
    padding: 8px 12px;
    outline: none;
    user-select: none;
    font-weight: 500;
    line-height: 1;
    border-radius: 4px;
    font-size: 15px;
    color: ${({theme}) => theme.colors.primary[400]};
    &:focus {
      box-shadow: 0 0 0 2px ${({theme}) => theme.colors.primary[300]};
    }
    &:hover {
      background-color: ${({theme}) => theme.colors.primary[100]};
    }
  }

  .NavigationMenuTrigger {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2px;
  }

  .NavigationMenuLink {
    display: block;
    text-decoration: none;
    font-size: 15px;
    line-height: 1;
  }

  .NavigationMenuContent {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    animation-duration: 250ms;
    animation-timing-function: ease;
    &[data-motion="from-start"] {
      animation-name: enterFromLeft;
    }
    &[data-motion="from-end"] {
      animation-name: enterFromRight;
    }
    &[data-motion="to-start"] {
      animation-name: exitToLeft;
    }
    &[data-motion="to-end"] {
      animation-name: exitToRight;
    }
  }

  @media only screen and (min-width: 600px) {
    .NavigationMenuContent {
      width: auto;
    }
  }

  .NavigationMenuIndicator {
    display: flex;
    align-items: flex-end;
    justify-content: center;
    height: 10px;
    top: 100%;
    overflow: hidden;
    z-index: 1;
    transition: width, transform 250ms ease;
    &[data-state="visible"] {
      animation: fadeIn 200ms ease;
    }
    &[data-state="hidden"] {
      animation: fadeOut 200ms ease;
    }
  }

  .NavigationMenuViewport {
    position: relative;
    transform-origin: top center;
    margin-top: 10px;
    width: 100%;
    background-color: white;
    border-radius: 6px;
    overflow: hidden;
    box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px,
      hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
    height: var(--radix-navigation-menu-viewport-height);
    transition: width, height, 300ms ease;
    &[data-state="open"] {
      animation: scaleIn 200ms ease;
    }
    &[data-state="closed"] {
      animation: scaleOut 200ms ease;
    }
  }
  @media only screen and (min-width: 600px) {
    .NavigationMenuViewport {
      width: var(--radix-navigation-menu-viewport-width);
    }
  }

  .List {
    display: grid;
    padding: 22px;
    margin: 0;
    column-gap: 10px;
    list-style: none;
  }
  @media only screen and (min-width: 600px) {
    .List.one {
      width: 500px;
      grid-template-columns: 0.75fr 1fr;
    }
    .List.two {
      width: 600px;
      grid-auto-flow: column;
      grid-template-rows: repeat(3, 1fr);
    }
  }

  .ListItemLink {
    display: block;
    outline: none;
    text-decoration: none;
    user-select: none;
    padding: 12px;
    border-radius: 6px;
    font-size: 15px;
    line-height: 1;
    &:focus {
      box-shadow: 0 0 0 2px ${({theme}) => theme.colors.primary[300]};
    }
    &:hover {
      background-color: ${({theme}) => theme.colors.primary[100]};
    }
    .ListItemHeading {
      font-weight: 500;
      line-height: 1.2;
      margin-bottom: 5px;
      color: ${({theme}) => theme.colors.primary[400]};
    }

    .ListItemText {
      color: ${({theme}) => theme.colors.primary[500]};
      line-height: 1.4;
      font-weight: initial;
    }
  }
  .Callout {
    display: flex;
    justify-content: flex-end;
    flex-direction: column;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      135deg,
      ${({theme}) => theme.colors.primary[400]} 0%,
      ${({theme}) => theme.colors.primary[300]} 100%
    );
    border-radius: 6px;
    padding: 25px;
    text-decoration: none;
    outline: none;
    user-select: none;
    &:focus {
      box-shadow: 0 0 0 2px ${({theme}) => theme.colors.primary[300]};
    }
  }

  .CalloutHeading {
    color: white;
    font-size: 18px;
    font-weight: 500;
    line-height: 1.2;
    margin-top: 16px;
    margin-bottom: 7px;
  }

  .CalloutText {
    color: ${({theme}) => theme.colors.primary[100]};
    font-size: 14px;
    line-height: 1.3;
  }

  .ViewportPosition {
    position: absolute;
    display: flex;
    justify-content: center;
    width: 100%;
    top: 100%;
    left: 0;
    perspective: 2000px;
  }

  .CaretDown {
    position: relative;
    color: ${({theme}) => theme.colors.primary[400]};
    top: 1px;
    transition: transform 250ms ease;
  }
  [data-state="open"] > .CaretDown {
    transform: rotate(-180deg);
  }

  .Arrow {
    position: relative;
    top: 70%;
    background-color: white;
    width: 10px;
    height: 10px;
    transform: rotate(45deg);
    border-top-left-radius: 2px;
  }

  @keyframes enterFromRight {
    from {
      opacity: 0;
      transform: translateX(200px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes enterFromLeft {
    from {
      opacity: 0;
      transform: translateX(-200px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes exitToRight {
    from {
      opacity: 1;
      transform: translateX(0);
    }
    to {
      opacity: 0;
      transform: translateX(200px);
    }
  }

  @keyframes exitToLeft {
    from {
      opacity: 1;
      transform: translateX(0);
    }
    to {
      opacity: 0;
      transform: translateX(-200px);
    }
  }

  @keyframes scaleIn {
    from {
      opacity: 0;
      transform: rotateX(-30deg) scale(0.9);
    }
    to {
      opacity: 1;
      transform: rotateX(0deg) scale(1);
    }
  }

  @keyframes scaleOut {
    from {
      opacity: 1;
      transform: rotateX(0deg) scale(1);
    }
    to {
      opacity: 0;
      transform: rotateX(-10deg) scale(0.95);
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes fadeOut {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
`;

export const SideTabSt = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 200px;
  li {
    cursor: pointer;
    padding: 8px;
    color: ${({theme}) => theme.colors.neutral[600]};
    border-radius: 6px;
    font-size: 15px;
    a {
      width: 100%;
      height: 100%;
      display: block;
    }
    &.active {
      color: ${({theme}) => theme.colors.neutral[900]};
      font-weight: 600;
    }
    &:hover:not(.active) {
      color: ${({theme}) => theme.colors.neutral[900]};
    }
    &:hover {
      background-color: ${({theme}) => theme.colors.neutral[100]};
    }
  }
`;
