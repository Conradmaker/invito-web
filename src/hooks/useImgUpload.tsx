import axios from "axios";
import {v4} from "uuid";
import dayjs from "dayjs";

export default function useImgUpload({bucket}: {bucket: string}) {
  const upload = async (file: File) => {
    const ext = file.name.split(".").pop();
    const {data} = await axios.put(
      `https://api-image.nhncloudservice.com/image/v2.0/appkeys/${process.env.NEXT_PUBLIC_NHN_APP_KEY}/images`,
      await file.arrayBuffer(),
      {
        params: {
          overwrite: true,
          path: `/${bucket}/${dayjs(new Date()).format("YYYY-MM")}/${v4()}.${
            ext || "png"
          }`,
        },
        headers: {
          Authorization: process.env.NEXT_PUBLIC_NHN_IMAGE_KEY,
          "Content-Type": "application/octet-stream",
        },
      }
    );
    if (data.file.url) return data.file.url as string;
    else throw new Error("이미지 업로드에 실패했습니다.");
  };
  return {upload};
}
