import {useNode} from "@craftjs/core";
import React from "react";
import {ImageProps} from ".";
import Typo from "@/components/System/Typo";
import Input from "@/components/System/Input";
import {
  LuArrowDown,
  LuArrowDownLeft,
  LuArrowDownRight,
  LuCircle,
  LuEye,
  LuEyeOff,
  LuLink,
  LuSquare,
} from "react-icons/lu";

export default function ImageSettings() {
  const {
    height,
    width,
    radius,
    fit,
    caption,
    src,
    click,
    actions: {setProp},
  } = useNode<ImageProps>((node) => node.data.props as ImageProps);
  return (
    <div className="flex flex-col gap-8 items-start p-4 h-[calc(100vh-48px)] overflow-y-scroll">
      <div className="flex flex-col gap-2 w-full">
        <Typo.Body color="secondary" mb={2}>
          스타일
        </Typo.Body>
        <div className="flex flex-col gap-4 mb-6 mt-2">
          <Input.Label title="모양" direction="horizontal" size="sm">
            <Input.Toggle.Group
              block
              size="sm"
              value={radius === 9999 ? "round" : "square"}
              onChange={(v) =>
                setProp((props: ImageProps) => (props.radius = v === "round" ? 9999 : 0))
              }
              data={[
                {icon: <LuCircle />, value: "round", text: "원형"},
                {icon: <LuSquare />, value: "square", text: "사각형"},
              ]}
            />
          </Input.Label>
          {radius !== 9999 && (
            <Input.Label title="모서리" size="sm" direction="horizontal">
              <Input.Slider
                block
                size="sm"
                min={0}
                step={1}
                max={50}
                value={radius ? [radius] : [0]}
                onChange={(v) => setProp((props: ImageProps) => (props.radius = v[0]))}
              />
            </Input.Label>
          )}
        </div>

        <div className="flex flex-col gap-2 mb-6 mt-2">
          <Typo.Body color="secondary" mb={2}>
            데이터
          </Typo.Body>
          <Input.Image
            bucket="imgBlock"
            onChange={(url) => setProp((props: ImageProps) => (props.src = url))}
          />
          <Input.Label title="캡션" size="sm" direction="horizontal">
            <Input
              size="xs"
              value={caption.text}
              onChange={(e) =>
                setProp((props: ImageProps) => (props.caption.text = e.target.value))
              }
            />
          </Input.Label>
          <Input.Label title="캡션표시" size="sm" direction="horizontal">
            <Input.Toggle.Group
              block
              size="sm"
              data={[
                {icon: <LuEye />, text: "표시", value: "visible"},
                {icon: <LuEyeOff />, text: "숨기기", value: "hidden"},
              ]}
              value={caption.visible ? "visible" : "hidden"}
              onChange={(e) =>
                setProp((props: ImageProps) => {
                  if (e === "visible") {
                    props.caption.visible = true;
                    props.caption.placement = "bottom-right";
                  } else {
                    props.caption.visible = false;
                    props.caption.placement = null;
                  }
                })
              }
            />
          </Input.Label>
          {caption.visible && (
            <Input.Label title="캡션위치" size="sm" direction="horizontal">
              <Input.Toggle.Group
                block
                size="xs"
                data={[
                  {icon: <LuArrowDownLeft />, text: "왼쪽", value: "bottom-left"},
                  {icon: <LuArrowDown />, text: "중앙", value: "bottom-center"},
                  {icon: <LuArrowDownRight />, text: "오른쪽", value: "bottom-right"},
                ]}
                value={caption.placement || "bottom-right"}
                onChange={(e) =>
                  setProp((props: ImageProps) => {
                    props.caption.placement = e as ImageProps["caption"]["placement"];
                  })
                }
              />
            </Input.Label>
          )}
        </div>

        <div className="flex flex-col gap-2 mb-6 mt-2">
          <Typo.Body color="secondary" mb={2}>
            크기
          </Typo.Body>
          <div className="flex-1">
            <Input.Label title="높이" size="sm" direction="horizontal">
              <div className="flex gap-1">
                <Input
                  className="w-full"
                  size="xs"
                  min={1}
                  value={height.value}
                  onChange={({target}) =>
                    setProp((props: ImageProps) => (props.height.value = +target.value))
                  }
                />
                <Input.Select
                  className="w-24"
                  size="xs"
                  value={height.unit}
                  data={[
                    {label: "px", value: "px"},
                    {label: "%", value: "%"},
                  ]}
                  onChange={(v) =>
                    setProp((props: ImageProps) => (props.height.unit = v as "%"))
                  }
                />
              </div>
            </Input.Label>
          </div>
          <div className="flex-1">
            <Input.Label title="너비" size="sm" direction="horizontal">
              <div className="flex gap-1">
                <Input
                  className="w-full"
                  size="xs"
                  min={1}
                  value={width.value}
                  onChange={({target}) =>
                    setProp((props: ImageProps) => (props.width.value = +target.value))
                  }
                />
                <Input.Select
                  className="w-24"
                  size="xs"
                  value={width.unit}
                  data={[
                    {label: "px", value: "px"},
                    {label: "%", value: "%"},
                  ]}
                  onChange={(v) =>
                    setProp((props: ImageProps) => (props.width.unit = v as "%"))
                  }
                />
              </div>
            </Input.Label>
          </div>
          <div className="flex-1">
            <Input.Label title="맞춤" size="sm" direction="horizontal">
              <Input.Select
                className="w-24"
                size="xs"
                value={fit}
                data={[
                  {label: "자르기", value: "cover"},
                  {label: "비율유지", value: "contain"},
                  {label: "채우기", value: "stretch"},
                ]}
                onChange={(v) =>
                  setProp((props: ImageProps) => (props.fit = v as "cover"))
                }
              />
            </Input.Label>
          </div>
          diD
        </div>

        <div className="w-full flex flex-col gap-2 mb-6 mt-2">
          <Typo.Body color="secondary">클릭 이벤트</Typo.Body>
          <Input.Label title="타입" size="sm" direction="horizontal">
            <Input.Select
              block
              size="sm"
              value={click.type}
              onChange={(value) => {
                setProp((props: ImageProps) => {
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
                  setProp((props: ImageProps) => {
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
    </div>
  );
}
