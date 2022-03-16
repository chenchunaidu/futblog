import { atom } from "recoil";
import { Block } from "../types/editor.types";

export const editorState = atom<Block[]>({
  key: "editorState",
  default: [{ componentName: "Text", props: { children: "text" } }],
});

export const selectedBlockIndex = atom<null | number>({
  key: "selectedBlockIndex",
  default: null,
});

export const sideBarState = atom({
  key: "sideBarState",
  default: true,
});
