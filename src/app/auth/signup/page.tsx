"use client";
import Button from "@/components/System/Button";
import Input from "@/components/System/Input";
import Typo from "@/components/System/Typo";
import useSignup from "@/hooks/Form/useSignup";
import Link from "next/link";
import {useRouter} from "next/navigation";
import React, {useState} from "react";
import {FaGoogle} from "react-icons/fa";

export default function Signup() {
  const signupForm = useSignup();
  const {replace} = useRouter();
  return (
    <>
      {signupForm.step === "info" && (
        <>
          <Typo.Heading level={2}>회원가입</Typo.Heading>
          <Typo.Body mb={24} mt={4}>
            이미 계정이 있으신가요? <Link href="/auth/login">로그인</Link>
          </Typo.Body>
          <Input.Label title="이메일">
            <div className="flex flex-1 gap-1.5">
              <Input
                value={signupForm.email}
                onChange={signupForm.onChangeEmail}
                error={signupForm.emailErr}
                size="sm"
                block
                className="flex-1"
              />
            </div>
          </Input.Label>
          <div className="h-4" />
          <Input.Label title="비밀번호">
            <Input
              size="sm"
              value={signupForm.password}
              onChange={signupForm.onChangePassword}
              error={signupForm.passwordErr}
              info="대문자,특수문자를 포함한 8자리 이상의 비밀번호를 입력해주세요."
            />
          </Input.Label>

          <div className="h-4" />
          <Input.Label title="비밀번호 확인">
            <Input
              size="sm"
              info="비밀번호를 한번 더 입력해주세요."
              onChange={signupForm.onChangePasswordConfirm}
              value={signupForm.passwordConfirm}
            />
          </Input.Label>

          <div className="h-8" />

          <Button size="md" loading={signupForm.loading} onClick={signupForm.emailSend}>
            다음
          </Button>
          <div className="h-[1px] w-full bg-slate-200 my-5 flex items-center justify-center relative">
            <span className="absolute text-xs bg-white px-2 text-slate-400">OR</span>
          </div>
          <Button type="tertiary" size="md" leftIcon={<FaGoogle />}>
            구글로 시작하기
          </Button>
        </>
      )}

      {signupForm.step === "code" && (
        <>
          <Typo.Heading level={2}>메일함을 확인해 주세요.</Typo.Heading>
          <Typo.Body mb={28} mt={4}>
            {signupForm.email}으로 인증번호를 전송하였습니다.
          </Typo.Body>
          <Input.Label title="인증번호 6자리">
            <div className="flex flex-1 gap-1.5">
              <Input
                value={signupForm.code}
                onChange={signupForm.onChangeCode}
                error={
                  signupForm.timer < 0 ? "인증시간이 초과되었습니다." : signupForm.codeErr
                }
                size="md"
                block
                className="flex-1"
                disabled={signupForm.timer < 0}
              />
            </div>
          </Input.Label>

          <div className="h-4" />

          <Typo.Desc color="secondary">
            {signupForm.timer > 0 ? (
              `${Math.floor(signupForm.timer / 60)
                .toString()
                .padStart(2, "0")}:${(signupForm.timer % 60).toString().padStart(2, "0")}`
            ) : (
              <div className="cursor-pointer" onClick={signupForm.emailSend}>
                재전송
              </div>
            )}
          </Typo.Desc>

          <div className="h-8" />

          <Button size="md" onClick={signupForm.verifyCode} loading={signupForm.loading}>
            확인
          </Button>
        </>
      )}

      {signupForm.step === "success" && (
        <>
          <Typo.Heading level={2}>회원가입이 완료되었습니다.</Typo.Heading>
          <Typo.Body mb={24} mt={4}>
            {signupForm.email} 계정으로 로그인 해주세요.
          </Typo.Body>

          <div className="pb-16 pt-8 flex items-center justify-center">
            <img src="/img/check.png" className="w-36 h-36 rotate-12 animate-pulse" />
          </div>

          <Button size="lg" onClick={() => replace("/auth")}>
            로그인
          </Button>
        </>
      )}
    </>
  );
}
