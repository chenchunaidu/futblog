import {
  Block,
  HandleAddBlock,
  HandleDeleteBlock,
  HandleDuplicateBlock,
  HandleSelectBlock,
  HandleSelectedBlockChange,
  StyleProps,
} from "../../types/editor.types";
import React from "react";
import { Box, Grid, Paper, JsonInput } from "@mantine/core";
import { useLocalStorageValue } from "@mantine/hooks";

import ComponentWrapper from "./ComponentWrapper";
import { defaultBlock } from ".";

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

  const handleSelectedBlockChange: HandleSelectedBlockChange = (value) => {
    if (selectedBlock) {
      const currentEditorState = [...editorState];
      selectedBlock.props = JSON.parse(value) as StyleProps;
      setEditorState(currentEditorState);
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
        <Paper shadow="xl" sx={{ height: "95vh" }} p="lg">
          <JsonInput
            label="Enter your input here"
            placeholder="Textarea will autosize to fit the content"
            validationError="Invalid json"
            formatOnBlur
            autosize
            minRows={4}
            value={JSON.stringify(selectedBlock?.props) || ""}
            onChange={handleSelectedBlockChange}
          />
        </Paper>
      </Grid.Col>
    </Grid>
  );
};

export default React.memo(EditorComp);
