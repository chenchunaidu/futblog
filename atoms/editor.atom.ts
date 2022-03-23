/* eslint-disable @typescript-eslint/no-unsafe-call */
import { atom } from "recoil";
import { Block } from "../types/editor.types";
import { SampleEditorState } from "../components/Editor/data";
import { recoilPersist } from "recoil-persist";

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
const { persistAtom } = recoilPersist();

export const editorStateAtom = atom<Block>({
  key: "editorState",
  default: SampleEditorState,
  effects: [persistAtom],
});
