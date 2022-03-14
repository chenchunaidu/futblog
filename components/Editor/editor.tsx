import { UseFormReturnType } from "@mantine/form/lib/use-form";
import {
  EditorForm,
  HandleAddBlock,
  HandleDeleteBlock,
  HandleDuplicateBlock,
} from "../../types/editor.types";
import React from "react";
import { Group } from "@mantine/core";
import Block from "./block";

interface EditorCompProps {
  form: EditorForm;
  handleAddBlock: HandleAddBlock;
  handleDeleteBlock: HandleDeleteBlock;
  handleDuplicateBlock: HandleDuplicateBlock;
}

const EditorComp: React.FC<EditorCompProps> = ({
  form,
  handleAddBlock,
  handleDeleteBlock,
  handleDuplicateBlock,
}) => {
  return (
    <Group direction="column" grow spacing={0}>
      {form.values.blocks.map((_, index) => (
        <Block
          index={index}
          form={form}
          key={index}
          handleAddBlock={handleAddBlock}
          handleDeleteBlock={handleDeleteBlock}
          handleDuplicateBlock={handleDuplicateBlock}
        />
      ))}
    </Group>
  );
};

export default EditorComp;
