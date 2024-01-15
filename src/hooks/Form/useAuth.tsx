import {appStorage} from "@/libs/storage";
import {User, useUserStore} from "@/modules/zustand/user";
import axios from "axios";
import {useCallback, useState} from "react";
import CryptoJS from "crypto-js";

export default function useAuth() {
  const [loading, setLoading] = useState(false);
  const {setAccessToken, accessToken, setUser} = useUserStore();

  const getAccessToken = () => {
    return accessToken;
  };
  const getRefreshToken = async () => {
    const token = await appStorage.local.get("refreshToken");
    if (!token) return null;
    const bytes = CryptoJS.AES.decrypt(
      token,
      process.env.NEXT_PUBLIC_DEVICE_KEY as string
    );
    const parsedToken = bytes.toString(CryptoJS.enc.Utf8);
    return parsedToken;
  };
  const setRefreshToken = async (token: string) => {
    const cipher = CryptoJS.AES.encrypt(
      token,
      process.env.NEXT_PUBLIC_DEVICE_KEY as string
    ).toString();
    await appStorage.local.set({refreshToken: cipher});
  };

  const tokenLogin = async (
    token?: string
  ): Promise<null | {
    tokens?: {refreshToken: string; accessToken: string};
    user?: User;
  }> => {
    setLoading(true);
    const refreshToken = token || (await getRefreshToken());
    if (!refreshToken) {
      setLoading(false);
      return null;
    }
    try {
      const {data} = await axios.post<{
        result: string;
        data: {
          tokens?: {refreshToken: string; accessToken: string};
          user?: User;
        };
      }>(`${process.env.NEXT_PUBLIC_API_HOST}/api/auth/login/token`, {
        refreshToken,
      });
      if (!data.data.user || !data.data.tokens) return null;
      const {user, tokens} = data.data;
      setUser(user);
      axios.defaults.headers.common["Authorization"] = `Bearer ${tokens.accessToken}`;
      setAccessToken(tokens.accessToken);
      setRefreshToken(tokens.refreshToken);
      setLoading(false);
      return data.data;
    } catch (e) {
      setLoading(false);
      return null;
    }
  };

  const tokenLogout = useCallback(async () => {
    appStorage.local.clear();
    axios.post(
      `${process.env.NEXT_PUBLIC_API_HOST}/api/me/logout`,
      {},
      {headers: {Authorization: `Bearer ${accessToken}`}}
    );
    axios.defaults.headers.common["Authorization"] = "";

    setAccessToken(null);
    setUser(null);
  }, [accessToken, setAccessToken, setUser]);

  return {
    getAccessToken,
    setAccessToken,
    getRefreshToken,
    setRefreshToken,
    tokenLogin,
    tokenLogout,
    fetching: loading,
  };
}
