import {
  NumberInput,
  Select,
  TextInput,
  Switch,
  ColorInput,
  Textarea,
  Group,
  SelectItem,
} from "@mantine/core";
import React from "react";
import {
  HandleBlockPropsChange,
  HandleSelectedBlockChange,
  BlockProps,
  BlockPropsInput,
} from "../../../types/editor.types";
import GridInput from "./GridInput";
import BlockPropsInputWrapper from "./BlockPropsInputWrapper";

export const inputComponentMapping = {
  text: TextInput,
  number: NumberInput,
  select: Select,
  switch: Switch,
  color: ColorInput,
  textarea: Textarea,
  grid: GridInput,
};

interface BlockPropsInputGroupProps {
  inputs: BlockPropsInput[];
  props: BlockProps;
  handleSelectedBlockChange: HandleSelectedBlockChange;
}

export const BlockPropsInputGroup: React.FC<BlockPropsInputGroupProps> = ({
  inputs,
  props,
  handleSelectedBlockChange,
}) => {
  const handleBlockPropsChange: HandleBlockPropsChange = (label, value) => {
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
    handleSelectedBlockChange(props);
  };

  return (
    <Group direction="column" grow>
      <BlockPropsInputWrapper
        inputs={inputs}
        handleSelectedBlockChange={handleSelectedBlockChange}
        props={props}
        handleBlockPropsChange={handleBlockPropsChange}
      />
    </Group>
  );
};
