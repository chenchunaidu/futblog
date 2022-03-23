import { useLocalStorage } from "@mantine/hooks";
import React from "react";
import { useRecoilState } from "recoil";
import { editorStateAtom } from "../../atoms/editor.atom";
import { Block } from "../../types/editor.types";
import BlockWrapper from "./BlockWrapper";
import { SampleEditorState } from "./data";

export default function Editor() {
  const [editorState, setEditorState] = useRecoilState(editorStateAtom);
  console.log(editorState);
  return (
    <div>
      <BlockWrapper blockId="root" />
    </div>
  );
}
