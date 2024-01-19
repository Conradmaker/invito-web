import React from "react";
import BA from "boring-avatars";

export default function Avatar({
  name,
  src,
  size = 36,
}: {
  name: string;
  size: number;
  src?: string;
}) {
  return (
    <BA
      size={size}
      name={name}
      variant="beam"
      colors={["#271FE0", "#4945FF", "#7B79FF", "#D9D8FF", "#F0F0FF"]}
    />
  );
}
