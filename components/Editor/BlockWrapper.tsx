import { Box } from "@mantine/core";

import React from "react";
import BlockMenu from "./BlockMenuCompo";
import {
  Block,
  HandleAddBlock,
  HandleDeleteBlock,
  HandleDuplicateBlock,
  HandleSelectBlock,
} from "../../types/editor.types";
import { BlockComponentMapping } from ".";

import SelectComponentMenu from "./SelectComponentMenuComp";
import { useElementSize } from "@mantine/hooks";

interface BlockWrapperProps {
  block: Block;
}

const BlockWrapper: React.FC<BlockWrapperProps> = ({ block }) => {
  const { blockName, props, children = [] } = block;
  const Component = BlockComponentMapping[blockName].component;

  if (children.length)
    return (
      <Component {...props}>
        {children?.map((child) => (
          <BlockWrapper block={child} key={child.id} {...child.props} />
        ))}
      </Component>
    );
  return <Component {...props} />;
};

export default BlockWrapper;
