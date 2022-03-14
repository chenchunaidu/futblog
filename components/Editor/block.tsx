import { Group, Textarea, ActionIcon, Tooltip, Box } from "@mantine/core";
import React, { useState } from "react";
import {
  EditorForm,
  HandleAddBlock,
  HandleDeleteBlock,
  HandleDuplicateBlock,
} from "../../types/editor.types";
import { IoAddOutline } from "react-icons/io5";

import { getHotkeyHandler } from "@mantine/hooks";
import BlockMenu from "./blockMenu";

//TODO: delete on clicking the back space in empty textare
//TODO: styling the icons

//TODO: Show place holder on focus only

//TODO: Preview components types [Additional components can be added]
//TODO: Text types [title, h1,h2,h3,h4,h5,h6, code, link, icons]
//TODO: File type [image, background image, multi image[grid types], pdf, video]
//TODO: Tables
//TODO: Charts
//TODO: Embeds
//TODO: Lists
//TODO: Every field will have the style. can add style with code or ui. initially code only

interface BlockProps {
  form: EditorForm;
  index: number;
  handleAddBlock: HandleAddBlock;
  handleDeleteBlock: HandleDeleteBlock;
  handleDuplicateBlock: HandleDuplicateBlock;
}

const Block: React.FC<BlockProps> = ({
  form,
  index,
  handleAddBlock,
  handleDeleteBlock,
  handleDuplicateBlock,
}) => {
  const [focused, setFocused] = useState<boolean>(false);
  const [hovered, setHovered] = useState<boolean>(false);

  return (
    <Group
      direction="row"
      align="center"
      spacing={1}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Box sx={{ width: "10%" }}>
        {hovered ? (
          <Box sx={{ display: "flex" }}>
            <ActionIcon
              variant="default"
              size="sm"
              onClick={() => handleAddBlock(index)}
            >
              <IoAddOutline size={24} />
            </ActionIcon>

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

      <Textarea
        sx={{ width: "80%" }}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        variant="unstyled"
        minRows={1}
        placeholder={focused ? "Type your text here" : ""}
        autosize
        autoFocus
        {...form.getListInputProps("blocks", index, "content")}
        onKeyDown={getHotkeyHandler([
          ["Enter", () => handleAddBlock(index)],
          // ["/", handleSave],
        ])}
      />
    </Group>
  );
};

export default Block;
