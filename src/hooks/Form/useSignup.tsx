import {User} from "@/modules/zustand/user";
import axios, {AxiosError} from "axios";
import React, {useState} from "react";
let interval: NodeJS.Timeout;
const passwordReg =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
const emailReg = /^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
export default function useSignup() {
  const [step, setStep] = useState<"info" | "code" | "success">("info");

  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [emailErr, setEmailErr] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [passwordErr, setPasswordErr] = useState("");

  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  const onChangePasswordConfirm = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordConfirm(e.target.value);
  };

  const emailSend = async () => {
    console.log(1);
    setLoading(true);
    let valid = true;
    if (!emailReg.test(email)) {
      setEmailErr("이메일 형식이 올바르지 않습니다.");
      valid = false;
    } else {
      setEmailErr("");
      valid = true;
    }

    if (!passwordReg.test(password)) {
      setPasswordErr("비밀번호 형식이 올바르지 않습니다.");
      valid = false;
    } else if (password !== passwordConfirm) {
      setPasswordErr("비밀번호가 일치하지 않습니다.");
      valid = false;
    } else {
      setPasswordErr("");
      valid = true;
    }
    if (!valid) {
      setLoading(false);
      return;
    }
    try {
      const {data} = await axios.get(
        `${process.env.NEXT_PUBLIC_API_HOST}/api/auth/verifications/email`,
        {params: {email}}
      );
      console.log(data);
      setStep("code");
      startTimer();
    } catch (e) {
      const err = e as AxiosError;
      if (err.response?.status === 409) setEmailErr("이미 존재하는 이메일입니다.");
    } finally {
      setLoading(false);
    }
  };

  const [timer, setTimer] = useState(600);
  const startTimer = () => {
    setTimer(600);
    interval = setInterval(() => {
      setTimer((timer) => timer - 1);
    }, 1000);
  };
  const clearTimer = () => {
    clearInterval(interval);
  };
  const [code, setCode] = useState("");
  const [codeErr, setCodeErr] = useState("");
  const onChangeCode = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCode(e.target.value);
  };
  const verifyCode = async () => {
    setLoading(true);
    try {
      await axios.post(
        `${process.env.NEXT_PUBLIC_API_HOST}/api/auth/verifications/email`,
        {email, code}
      );
      clearTimer();
      const {data} = await axios.post(
        `${process.env.NEXT_PUBLIC_API_HOST}/api/auth/signup`,
        {
          email,
          password,
        }
      );
      if (data.result !== "success") throw new Error("알 수 없는 오류가 발생했습니다.");
      setStep("success");
    } catch (e) {
      const err = e as AxiosError;
      if (err.response?.status === 401) setCodeErr("인증번호가 올바르지 않습니다.");
      if (err.response?.status === 409) setCodeErr("이미 존재하는 이메일입니다.");
    } finally {
      setLoading(false);
    }
  };
  return {
    email,
    emailErr,
    password,
    passwordConfirm,
    passwordErr,
    onChangeEmail,
    onChangePassword,
    onChangePasswordConfirm,
    emailSend,
    loading,
    step,
    timer,
    code,
    codeErr,
    onChangeCode,
    verifyCode,
  };
}
