import React from "react";
import { Title, TitleOrder } from "@mantine/core";
import { BlockComponentProps } from "../../types/editor.types";
import { useRecoilState } from "recoil";
import { editorStateAtom } from "../../atoms/editor.atom";
import cloneDeep from "lodash.clonedeep";

export interface CustomTitleProps {
  content?: string;
  order?: TitleOrder;
}

export const CustomTitle: React.FC<BlockComponentProps> = ({ blockId }) => {
  const [block, setBlock] = useRecoilState(editorStateAtom);
  const currentBlock = block[blockId];
  const { props } = block[blockId];
  const { content = "", order = 1 } = props as CustomTitleProps;

  const handleBlockChange = (key: string, value: string) => {
    const newBlock = cloneDeep(currentBlock);
    newBlock.props[key] = value;
    setBlock({ ...block, [blockId]: newBlock });
  };

  return (
    <Title
      contentEditable="true"
      suppressContentEditableWarning={true}
      order={order}
      onBlur={(e: React.FormEvent<HTMLDivElement>) =>
        handleBlockChange("content", e?.currentTarget?.innerText)
      }
    >
      {content}
    </Title>
  );
};

export const Heading1: React.FC<BlockComponentProps> = ({ blockId }) => {
  return <CustomTitle blockId={blockId} />;
};

export const Heading2: React.FC<BlockComponentProps> = ({ blockId }) => {
  return <CustomTitle blockId={blockId} />;
};
export const Heading3: React.FC<BlockComponentProps> = ({ blockId }) => {
  return <CustomTitle blockId={blockId} />;
};

// export const Heading2: React.FC<BlockComponentProps> = ({ blockId }) => {
//   const [block, setBlock] = useRecoilState(editorStateAtom);
//   const { props } = block[blockId];
//   const { content = "" } = props as CustomTitleProps;
//   return (
//     <Title
//       contentEditable="true"
//       suppressContentEditableWarning={true}
//       order={2}
//     >
//       {content}
//     </Title>
//   );
// };

// export const Heading3: React.FC<BlockComponentProps> = ({ blockId }) => {
//   const [block, setBlock] = useRecoilState(editorStateAtom);
//   const { props } = block[blockId];
//   const { content = "" } = props as CustomTitleProps;
//   return (
//     <Title
//       contentEditable="true"
//       suppressContentEditableWarning={true}
//       order={3}
//     >
//       {content}
//     </Title>
//   );
// };
