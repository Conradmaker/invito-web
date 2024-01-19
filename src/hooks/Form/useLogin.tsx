import {User, useUserStore} from "@/modules/zustand/user";
import axios, {AxiosError} from "axios";
import React, {useState} from "react";
import useAuth from "./useAuth";
import {useUiStore} from "@/modules/zustand/ui";

export default function useLogin() {
  const {setRefreshToken} = useAuth();
  const {setAccessToken, setUser} = useUserStore();
  const {setCurrentTeam} = useUiStore();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  const onLogin = async () => {
    try {
      const {data} = await axios.post<{
        result: string;
        data: {
          tokens?: {refreshToken: string; accessToken: string};
          user?: User;
        };
      }>(`${process.env.NEXT_PUBLIC_API_HOST}/api/auth/login`, {
        email,
        password,
      });
      if (!data.data.user || !data.data.tokens) return null;
      const {user, tokens} = data.data;
      axios.defaults.headers.common["Authorization"] = `Bearer ${tokens.accessToken}`;
      setAccessToken(tokens.accessToken);
      setRefreshToken(tokens.refreshToken);
      setCurrentTeam(user.teams[0]);
      setUser(user);
      setLoading(false);
      return data.data;
    } catch (e) {
      const err = e as AxiosError<{message: string}>;
      alert(err.response?.data?.message);
      setLoading(false);
    }
  };

  return {
    email,
    password,
    onChangeEmail,
    onChangePassword,
    onLogin,
    loading,
  };
}
