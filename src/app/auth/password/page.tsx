"use client";
import Button from "@/components/System/Button";
import Input from "@/components/System/Input";
import Typo from "@/components/System/Typo";
import React from "react";

export default function page() {
  return (
    <>
      <Typo.Heading level={2}>비밀번호 찾기</Typo.Heading>
      <Typo.Body mb={24} mt={4}>
        가입하신 이메일을 입력해주세요.
      </Typo.Body>

      <Input.Label title="이메일">
        <Input size="md" />
      </Input.Label>

      <div className="h-4" />

      <Typo.Desc color="secondary">비밀번호를 잊어버리셨나요?</Typo.Desc>
      <div className="h-8" />

      <Button size="md">다음</Button>
    </>
  );
}
