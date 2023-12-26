import {useNode} from "@craftjs/core";
import React from "react";
import {ContainerProps} from ".";
import Input from "@/components/System/Input";
import {
  LuAlignCenterHorizontal,
  LuAlignCenterVertical,
  LuAlignEndHorizontal,
  LuAlignEndVertical,
  LuAlignHorizontalSpaceBetween,
  LuAlignStartHorizontal,
  LuAlignStartVertical,
  LuAlignVerticalSpaceBetween,
  LuGalleryHorizontalEnd,
  LuGalleryVerticalEnd,
  LuLink,
} from "react-icons/lu";
import Typo from "@/components/System/Typo";

export default function BoxSetting() {
  const {
    height,
    width,
    justify,
    align,
    direction,
    gap,
    paddingLeft,
    paddingBottom,
    paddingRight,
    paddingTop,
    marginLeft,
    marginBottom,
    marginRight,
    marginTop,
    background,
    click,
    actions: {setProp},
  } = useNode<ContainerProps>((node) => node.data.props as ContainerProps);
  return (
    <div className="flex flex-col gap-8 items-start p-4 h-[calc(100vh-48px)] overflow-y-scroll">
      <div className="flex flex-col gap-2">
        <Typo.Body color="secondary" mb={2}>
          레이아웃
        </Typo.Body>
        <div className="flex flex-col gap-4 mb-6 mt-2">
          <Input.Label title="방향" direction="horizontal" size="sm">
            <Input.Toggle.Group
              block
              size="sm"
              value={direction || "row"}
              onChange={(v) =>
                setProp((props: ContainerProps) => (props.direction = v as "row"))
              }
              data={[
                {icon: <LuGalleryVerticalEnd />, value: "column", text: "세로 방향"},
                {icon: <LuGalleryHorizontalEnd />, value: "row", text: "가로 방향"},
              ]}
            />
          </Input.Label>
          <Input.Label title="가로축 정렬" direction="horizontal" size="sm">
            <Input.Toggle.Group
              block
              size="xs"
              value={justify || "start"}
              onChange={(v) =>
                setProp((props: ContainerProps) => (props.justify = v as "start"))
              }
              data={[
                {icon: <LuAlignStartVertical />, value: "start"},
                {icon: <LuAlignCenterVertical />, value: "center"},
                {icon: <LuAlignEndVertical />, value: "end"},
                {icon: <LuAlignHorizontalSpaceBetween />, value: "space-between"},
              ]}
            />
          </Input.Label>
          <Input.Label title="세로축 정렬" direction="horizontal" size="sm">
            <Input.Toggle.Group
              block
              size="xs"
              value={align || "start"}
              onChange={(v) =>
                setProp((props: ContainerProps) => (props.align = v as "start"))
              }
              data={[
                {icon: <LuAlignStartHorizontal />, value: "start"},
                {icon: <LuAlignCenterHorizontal />, value: "center"},
                {icon: <LuAlignEndHorizontal />, value: "end"},
                {icon: <LuAlignVerticalSpaceBetween />, value: "space-between"},
              ]}
            />
          </Input.Label>
          <Input.Label title="간격" size="sm" direction="horizontal">
            <Input.Slider
              block
              size="sm"
              value={gap ? [gap] : [0]}
              onChange={(v) => setProp((props: ContainerProps) => (props.gap = v[0]))}
            />
          </Input.Label>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex-1">
            <Input.Label title="높이" size="sm" direction="horizontal">
              <div className="flex gap-1">
                <Input
                  className="w-full"
                  size="xs"
                  min={1}
                  value={height.value}
                  onChange={({target}) =>
                    setProp(
                      (props: ContainerProps) => (props.height.value = +target.value)
                    )
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
                    setProp((props: ContainerProps) => (props.height.unit = v as "%"))
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
                    setProp(
                      (props: ContainerProps) => (props.width.value = +target.value)
                    )
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
                    setProp((props: ContainerProps) => (props.width.unit = v as "%"))
                  }
                />
              </div>
            </Input.Label>
          </div>
        </div>

        <div className="flex border border-dashed rounded-lg bg-blue-50 items-center justify-center w-[88%] py-6 px-10 relative mb-4 mt-2">
          <span
            className="absolute top-1 left-2 text-gray-500 text-[10px]"
            color="secondary"
          >
            바깥 여백
          </span>
          <div className="h-full w-4 border-r-[1px] border-slate-300 rounded-sm flex justify-center items-center absolute -right-2">
            <span className="text-[10px] absolute -right-[34px] text-slate-500">{`${height.value}${height.unit}`}</span>
          </div>
          <div className="h-4 w-full border-b-[1px] border-slate-300 rounded-sm flex justify-center items-center absolute -bottom-3">
            <span className="text-[10px] absolute -bottom-4 text-slate-500">{`${width.value}${width.unit}`}</span>
          </div>
          <Input
            size="xs"
            bordered={false}
            className="absolute -top-[1px]"
            width={40}
            min={0}
            max={140}
            textAlign="center"
            value={marginTop}
            type="number"
            onChange={({target}) => {
              if (+target.value > 140) return;
              setProp(
                (props: ContainerProps) =>
                  (props.marginTop = Number(target.value.replace(/(^0+)/, "")))
              );
            }}
          />
          <Input
            size="xs"
            bordered={false}
            className="absolute -right-0.5"
            width={40}
            min={0}
            max={140}
            textAlign="center"
            value={marginRight}
            type="number"
            onChange={({target}) => {
              if (+target.value > 140) return;
              setProp(
                (props: ContainerProps) =>
                  (props.marginRight = Number(target.value.replace(/(^0+)/, "")))
              );
            }}
          />
          <Input
            size="xs"
            bordered={false}
            className="absolute -bottom-[1px]"
            width={40}
            min={0}
            max={140}
            textAlign="center"
            value={marginBottom}
            type="number"
            onChange={({target}) => {
              if (+target.value > 140) return;
              setProp(
                (props: ContainerProps) =>
                  (props.marginBottom = Number(target.value.replace(/(^0+)/, "")))
              );
            }}
          />
          <Input
            size="xs"
            bordered={false}
            className="absolute -left-0.5"
            width={40}
            min={0}
            max={140}
            textAlign="center"
            value={marginLeft}
            type="number"
            onChange={({target}) => {
              if (+target.value > 140) return;
              setProp(
                (props: ContainerProps) =>
                  (props.marginLeft = Number(target.value.replace(/(^0+)/, "")))
              );
            }}
          />
          <div className="flex border relative items-center justify-center rounded-lg bg-blue-50 border-blue-500 w-full py-7 px-9">
            <span className="absolute bottom-0.5 right-2 text-gray-500 text-[10px]">
              안쪽 여백
            </span>
            <Input
              size="xs"
              bordered={false}
              className="absolute top-0.5"
              width={40}
              min={0}
              max={140}
              textAlign="center"
              value={paddingTop}
              type="number"
              onChange={({target}) => {
                if (+target.value > 140) return;
                setProp(
                  (props: ContainerProps) =>
                    (props.paddingTop = Number(target.value.replace(/(^0+)/, "")))
                );
              }}
            />
            <Input
              size="xs"
              textAlign="center"
              bordered={false}
              className="absolute -right-0.5"
              width={40}
              min={0}
              max={140}
              value={paddingRight}
              type="number"
              onChange={({target}) => {
                if (+target.value > 140) return;
                setProp(
                  (props: ContainerProps) =>
                    (props.paddingRight = +target.value.replace(/(^0+)/, ""))
                );
              }}
            />
            <Input
              size="xs"
              textAlign="center"
              bordered={false}
              className="absolute bottom-0.5"
              width={40}
              min={0}
              max={140}
              value={paddingBottom}
              type="number"
              onChange={({target}) => {
                if (+target.value > 140) return;
                setProp(
                  (props: ContainerProps) =>
                    (props.paddingBottom = +target.value.replace(/(^0+)/, ""))
                );
              }}
            />
            <Input
              size="xs"
              textAlign="center"
              bordered={false}
              className="absolute -left-0.5"
              width={40}
              min={0}
              max={140}
              maxLength={3}
              value={paddingLeft}
              type="number"
              onChange={({target}) => {
                if (+target.value > 140) return;
                setProp(
                  (props: ContainerProps) =>
                    (props.paddingLeft = +target.value.replace(/(^0+)/, ""))
                );
              }}
            />
            <div className="flex rounded-lg bg-white w-full py-3 px-8" />
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col gap-4">
        <Typo.Body color="secondary">배경</Typo.Body>
        <Input.Label title="타입" size="sm" direction="horizontal">
          <Input.Select
            block
            placeholder="배경"
            size="sm"
            value={background.type || "transparent"}
            onChange={(value) => {
              setProp((props: ContainerProps) => {
                props.background = {
                  ...props.background,
                  type: value as "transparent" | "color" | "image",
                };
              });
            }}
            data={[
              {label: "투명", value: "transparent"},
              {label: "이미지", value: "image"},
              {label: "색상", value: "color"},
            ]}
          />
        </Input.Label>
        {background?.type === "color" && (
          <Input.Label title="색상" size="sm" direction="horizontal">
            <Input.Color
              size="sm"
              value={background.color || "#ffffff"}
              onChange={(value) => {
                setProp((props: ContainerProps) => {
                  props.background = {
                    ...props.background,
                    color: value,
                  };
                });
              }}
            />
          </Input.Label>
        )}

        {background?.type === "image" && (
          <>
            <Input.Image
              onChange={(url) =>
                setProp((props: ContainerProps) => {
                  props.background = {
                    ...props.background,
                    src: url,
                  };
                })
              }
            />
          </>
        )}
        {background.type === "image" && background?.src && (
          <Input.Label title="효과" size="sm" direction="horizontal">
            <div className="flex flex-row gap-2">
              <Input.Select
                block
                size="sm"
                value={background?.filter?.type || "none"}
                onChange={(value) => {
                  setProp((props: ContainerProps) => {
                    props.background = {
                      ...props.background,
                      filter: {
                        ...props.background.filter,
                        type: value as "none",
                        value: 60,
                      },
                    };
                  });
                }}
                data={[
                  {label: "없음", value: "none"},
                  {label: "세피아", value: "sepia"},
                  {label: "대비", value: "contrast"},
                  {label: "반전", value: "invert"},
                  {label: "흑백", value: "grayscale"},
                ]}
              />
              {background?.filter?.type !== "none" && (
                <Input.Select
                  size="sm"
                  value={
                    background?.filter?.value ? background?.filter?.value + "" : "60"
                  }
                  onChange={(value) => {
                    setProp((props: ContainerProps) => {
                      props.background = {
                        ...props.background,
                        filter: {...props.background.filter, value: +value},
                      };
                    });
                  }}
                  data={[
                    {label: "20%", value: "20"},
                    {label: "40%", value: "40"},
                    {label: "60%", value: "60"},
                    {label: "80%", value: "80"},
                    {label: "100%", value: "100"},
                  ]}
                />
              )}
            </div>
          </Input.Label>
        )}
        {background.type === "image" && background?.src && (
          <Input.Label direction="horizontal" title="블러" size="sm">
            <Input.Slider
              size="sm"
              min={0}
              max={20}
              step={1}
              block
              value={background?.filter?.blur ? [background?.filter?.blur] : [0]}
              onChange={(value) => {
                setProp((props: ContainerProps) => {
                  props.background = {
                    ...props.background,
                    filter: {...props.background.filter, blur: value[0]},
                  };
                });
              }}
            />
          </Input.Label>
        )}
      </div>

      <div className="w-full flex flex-col gap-4">
        <Typo.Body color="secondary">클릭 이벤트</Typo.Body>
        <Input.Label title="타입" size="sm" direction="horizontal">
          <Input.Select
            block
            size="sm"
            value={click.type}
            onChange={(value) => {
              setProp((props: ContainerProps) => {
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
                setProp((props: ContainerProps) => {
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
