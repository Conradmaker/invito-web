"use client";

import React from "react";
import {ButtonBox, IconButtonBox} from "./styles";
import Loading from "../Icon/Loading";
import {RxLayers} from "react-icons/rx";

export type ButtonProps = {
  children: React.ReactNode;
  loading?: boolean;
  type?: "primary" | "secondary" | "tertiary" | "ghost";
  size?: "xs" | "sm" | "md" | "lg";
  block?: boolean;
  disabled?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  onClick?: () => void;
  className?: string;
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
  className,
  onClick,
}: ButtonProps) {
  const onPress = () => {
    if (!disabled && onClick) onClick();
  };
  return (
    <ButtonBox
      onClick={onPress}
      className={className}
      $styleType={type}
      $block={block}
      size={size}
      disabled={disabled}
    >
      {loading ? <Loading color="alternate" size={16} /> : leftIcon ? leftIcon : <></>}
      {children}
      {rightIcon ? rightIcon : <></>}
    </ButtonBox>
  );
}

export type IconButtonProps = Omit<ButtonProps, "rightIcon" | "leftIcon">;
function IconButton({
  type = "primary",
  size = "sm",
  loading = false,
  block = false,
  disabled = false,
  className,
  children,
  onClick,
}: IconButtonProps) {
  const onPress = () => {
    if (!disabled && onClick) onClick();
  };
  return (
    <IconButtonBox
      onClick={onPress}
      className={className}
      $styleType={type}
      $block={block}
      size={size}
      disabled={disabled}
    >
      {loading ? <Loading color="alternate" size={16} /> : children}
    </IconButtonBox>
  );
}
Button.Icon = IconButton;
export default Button;
