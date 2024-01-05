import {useNode} from "@craftjs/core";
import React, {useState} from "react";
import Typo from "@/components/System/Typo";
import Input from "@/components/System/Input";
import {DividerProps} from ".";

export default function DividerSettings() {
  const {
    $color,
    $marginBottom,
    $marginTop,
    $stroke,
    $width,
    actions: {setProp},
  } = useNode<DividerProps>((node) => node.data.props as DividerProps);
  const [sameY, setSameY] = useState($marginTop === $marginBottom);
  return (
    <div className="flex flex-col gap-8 items-start p-4 h-[calc(100vh-48px)] overflow-y-scroll">
      <div className="flex flex-col gap-2 w-full">
        <Typo.Body color="secondary" mb={2}>
          스타일
        </Typo.Body>
        <div className="flex flex-col gap-4 mb-6 mt-2">
          <Input.Label title="너비" size="sm" direction="horizontal">
            <Input.Slider
              block
              size="sm"
              min={0}
              step={10}
              max={100}
              value={[$width]}
              onChange={(v) => setProp((props: DividerProps) => (props.$width = v[0]))}
            />
          </Input.Label>
          <Input.Label title="두께" size="sm" direction="horizontal">
            <Input.Slider
              block
              size="sm"
              min={0}
              step={1}
              max={10}
              value={[$stroke]}
              onChange={(v) => setProp((props: DividerProps) => (props.$stroke = v[0]))}
            />
          </Input.Label>
          <Input.Label title="색상" size="sm" direction="horizontal">
            <Input.Color
              size="sm"
              value={$color || "#eee"}
              onChange={(value) => {
                setProp((props: DividerProps) => {
                  props.$color = value;
                });
              }}
            />
          </Input.Label>
        </div>

        <div className="flex flex-col gap-2 mb-6 mt-2">
          <Typo.Body color="secondary" mb={2}>
            상하단 여백
          </Typo.Body>
          <div className="flex-1">
            <Input.Label title="맞추기" size="sm" direction="horizontal">
              <div className="flex gap-1">
                <Input.Switch
                  size="xs"
                  checked={sameY}
                  onChange={(c) => {
                    setSameY(c);
                    if (c) {
                      setProp(
                        (props: DividerProps) => (props.$marginBottom = props.$marginTop)
                      );
                    }
                  }}
                />
              </div>
            </Input.Label>
          </div>
          {sameY ? (
            <div className="flex-1">
              <Input.Label title="Y축 여백" size="sm" direction="horizontal">
                <div className="flex gap-1">
                  <Input.Slider
                    size="sm"
                    block
                    min={0}
                    max={300}
                    step={2}
                    value={$marginTop ? [$marginTop] : [0]}
                    onChange={(v) => {
                      setProp((props: DividerProps) => (props.$marginTop = v[0]));
                      setProp((props: DividerProps) => (props.$marginBottom = v[0]));
                    }}
                  />
                </div>
              </Input.Label>
            </div>
          ) : (
            <>
              <div className="flex-1">
                <Input.Label title="위" size="sm" direction="horizontal">
                  <div className="flex pl-2.5">
                    <Input.Slider
                      size="sm"
                      block
                      min={0}
                      max={300}
                      step={2}
                      value={$marginTop ? [$marginTop] : [0]}
                      onChange={(v) => {
                        setProp((props: DividerProps) => (props.$marginTop = v[0]));
                      }}
                    />
                  </div>
                </Input.Label>
              </div>
              <div className="flex-1">
                <Input.Label title="아래" size="sm" direction="horizontal">
                  <div className="flex gap-1">
                    <Input.Slider
                      size="sm"
                      block
                      min={0}
                      max={300}
                      step={2}
                      value={$marginBottom ? [$marginBottom] : [0]}
                      onChange={(v) => {
                        setProp((props: DividerProps) => (props.$marginBottom = v[0]));
                      }}
                    />
                  </div>
                </Input.Label>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
