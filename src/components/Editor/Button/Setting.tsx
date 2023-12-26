import {useNode} from "@craftjs/core";
import React from "react";
import {ButtonProps} from ".";
import Typo from "@/components/System/Typo";
import Input from "@/components/System/Input";
import {LuCircle, LuLink, LuSquare} from "react-icons/lu";

export default function ButtonSetting() {
  const {
    text,
    click,
    size,
    color,
    block,
    shape,
    actions: {setProp},
  } = useNode<ButtonProps>((node) => node.data.props as ButtonProps);
  console.log(block);
  return (
    <div className="flex flex-col gap-8 items-start p-4 h-[calc(100vh-48px)] overflow-y-scroll">
      <div className="flex flex-col gap-2 w-full">
        <Typo.Body color="secondary" mb={2}>
          내용
        </Typo.Body>
        <Input.Label title="텍스트" size="sm">
          <Input
            block
            value={text}
            onChange={(e) =>
              setProp((props: ButtonProps) => {
                props.text = e.target.value;
              })
            }
          />
        </Input.Label>
        {/* <Input.Label title="아이콘" size="sm">
          <Input
            block
            value={text}
            onChange={(e) =>
              setProp((props: ButtonProps) => {
                props.text = e.target.value;
              })
            }
          />
        </Input.Label> */}
      </div>

      <div className="flex flex-col gap-4 w-full">
        <Typo.Body color="secondary" mb={2}>
          스타일
        </Typo.Body>
        <Input.Label title="모서리" size="sm" direction="horizontal">
          <Input.Toggle.Group
            block
            size="sm"
            value={shape}
            onChange={(value) => {
              setProp((props: ButtonProps) => {
                props.shape = value as "round" | "square";
              });
            }}
            data={[
              {icon: <LuCircle />, text: "라운드", value: "round"},
              {icon: <LuSquare />, text: "스퀘어", value: "square"},
            ]}
          />
        </Input.Label>
        <Input.Label title="크기" direction="horizontal" size="sm">
          <Input.Select
            value={size}
            onChange={(value) =>
              setProp((props: ButtonProps) => {
                props.size = value as "xs" | "sm" | "md" | "lg";
              })
            }
            block
            data={[
              {label: "매우 작은 사이즈", value: "xs"},
              {label: "작은 사이즈", value: "sm"},
              {label: "보통 사이즈", value: "md"},
              {label: "큰 사이즈", value: "lg"},
            ]}
            size="sm"
          />
        </Input.Label>
        <Input.Label title="전체 너비" direction="horizontal" size="sm">
          <Input.Switch
            size="sm"
            checked={block}
            onChange={(c) => setProp((prop: ButtonProps) => (prop.block = c))}
          />
        </Input.Label>
        <Input.Label title="배경색" size="sm" direction="horizontal">
          <Input.Color
            size="sm"
            value={color.background || "#4945FF"}
            onChange={(value) => {
              setProp((props: ButtonProps) => {
                props.color = {
                  ...props.color,
                  background: value,
                };
              });
            }}
          />
        </Input.Label>
        <Input.Label title="글씨색" size="sm" direction="horizontal">
          <Input.Color
            size="sm"
            value={color.text || "#ffffff"}
            onChange={(value) => {
              setProp((props: ButtonProps) => {
                props.color = {
                  ...props.color,
                  text: value,
                };
              });
            }}
          />
        </Input.Label>
      </div>

      <div className="w-full flex flex-col gap-4">
        <Typo.Body color="secondary">클릭 이벤트</Typo.Body>
        <Input.Label title="타입" size="sm" direction="horizontal">
          <Input.Select
            block
            size="sm"
            value={click.type}
            onChange={(value) => {
              setProp((props: ButtonProps) => {
                props.click = {
                  ...props.click,
                  type: value as "none" | "link",
                };
              });
            }}
            data={[
              {label: "없음", value: "none"},
              {label: "링크", value: "link"},
            ]}
          />
        </Input.Label>
        {click.type === "link" && (
          <Input.Label title="링크" size="sm" direction="horizontal">
            <Input
              size="sm"
              onChange={(e) => {
                setProp((props: ButtonProps) => {
                  props.click = {
                    ...props.click,
                    link: e.target.value.trim(),
                  };
                });
              }}
              value={click.link}
              placeholder="https://"
              prefix={<LuLink />}
            />
          </Input.Label>
        )}
      </div>
    </div>
  );
}
