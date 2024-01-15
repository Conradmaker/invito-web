"use client";
import Button from "@/components/System/Button";
import Input from "@/components/System/Input";
import Typo from "@/components/System/Typo";
import useLogin from "@/hooks/Form/useLogin";
import Link from "next/link";
import {useRouter} from "next/navigation";
import React from "react";
import {FaGoogle} from "react-icons/fa";
export default function Page() {
  const loginForm = useLogin();
  const {replace} = useRouter();
  const login = async () => {
    await loginForm.onLogin().then(() => {
      replace("/dashboard");
    });
  };
  return (
    <>
      <Typo.Heading level={2}>로그인</Typo.Heading>
      <Typo.Body mb={24} mt={4}>
        아직 계정이 없으신가요? <Link href="/auth/signup">회원가입</Link>
      </Typo.Body>

      <Input.Label title="이메일">
        <Input size="md" value={loginForm.email} onChange={loginForm.onChangeEmail} />
      </Input.Label>

      <div className="h-4" />
      <Input.Label title="비밀번호">
        <Input
          size="md"
          value={loginForm.password}
          onChange={loginForm.onChangePassword}
        />
      </Input.Label>

      <div className="h-4" />
      <Link href="/auth/password">
        <Typo.Desc color="secondary">비밀번호를 잊어버리셨나요?</Typo.Desc>
      </Link>
      <div className="h-8" />

      <Button size="md" loading={loginForm.loading} onClick={login}>
        로그인
      </Button>
      <div className="h-[1px] w-full bg-slate-200 my-5 flex items-center justify-center relative">
        <span className="absolute text-xs bg-white px-2 text-slate-400">OR</span>
      </div>
      <Button type="tertiary" size="md" leftIcon={<FaGoogle />}>
        구글 로그인
      </Button>
    </>
  );
}
