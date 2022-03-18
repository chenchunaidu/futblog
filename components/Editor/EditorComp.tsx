import {
  Block,
  HandleAddBlock,
  HandleDeleteBlock,
  HandleDuplicateBlock,
  HandleSelectBlock,
  HandleSelectedBlockChange,
} from "../../types/editor.types";
import React from "react";
import { Box, Grid, Paper } from "@mantine/core";
import { useLocalStorageValue } from "@mantine/hooks";
import { RenderGroupInput } from "../common/Form";

import ComponentWrapper from "./ComponentWrapper";
import { ComponentMapping, defaultBlock } from ".";

const EditorComp = () => {
  const [editorState, setEditorState] = useLocalStorageValue<Block[]>({
    key: "editorState",
    defaultValue: [defaultBlock],
  });
  const [selectedBlockIndex, setSelectedBlockIndex] = React.useState<
    number | null
  >(null);

  const selectedBlock =
    selectedBlockIndex || selectedBlockIndex === 0
      ? editorState[selectedBlockIndex]
      : null;

  const handleAddBlock: HandleAddBlock = (index, block = defaultBlock) => {
    const currentEditorState = [...editorState];
    block.props = { ...block.props };
    currentEditorState.splice(index + 1, 0, block);
    setEditorState(currentEditorState);
  };

  const handleDeleteBlock: HandleDeleteBlock = (indexToDelete) => {
    if (editorState.length > 1) {
      setEditorState(
        editorState.filter((block, index) => index !== indexToDelete)
      );
    }
  };

  const handleDuplicateBlock: HandleDuplicateBlock = (index) => {
    const blockToCopy = editorState[index];
    handleAddBlock(index, { ...blockToCopy });
  };

  const handleSelectBlock: HandleSelectBlock = (index) => {
    setSelectedBlockIndex(index);
  };

  const handleSelectedBlockChange: HandleSelectedBlockChange = (props) => {
    if (selectedBlock && (selectedBlockIndex || selectedBlockIndex == 0)) {
      const currentEditorState = editorState;
      currentEditorState[selectedBlockIndex].props = props;
      setEditorState([...currentEditorState]);
    }
  };

  return (
    <Grid>
      <Grid.Col span={9}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            overflow: "scroll",
            height: "95vh",
          }}
        >
          {editorState?.map((block, index) => (
            <ComponentWrapper
              key={index}
              {...block}
              index={index}
              handleAddBlock={handleAddBlock}
              handleDeleteBlock={handleDeleteBlock}
              handleDuplicateBlock={handleDuplicateBlock}
              handleSelectBlock={handleSelectBlock}
              selectedBlockIndex={selectedBlockIndex}
            />
          ))}
        </Box>
      </Grid.Col>
      <Grid.Col span={3}>
        <Paper shadow="xl" sx={{ height: "95vh", overflow: "scroll" }} p="lg">
          <RenderGroupInput
            props={selectedBlock?.props || {}}
            handleSelectedBlockChange={handleSelectedBlockChange}
            inputs={
              (selectedBlock?.componentName &&
                ComponentMapping[selectedBlock?.componentName]?.inputs) ||
              []
            }
          />
        </Paper>
      </Grid.Col>
    </Grid>
  );
};

export default React.memo(EditorComp);
