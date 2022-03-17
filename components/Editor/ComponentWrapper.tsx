import { Box } from "@mantine/core";

import React from "react";
import BlockMenu from "./BlockMenu";
import {
  Block,
  HandleAddBlock,
  HandleDeleteBlock,
  HandleDuplicateBlock,
  HandleSelectBlock,
} from "../../types/editor.types";
import { ComponentMapping } from ".";

import SelectComponentMenu from "./SelectComponentMenu";

interface ComponentWrapperProps extends Block {
  handleAddBlock: HandleAddBlock;
  handleDeleteBlock: HandleDeleteBlock;
  handleDuplicateBlock: HandleDuplicateBlock;
  handleSelectBlock: HandleSelectBlock;
  index: number;
  selectedBlockIndex: number | null;
}

const ComponentWrapper: React.FC<ComponentWrapperProps> = ({
  handleAddBlock,
  handleDeleteBlock,
  handleDuplicateBlock,
  handleSelectBlock,
  index,
  componentName,
  props = {},
  selectedBlockIndex,
}) => {
  const Component = ComponentMapping[componentName].component;
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

export default ComponentWrapper;
