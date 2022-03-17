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
  HandleSelectedBlockChange,
  StyleProps,
} from "../../../types/editor.types";
import GridInput from "./GridInput";
import CustomInputWrapper from "./InputWrapper";

export const inputComponentMapping = {
  text: TextInput,
  number: NumberInput,
  select: Select,
  switch: Switch,
  color: ColorInput,
  textarea: Textarea,
  grid: GridInput,
};

export interface CustomInputProps {
  type: keyof typeof inputComponentMapping;
  options?: (string | SelectItem)[];
  label?: string;
  name: string;
}

interface RenderGroupInputProps {
  inputs: CustomInputProps[];
  props: StyleProps;
  handleSelectedBlockChange: HandleSelectedBlockChange;
}

export const RenderGroupInput: React.FC<RenderGroupInputProps> = ({
  inputs,
  props,
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
      | undefined
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
    handleSelectedBlockChange(props);
  };

  return (
    <Group direction="column" grow>
      <CustomInputWrapper
        inputs={inputs}
        handleSelectedBlockChange={handleSelectedBlockChange}
        props={props}
        handleInputChange={handleChange}
      />
    </Group>
  );
};
