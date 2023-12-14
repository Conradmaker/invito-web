import React, {useState} from "react";
import * as RSelect from "@radix-ui/react-select";
import Typo from "../Typo";
import {RxArrowDown, RxArrowUp, RxCaretDown, RxCheck, RxDotFilled} from "react-icons/rx";
import {RSelectSt, SelectContentSt} from "./styles";

export type SelectProps = {
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  placeholder?: string;
  error?: string;
  info?: string;
  prefix?: React.ReactNode;
};
export default function Select({
  size = "sm",
  disabled = false,
  placeholder,
  error,
  info,
  prefix,
}: SelectProps) {
  const [focused, setFocused] = useState(false);
  return (
    <div>
      <RSelectSt $focused={focused} $error={false} size={size}>
        <RSelect.Root onOpenChange={(open) => setFocused(open)}>
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
                <RSelect.Group>
                  <RSelect.Label className="select-label">Vegetables</RSelect.Label>
                  <RSelect.Item value="1" className="select-item">
                    <RSelect.ItemText>test1</RSelect.ItemText>
                    <RSelect.ItemIndicator className="select-item-indicator">
                      <RxDotFilled />
                    </RSelect.ItemIndicator>
                  </RSelect.Item>
                </RSelect.Group>

                <RSelect.Separator className="select-separator" />
                <RSelect.Group>
                  <RSelect.Label className="select-label">Group2</RSelect.Label>
                  <RSelect.Item value="2" className="select-item">
                    <RSelect.ItemText>test2</RSelect.ItemText>
                    <RSelect.ItemIndicator className="select-item-indicator">
                      <RxDotFilled />
                    </RSelect.ItemIndicator>
                  </RSelect.Item>
                  <RSelect.Item value="3" className="select-item">
                    <RSelect.ItemText>test3</RSelect.ItemText>
                    <RSelect.ItemIndicator className="select-item-indicator">
                      <RxDotFilled />
                    </RSelect.ItemIndicator>
                  </RSelect.Item>
                  <RSelect.Item value="4" className="select-item" disabled>
                    <RSelect.ItemText>test4</RSelect.ItemText>
                    <RSelect.ItemIndicator className="select-item-indicator">
                      <RxDotFilled />
                    </RSelect.ItemIndicator>
                  </RSelect.Item>
                </RSelect.Group>
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
    </div>
  );
}
