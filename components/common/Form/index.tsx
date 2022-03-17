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

export const inputComponentMapping = {
  text: TextInput,
  number: NumberInput,
  select: Select,
  switch: Switch,
  color: ColorInput,
  textarea: Textarea,
};

interface Input {
  type: keyof typeof inputComponentMapping;
  onChange: (input: any) => void;
  value: any;
  options?: (string | SelectItem)[];
}

interface RenderGroupInputProps {
  inputs: Input[];
}

export const RenderGroupInput: React.FC<RenderGroupInputProps> = ({
  inputs,
}) => {
  return (
    <Group direction="column">
      {inputs.map(({ type, options = [] }, index) => {
        if (type === "select") {
          const InputComponent = inputComponentMapping[type];
          return <InputComponent key={index} data={options} />;
        }
        const InputComponent = inputComponentMapping[type];
        return <InputComponent key={index} />;
      })}
    </Group>
  );
};

// export default function index() {
//   return <div>index</div>;
// }
