import React from "react";
import { useRecoilState } from "recoil";
import { editorStateAtom } from "../../atoms/editor.atom";
import { blockNameComponentMapping } from "./data";

interface BlockWrapperProps {
  blockId: string;
}

const BlockWrapper: React.FC<BlockWrapperProps> = ({ blockId }) => {
  const [block] = useRecoilState(editorStateAtom);
  if (block[blockId]) {
    const { blockName, children } = block[blockId];
    if (blockName === "Row" || blockName === "Column") {
      const Component = blockNameComponentMapping[blockName].component;
      return (
        <Component>
          {children.map((child) => (
            <BlockWrapper blockId={child} key={child}></BlockWrapper>
          ))}
        </Component>
      );
    } else {
      const Component = blockNameComponentMapping[blockName].component;
      return <Component blockId={blockId} />;
    }
  }
  return null;
};

export default BlockWrapper;
