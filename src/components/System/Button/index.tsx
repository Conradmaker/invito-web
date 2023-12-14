"use client";

import React from "react";
import {ButtonBox, IconButtonBox} from "./styles";
import Loading from "../Icon/Loading";
import {RxLayers} from "react-icons/rx";

export type ButtonProps = {
  children: React.ReactNode;
  loading?: boolean;
  type?: "primary" | "secondary" | "tertiary" | "ghost";
  size?: "sm" | "md" | "lg";
  block?: boolean;
  disabled?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
};
function Button({
  children,
  type = "primary",
  size = "sm",
  loading = false,
  block = false,
  disabled = false,
  leftIcon,
  rightIcon,
}: ButtonProps) {
  return (
    <ButtonBox styleType={type} block={block} size={size} disabled={disabled}>
      {loading ? <Loading color="alternate" size={16} /> : leftIcon ? leftIcon : <></>}
      {children}
      {rightIcon ? rightIcon : <></>}
    </ButtonBox>
  );
}

export type IconButtonProps = Omit<ButtonProps, "children" | "rightIcon" | "leftIcon">;
function IconButton({
  type = "primary",
  size = "sm",
  loading = false,
  block = false,
  disabled = false,
}: IconButtonProps) {
  return (
    <IconButtonBox styleType={type} block={block} size={size} disabled={disabled}>
      {loading ? <Loading color="alternate" size={16} /> : <RxLayers />}
    </IconButtonBox>
  );
}
Button.Icon = IconButton;
export default Button;
