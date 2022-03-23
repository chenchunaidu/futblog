import React from "react";
import { Text, TextInput } from "@mantine/core";
import { BlockComponentProps } from "../../types/editor.types";
import { useRecoilState } from "recoil";
import { editorStateAtom } from "../../atoms/editor.atom";
import cloneDeep from "lodash.clonedeep";

export interface CustomTextProps {
  content?: string;
}

const CustomText: React.FC<BlockComponentProps> = ({ blockId }) => {
  const [block, setBlock] = useRecoilState(editorStateAtom);
  const currentBlock = block[blockId];
  const { props } = currentBlock;
  const { content } = props as CustomTextProps;

  const handleBlockChange = (key: string, value: string) => {
    const newBlock = cloneDeep(currentBlock);
    newBlock.props[key] = value;
    setBlock({ ...block, [blockId]: newBlock });
  };

  return (
    <Text
      contentEditable="true"
      suppressContentEditableWarning={true}
      onBlur={(e: React.FormEvent<HTMLDivElement>) =>
        handleBlockChange("content", e?.currentTarget?.innerText)
      }
    >
      {content}
    </Text>
  );
};

export default CustomText;
