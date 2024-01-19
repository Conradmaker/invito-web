import React from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import {RxCaretRight, RxDotFilled} from "react-icons/rx";
import {DropdownContentContainer} from "./dropdown.style";

type DropdownMenuItem = {
  type?: "item" | "checkbox" | "radio" | "label" | "separator";
  label?: string;
  onClick?: () => void;
  disabled?: boolean;
  children?: DropdownMenuItem[];
  value?: string;
  options?: {label: string; value: string}[];
  onChange?: (v: string) => void;
};
type DropdownProps = {
  children: React.ReactNode;
  data: DropdownMenuItem[];
};
export default function Dropdown({children, data}: DropdownProps) {
  return (
    <div className="flex">
      <DropdownMenu.Root>
        <DropdownMenu.Trigger asChild>
          <div>{children}</div>
        </DropdownMenu.Trigger>

        <DropdownMenu.Portal>
          <DropdownContentContainer>
            <DropdownMenu.Content className="DropdownMenuContent" sideOffset={4}>
              {data?.map((item, idx) => {
                if (item.type === "separator")
                  return (
                    <DropdownMenu.Separator key={idx} className="DropdownMenuSeparator" />
                  );
                else if (item.children)
                  return (
                    <DropdownMenu.Sub key={idx}>
                      <DropdownMenu.SubTrigger className="DropdownMenuSubTrigger">
                        {item.label}
                        <div className="RightSlot">
                          <RxCaretRight />
                        </div>
                      </DropdownMenu.SubTrigger>
                      <DropdownMenu.Portal>
                        <DropdownContentContainer>
                          <DropdownMenu.SubContent
                            className="DropdownMenuSubContent"
                            sideOffset={4}
                            alignOffset={-4}
                          >
                            {item.children?.map((subItem, subIdx) => {
                              if (subItem.type === "separator")
                                return (
                                  <DropdownMenu.Separator
                                    key={"s-" + subIdx}
                                    className="DropdownMenuSeparator"
                                  />
                                );
                              else
                                return (
                                  <DropdownMenu.Item
                                    key={"s-" + subIdx}
                                    className="DropdownMenuItem"
                                    disabled={subItem.disabled}
                                  >
                                    {subItem.label}
                                  </DropdownMenu.Item>
                                );
                            })}
                          </DropdownMenu.SubContent>
                        </DropdownContentContainer>
                      </DropdownMenu.Portal>
                    </DropdownMenu.Sub>
                  );
                else if (item.options)
                  return (
                    <React.Fragment key={idx}>
                      <DropdownMenu.Label className="DropdownMenuLabel">
                        {item.label}
                      </DropdownMenu.Label>
                      <DropdownMenu.RadioGroup
                        value={item.value}
                        onValueChange={item.onChange}
                      >
                        {item.options.map((option) => {
                          return (
                            <DropdownMenu.RadioItem
                              key={idx + option.value}
                              className="DropdownMenuRadioItem"
                              value={option.value}
                            >
                              <DropdownMenu.ItemIndicator className="DropdownMenuItemIndicator">
                                <RxDotFilled />
                              </DropdownMenu.ItemIndicator>
                              {option.label}
                            </DropdownMenu.RadioItem>
                          );
                        })}
                      </DropdownMenu.RadioGroup>
                    </React.Fragment>
                  );
                else
                  return (
                    <DropdownMenu.Item
                      onClick={item.onClick}
                      key={idx}
                      className="DropdownMenuItem"
                      disabled={item.disabled}
                    >
                      {item.label}
                    </DropdownMenu.Item>
                  );
              })}

              {/* <DropdownMenu.CheckboxItem
                className="DropdownMenuCheckboxItem"
                checked={true}
                onCheckedChange={() => alert("checked")}
              >
                <DropdownMenu.ItemIndicator className="DropdownMenuItemIndicator">
                  <RxCheck />
                </DropdownMenu.ItemIndicator>
                체크박스1
              </DropdownMenu.CheckboxItem>
              <DropdownMenu.CheckboxItem
                className="DropdownMenuCheckboxItem"
                checked={true}
                onCheckedChange={() => alert("checked")}
              >
                <DropdownMenu.ItemIndicator className="DropdownMenuItemIndicator">
                  <RxCheck />
                </DropdownMenu.ItemIndicator>
                체크박스2
              </DropdownMenu.CheckboxItem> */}

              {/* <DropdownMenu.Label className="DropdownMenuLabel">
                라디오그룹
              </DropdownMenu.Label>
              <DropdownMenu.RadioGroup value={"pedro"} onValueChange={(v) => alert(v)}>
                <DropdownMenu.RadioItem className="DropdownMenuRadioItem" value="pedro">
                  <DropdownMenu.ItemIndicator className="DropdownMenuItemIndicator">
                    <RxDotFilled />
                  </DropdownMenu.ItemIndicator>
                  라디오1
                </DropdownMenu.RadioItem>
                <DropdownMenu.RadioItem className="DropdownMenuRadioItem" value="colm">
                  <DropdownMenu.ItemIndicator className="DropdownMenuItemIndicator">
                    <RxDotFilled />
                  </DropdownMenu.ItemIndicator>
                  라디오2
                </DropdownMenu.RadioItem>
              </DropdownMenu.RadioGroup> */}

              <DropdownMenu.Arrow className="DropdownMenuArrow" />
            </DropdownMenu.Content>
          </DropdownContentContainer>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
    </div>
  );
}
