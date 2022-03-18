import { Group, Text, NumberInput, ActionIcon } from "@mantine/core";
import React from "react";
import {
  HandleAddGridItem,
  HandleSelectedBlockChange,
  StyleProps,
} from "../../../types/editor.types";
import { BlockComponentMapping } from "../../Editor";
import { GridItem } from "../../Editor/CustomGrid";
import CustomInputWrapper from "./InputWrapper";
import AddGridItemMenu from "./AddGridItemMenu";
import { AiFillDelete } from "react-icons/ai";

interface GridInputProps {
  gridItems: GridItem[];
  onChange: () => void;
  handleSelectedBlockChange: HandleSelectedBlockChange;
}

const GridInput: React.FC<GridInputProps> = ({
  gridItems,
  onChange,
  handleSelectedBlockChange,
}) => {
  const handleChange = (
    label: string,
    value:
      | string
      | number
      | boolean
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
      | undefined,
    props: StyleProps = {}
  ) => {
    if (value)
      if (
        typeof value === "string" ||
        typeof value === "number" ||
        typeof value === "boolean"
      )
        props[label] = value;
      else {
        props[label] = value?.target?.value;
      }
    handleSelectedBlockChange({ gridItems });
  };

  const handleAddGridItem: HandleAddGridItem = (block) => {
    handleSelectedBlockChange({ gridItems: [...gridItems, { block }] });
  };

  const handleDeleteGridItem = (indexToDelete: number) => {
    handleSelectedBlockChange({
      gridItems: gridItems.filter((_, index) => index !== indexToDelete),
    });
  };

  const handleSpanChange = (index: number, value: number) => {
    gridItems[index].span = value;
    handleSelectedBlockChange({ gridItems });
  };

  return (
    <Group direction="column" grow>
      {gridItems.map((gridItem, index) => {
        const { block, span } = gridItem;
        const { blockName } = block;
        const { inputs = [] } = BlockComponentMapping[blockName];
        return (
          <Group key={index} direction="column" grow>
            <Group position="apart">
              <Text weight="bold">Grid item {index + 1}</Text>
              <ActionIcon
                variant="light"
                size="sm"
                color="red"
                onClick={() => handleDeleteGridItem(index)}
              >
                <AiFillDelete size={16} />
              </ActionIcon>
            </Group>
            <NumberInput
              label="Span"
              value={span}
              onChange={(value = 12) => {
                handleSpanChange(index, value);
              }}
            />

            <CustomInputWrapper
              handleSelectedBlockChange={handleSelectedBlockChange}
              inputs={inputs}
              props={block.props || {}}
              handleInputChange={(label, value) =>
                handleChange(label, value, block?.props)
              }
            />
          </Group>
        );
      })}
      <AddGridItemMenu handleAddGridItem={handleAddGridItem} />
    </Group>
  );
};

export default GridInput;
