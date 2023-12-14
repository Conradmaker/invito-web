import React from "react";
import * as RSlider from "@radix-ui/react-slider";
import {SliderBox} from "./styles";

export type SliderProps = {
  size?: "sm" | "md" | "lg";
  shape?: "round" | "bar";
};
export default function Slider({size = "md", shape = "bar"}: SliderProps) {
  return (
    <SliderBox defaultValue={[50]} max={100} step={2} size={size} shape={shape}>
      <RSlider.Track className="rx-slider-track">
        <RSlider.Range className="rx-slider-range" />
      </RSlider.Track>
      <RSlider.Thumb className="rx-slider-thumb" aria-label="Volume" />
    </SliderBox>
  );
}
