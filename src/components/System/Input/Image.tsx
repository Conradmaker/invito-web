/* eslint-disable @next/next/no-img-element */
import React, {useRef, useState} from "react";
import Button from "../Button";
import useImgUpload from "@/hooks/useImgUpload";
import {ImgInputBox} from "./styles";

type ImageProps = {
  multiple?: boolean;
  preview?: boolean;
  onChange?: (url: string) => void;
};
export default function Image({multiple = false, preview = true, onChange}: ImageProps) {
  const {upload} = useImgUpload();
  const [loading, setLoading] = useState(false);
  const ref = useRef<HTMLInputElement>(null);
  const [previews, setPreviews] = useState("");
  return (
    <>
      <input
        type="file"
        hidden
        ref={ref}
        multiple={multiple}
        onChange={async (e) => {
          setLoading(true);
          console.log(e.target.files);
          if (!e.target.files) return;
          const url = await upload(e.target.files?.[0]);
          onChange && onChange(url);
          setLoading(false);
          if (preview) {
            const reader = new FileReader();

            reader.onload = (e) => {
              const b64url = e.target?.result?.toString();
              setPreviews(b64url || "");
              const b64 = b64url?.split(",")[1];
            };
            reader.readAsDataURL(e.target.files?.[0]);
          }
        }}
      />
      <ImgInputBox>
        {preview && previews && (
          <div className="preview">
            <img src={previews} draggable={false} alt="" />
          </div>
        )}
        <div className="btn-box">
          <Button
            loading={loading}
            block
            type={previews ? "secondary" : "primary"}
            onClick={() => ref.current?.click()}
          >
            {previews ? "수정" : "업로드"}
          </Button>
          {previews && (
            <Button block type="tertiary" onClick={() => ref.current?.click()}>
              제거
            </Button>
          )}
        </div>
      </ImgInputBox>
    </>
  );
}
