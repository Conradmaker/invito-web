import {create} from "zustand";
import {immer} from "zustand/middleware/immer";

interface EditorState {
  width: number;
  setWidth: (width: number) => void;

  scale: number;
  setScale: (scale: number) => void;

  editable: boolean;
  toggleEditable: (v?: boolean) => void;

  border: boolean;
  toggleBorder: (v?: boolean) => void;
}

export const useEditorStore = create(
  immer<EditorState>((set) => ({
    width: 360,
    setWidth: (payload) =>
      set((state) => {
        state.width = payload;
      }),

    scale: 100,
    setScale: (payload) =>
      set((state) => {
        state.scale = payload;
      }),

    editable: true,
    toggleEditable: (payload) =>
      set((state) => {
        state.editable = payload ? payload : !state.editable;
      }),

    border: true,
    toggleBorder: (payload) =>
      set((state) => {
        state.border = payload ? payload : !state.border;
      }),
  }))
);
