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

interface BlockWrapperProps extends Block {
  handleAddBlock: HandleAddBlock;
  handleDeleteBlock: HandleDeleteBlock;
  handleDuplicateBlock: HandleDuplicateBlock;
  handleSelectBlock: HandleSelectBlock;
  index: number;
  selectedBlockIndex: number | null;
}

const BlockWrapper: React.FC<BlockWrapperProps> = ({
  handleAddBlock,
  handleDeleteBlock,
  handleDuplicateBlock,
  handleSelectBlock,
  index,
  blockName,
  props = {},
  selectedBlockIndex,
}) => {
  const Component = BlockComponentMapping[blockName].component;
  const [hovered, setHovered] = React.useState<boolean>(false);

  const isSelected = selectedBlockIndex === index;

  return (
    <Box
      sx={{ display: "flex" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Box sx={{ width: "7%" }}>
        {hovered ? (
          <Box sx={{ display: "flex" }}>
            <SelectComponentMenu
              handleAddBlock={handleAddBlock}
              index={index}
            />

            <BlockMenu
              onDeleteBlock={() => {
                handleDeleteBlock(index);
              }}
              onDuplicateBlock={() => {
                handleDuplicateBlock(index);
              }}
            />
          </Box>
        ) : (
          ""
        )}
      </Box>
      <Box
        sx={{
          width: "100%",
          border: isSelected ? "1px dashed black" : "none",
        }}
        onClick={() => {
          handleSelectBlock(index);
        }}
        pb="sm"
      >
        <Component {...props} />
      </Box>
    </Box>
  );
};

export default BlockWrapper;
