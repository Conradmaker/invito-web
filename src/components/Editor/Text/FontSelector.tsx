import React, {useState} from "react";
import * as RSelect from "@radix-ui/react-select";
import {RxArrowDown, RxArrowUp, RxCaretDown, RxDotFilled} from "react-icons/rx";
import {RSelectSt, SelectContentSt} from "@/components/System/Input/styles";
export const fontWeightVars = [
  {label: "Thin", value: "100"},
  {label: "Extra Light", value: "200"},
  {label: "Light", value: "300"},
  {label: "Normal", value: "400"},
  {label: "Medium", value: "500"},
  {label: "Semi Bold", value: "600"},
  {label: "Bold", value: "700"},
  {label: "Extra Bold", value: "800"},
  {label: "Black", value: "900"},
  {label: "Extra Black", value: "950"},
];
export const fontVars = [
  {
    label: "Wanted Sans",
    value: "Wanted Sans Variable",
    weights: [400, 500, 600, 700, 800, 900, 950],
  },
  {
    label: "본고딕(Noto Sans)",
    value: "Noto Sans KR",
    weights: [400, 500, 600, 700, 800, 900, 950],
  },
  {label: "싱글데이", value: "Single Day", weights: [400]},
  {
    label: "나눔고딕",
    value: "Nanum Gothic",
    weights: [400, 700, 800],
  },
  {label: "리디바탕", value: "RIDIBatang", weights: [400]},
  {label: "나눔스퀘어", value: "NanumSquare", weights: [400]},
  {label: "태백은하수체", value: "TAEBAEKmilkyway", weights: [400]},
  {label: "롯데리아 촵땡겨체", value: "LOTTERIACHAB", weights: [400]},
  {label: "동글", value: "Dongle", weights: [300, 400, 700]},
];
export type SelectProps = {
  size?: "sm" | "md" | "lg" | "xs";
  disabled?: boolean;
  placeholder?: string;
  error?: string;
  info?: string;
  block?: boolean;
  value?: string;
  onChange?: (value: string) => void;
  prefix?: React.ReactNode;
  className?: string;
};
export default function FontSelector({
  size = "sm",
  disabled = false,
  placeholder,
  value,
  onChange,
  block = false,
  className,
}: SelectProps) {
  const [focused, setFocused] = useState(false);
  return (
    <>
      <RSelectSt
        className={className}
        $block={block}
        $focused={focused}
        $error={false}
        size={size}
      >
        <RSelect.Root
          onOpenChange={(open) => setFocused(open)}
          value={value}
          onValueChange={onChange}
        >
          <RSelect.Trigger className="select-trigger" disabled={disabled}>
            <RSelect.Value placeholder={placeholder} />
            <RSelect.Icon className="select-icon">
              <RxCaretDown />
            </RSelect.Icon>
          </RSelect.Trigger>
          <RSelect.Portal>
            <SelectContentSt>
              <RSelect.ScrollUpButton className="select-scroll-button">
                <RxArrowUp />
              </RSelect.ScrollUpButton>
              <RSelect.Viewport className="select-viewport">
                {fontVars?.map((d) => {
                  return (
                    <RSelect.Item value={d.value} className="select-item" key={d.value}>
                      <RSelect.ItemText>
                        <span style={{fontFamily: d.value}}>{d.label}</span>
                      </RSelect.ItemText>
                      <RSelect.ItemIndicator className="select-item-indicator">
                        <RxDotFilled />
                      </RSelect.ItemIndicator>
                    </RSelect.Item>
                  );
                })}
              </RSelect.Viewport>
              <RSelect.ScrollDownButton className="select-scroll-button">
                <RxArrowDown />
              </RSelect.ScrollDownButton>
            </SelectContentSt>
          </RSelect.Portal>
        </RSelect.Root>
      </RSelectSt>
    </>
  );
}
