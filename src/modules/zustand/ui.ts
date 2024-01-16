import {create} from "zustand";
import {createJSONStorage, persist} from "zustand/middleware";
import {immer} from "zustand/middleware/immer";

type Team = {
  id: number;
  slug: string;
  name: string;
  avatar: string | null;
};
type ToastProp = {
  icon?: "success" | "alert";
  title: string;
  description?: string;
  action?: {
    loading?: boolean;
    onOk?: () => void;
    okText?: string;
  };
};
interface UiState {
  currentTeam: Team | null;
  setCurrentTeam: (team: Team | null) => void;
  currentProject: number | null;
  setCurrentProject: (project: number | null) => void;

  toast: ToastProp | null;
  triggerToast: (t: ToastProp | null) => void;
}

export const useUiStore = create(
  persist(
    immer<UiState>((set) => ({
      currentTeam: null,
      setCurrentTeam: (payload) =>
        set((state) => {
          state.currentTeam = payload;
        }),
      currentProject: null,
      setCurrentProject: (payload) =>
        set((state) => {
          state.currentProject = payload;
        }),
      toast: null,
      triggerToast: (payload) =>
        set((state) => {
          state.toast = payload;
        }),
    })),
    {
      name: "ui-storage",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
