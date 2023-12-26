import React, {useState} from "react";
import * as RSelect from "@radix-ui/react-select";
import Typo from "../Typo";
import {RxArrowDown, RxArrowUp, RxCaretDown, RxCheck, RxDotFilled} from "react-icons/rx";
import {RSelectSt, SelectContentSt} from "./styles";

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
  data:
    | {
        label: string;
        value: string;
        children?: {label: string; value: string}[];
      }[];
  className?: string;
};
export default function Select({
  size = "sm",
  disabled = false,
  placeholder,
  error,
  info,
  prefix,
  data,
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
              <RSelect.ScrollUpButton className="select-scroll-button">
                <RxArrowUp />
              </RSelect.ScrollUpButton>
              <RSelect.Viewport className="select-viewport">
                {data?.map((d, idx) => {
                  if (d.children) {
                    return (
                      <React.Fragment key={d.value}>
                        {idx !== 0 && <RSelect.Separator className="select-separator" />}
                        <RSelect.Group>
                          <RSelect.Label className="select-label">
                            {d.label}
                          </RSelect.Label>
                          {d.children.map((c) => (
                            <RSelect.Item value="1" className="select-item" key={c.value}>
                              <RSelect.ItemText>{c.label}</RSelect.ItemText>
                              <RSelect.ItemIndicator className="select-item-indicator">
                                <RxDotFilled />
                              </RSelect.ItemIndicator>
                            </RSelect.Item>
                          ))}
                        </RSelect.Group>
                      </React.Fragment>
                    );
                  } else {
                    return (
                      <RSelect.Item value={d.value} className="select-item" key={d.value}>
                        <RSelect.ItemText>{d.label}</RSelect.ItemText>
                        <RSelect.ItemIndicator className="select-item-indicator">
                          <RxDotFilled />
                        </RSelect.ItemIndicator>
                      </RSelect.Item>
                    );
                  }
                })}
              </RSelect.Viewport>
              <RSelect.ScrollDownButton className="select-scroll-button">
                <RxArrowDown />
              </RSelect.ScrollDownButton>
            </SelectContentSt>
          </RSelect.Portal>
        </RSelect.Root>
      </RSelectSt>
      {/* </div> */}
      {error ? (
        <Typo.Body color="danger">&nbsp;{error}</Typo.Body>
      ) : info ? (
        <Typo.Body color="secondary">&nbsp;{info}</Typo.Body>
      ) : null}
    </>
  );
}
