import React from "react";
import * as RSlider from "@radix-ui/react-slider";
import {SliderBox} from "./styles";
import Pop from "../Pop";

export type SliderProps = {
  size?: "sm" | "md" | "lg";
  step?: number;
  min?: number;
  max?: number;
  shape?: "round" | "bar";
  block?: boolean;
  value?: number[];
  onChange?: (value: number[]) => void;
};
export default function Slider({
  size = "md",
  shape = "bar",
  block = false,
  value,
  onChange,
  step = 2,
  min = 0,
  max = 100,
}: SliderProps) {
  return (
    <SliderBox
      block={block}
      defaultValue={[50]}
      max={max}
      min={min}
      step={step}
      size={size}
      shape={shape}
      value={value ? value : [0]}
      onValueChange={onChange}
    >
      <RSlider.Track className="rx-slider-track">
        <RSlider.Range className="rx-slider-range" />
      </RSlider.Track>
      <RSlider.Thumb className="rx-slider-thumb" aria-label="Volume">
        {value && value?.length > 0
          ? value?.map((v, i) => (
              <div key={i} className="rx-slider-value">
                {v}
              </div>
            ))
          : null}
      </RSlider.Thumb>
    </SliderBox>
  );
}
