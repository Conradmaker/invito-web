"use client";
import Button from "@/components/System/Button";
import Table from "@/components/System/Table";
import Typo from "@/components/System/Typo";
import appDayjs from "@/libs/appDayjs";
import dayjs from "dayjs";
import React from "react";

export default function page() {
  return (
    <Table
      data={[
        {email: "yhg0337@gmail.com", nickname: "유원근", state: 1},
        {email: "yhg0337@gmail.com", nickname: "유원근", state: 1},
      ]}
      columns={[
        {
          key: "email",
          title: "멤버",
          render: (a, b) => {
            return (
              <p className="flex flex-col">
                {b.nickname}
                <span>{a}</span>
              </p>
            );
          },
        },
        {
          key: "nickname",
          title: "초대일",
          width: 190,
          render: (a, b) => {
            return (
              <Typo.Desc color="secondary" align="center">
                (30분 전)
                <br />
                {appDayjs(new Date()).format("YYYY-MM-DD a HH:mm")}
              </Typo.Desc>
            );
          },
        },
        {
          key: "aaa",
          title: " ",
          width: 100,
          render: () => {
            return (
              <div className="flex gap-2">
                <Button type="tertiary">재전송</Button>
                <Button type="tertiary">취소</Button>
              </div>
            );
          },
        },
      ]}
    ></Table>
  );
}
