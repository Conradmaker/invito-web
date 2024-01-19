import {create} from "zustand";
import {immer} from "zustand/middleware/immer";
import {persist, createJSONStorage} from "zustand/middleware";

export type User = {
  nickname: string;
  email: string;
  avatar: string;
  trackingId: string;
  lastLogin: Date;
  createdAt: string;
  devices: {id: number; os: string; browser: string; lastLogin: Date}[];
  teams: {id: number; slug: string; name: string; avatar: string}[];
};
export type Device = {
  fingerPrint: string;
  browser: string | null;
  os: string | null;
  cipher: string;
};
interface UserState {
  user: User | null;
  setUser: (user: User | null) => void;
  accessToken: string | null;
  setAccessToken: (accessToken: string | null) => void;
  device: Device | null;
  setDevice: (device: Device) => void;
}

export const useUserStore = create(
  persist(
    immer<UserState>((set) => ({
      accessToken: null,
      setAccessToken: (payload) =>
        set((state) => {
          state.accessToken = payload;
        }),
      user: null,
      setUser: (payload) =>
        set((state) => {
          state.user = payload;
        }),
      device: null,
      setDevice: (payload) =>
        set((state) => {
          state.device = payload;
        }),
    })),
    {
      name: "user-storage",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
