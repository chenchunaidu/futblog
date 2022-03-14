import React from "react";
import { formList, useForm } from "@mantine/form";
import EditorComp from "../../components/Editor/editor";
import {
  HandleAddBlock,
  HandleDeleteBlock,
  HandleDuplicateBlock,
} from "../../types/editor.types";

export default function Editor() {
  const form = useForm({
    initialValues: {
      blocks: formList([
        {
          content: "",
        },
      ]),
    },
  });

  const handleAddBlock: HandleAddBlock = (index, block = { content: "" }) => {
    const blocks = form.values.blocks;
    blocks.splice(index + 1, 0, block);
    form.setFieldValue("blocks", blocks);
  };

  const handleDeleteBlock: HandleDeleteBlock = (index) => {
    form.removeListItem("blocks", index);
  };

  const handleDuplicateBlock: HandleDuplicateBlock = (index) => {
    const blocks = form.values.blocks;
    const blockToCopy = blocks[index];
    handleAddBlock(index, blockToCopy);
  };

  return (
    <EditorComp
      form={form}
      handleAddBlock={handleAddBlock}
      handleDeleteBlock={handleDeleteBlock}
      handleDuplicateBlock={handleDuplicateBlock}
    />
  );
}
