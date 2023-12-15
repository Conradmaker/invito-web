import React from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import {RxCaretRight, RxCheck, RxDotFilled, RxHamburgerMenu} from "react-icons/rx";
import {DropdownContentContainer} from "./dropdown.style";

type DropdownProps = {
  children: React.ReactNode;
};
export default function Dropdown({children}: DropdownProps) {
  return (
    <div className="flex">
      <DropdownMenu.Root>
        <DropdownMenu.Trigger asChild>
          <div>{children}</div>
        </DropdownMenu.Trigger>

        <DropdownMenu.Portal>
          <DropdownContentContainer>
            <DropdownMenu.Content className="DropdownMenuContent" sideOffset={5}>
              <DropdownMenu.Item className="DropdownMenuItem">아이템1</DropdownMenu.Item>
              <DropdownMenu.Item className="DropdownMenuItem">아이템2</DropdownMenu.Item>
              <DropdownMenu.Item className="DropdownMenuItem" disabled>
                Disabled Item
              </DropdownMenu.Item>
              <DropdownMenu.Sub>
                <DropdownMenu.SubTrigger className="DropdownMenuSubTrigger">
                  더보기
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
                      <DropdownMenu.Item className="DropdownMenuItem">
                        서브메뉴1
                      </DropdownMenu.Item>
                      <DropdownMenu.Item className="DropdownMenuItem">
                        서브메뉴2
                      </DropdownMenu.Item>
                      <DropdownMenu.Item className="DropdownMenuItem">
                        서브메뉴3
                      </DropdownMenu.Item>
                      <DropdownMenu.Separator className="DropdownMenuSeparator" />
                      <DropdownMenu.Item className="DropdownMenuItem">
                        서브메뉴2-1
                      </DropdownMenu.Item>
                    </DropdownMenu.SubContent>
                  </DropdownContentContainer>
                </DropdownMenu.Portal>
              </DropdownMenu.Sub>

              <DropdownMenu.Separator className="DropdownMenuSeparator" />

              <DropdownMenu.CheckboxItem
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
              </DropdownMenu.CheckboxItem>

              <DropdownMenu.Separator className="DropdownMenuSeparator" />

              <DropdownMenu.Label className="DropdownMenuLabel">
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
              </DropdownMenu.RadioGroup>

              <DropdownMenu.Arrow className="DropdownMenuArrow" />
            </DropdownMenu.Content>
          </DropdownContentContainer>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
    </div>
  );
}
