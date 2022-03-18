import React from "react";
import {
  HandleBlockPropsChange,
  HandleSelectedBlockChange,
  BlockProps,
  BlockPropsInput,
} from "../../../types/editor.types";
import { inputComponentMapping } from ".";
interface BlockPropsInputWrapperProps {
  inputs: BlockPropsInput[];
  props: BlockProps;
  handleBlockPropsChange: HandleBlockPropsChange;
  handleSelectedBlockChange: HandleSelectedBlockChange;
}

const BlockPropsInputWrapper: React.FC<BlockPropsInputWrapperProps> = ({
  inputs,
  props,
  handleBlockPropsChange,
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
              onChange={(e) =>
                handleBlockPropsChange(name, e?.currentTarget?.checked)
              }
            />
          );
        }

        if (
          (type === "text" || type === "textarea" || type === "color") &&
          typeof value === "string"
        ) {
          const InputComponent = inputComponentMapping[type];
          return (
            <InputComponent
              key={index}
              label={label}
              value={value}
              onChange={(e) => handleBlockPropsChange(name, e)}
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
              onChange={(e) => handleBlockPropsChange(name, e)}
            />
          );
        }
      })}
    </>
  );
};

export default BlockPropsInputWrapper;
