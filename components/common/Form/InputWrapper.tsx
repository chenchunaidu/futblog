import React from "react";
import { CustomInputProps } from ".";
import {
  HandleSelectedBlockChange,
  StyleProps,
} from "../../../types/editor.types";
import { inputComponentMapping } from ".";
interface CustomInputWrapperProps {
  inputs: CustomInputProps[];
  props: StyleProps;
  handleInputChange: (
    label: string,
    value:
      | string
      | number
      | boolean
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
      | undefined
  ) => void;
  handleSelectedBlockChange: HandleSelectedBlockChange;
}

const CustomInputWrapper: React.FC<CustomInputWrapperProps> = ({
  inputs,
  props,
  handleInputChange: handleChange,
  handleSelectedBlockChange,
}) => {
  return (
    <>
      {inputs.map(({ type, name, label, options = [] }, index) => {
        const value = props[name];
        if (type === "grid" && typeof value === "object") {
          const InputComponent = inputComponentMapping[type];
          return (
            <InputComponent
              key={index}
              gridItems={value}
              onChange={() => console.log("something")}
              handleSelectedBlockChange={handleSelectedBlockChange}
            />
          );
        }

        if (type === "select") {
          if (typeof value === "string") {
            const InputComponent = inputComponentMapping[type];
            return <InputComponent key={index} data={options} value={value} />;
          }
        }
        if (type === "switch" && typeof value === "boolean") {
          const InputComponent = inputComponentMapping[type];
          return (
            <InputComponent
              key={index}
              label={label}
              checked={value}
              onChange={(e) => handleChange(name, e?.currentTarget?.checked)}
            />
          );
        }

        if (
          (type === "text" || type === "textarea") &&
          typeof value === "string"
        ) {
          const InputComponent = inputComponentMapping[type];
          return (
            <InputComponent
              key={index}
              label={label}
              value={value}
              onChange={(e) => handleChange(name, e)}
            />
          );
        }

        if (type === "number" && typeof value === "number") {
          const InputComponent = inputComponentMapping[type];
          return (
            <InputComponent
              key={index}
              label={label}
              value={value}
              onChange={(e) => handleChange(name, e)}
            />
          );
        }
      })}
    </>
  );
};

export default CustomInputWrapper;
