import { Select } from "@mantine/core";
import React from "react";
import { fontWeightOptions } from "./data";

interface FontWeightSelectProps {
  value: string;
  onChange?: (e: string | null) => void;
  label?: string;
}

const FontWeightSelect: React.FC<FontWeightSelectProps> = ({
  value,
  onChange,
  label,
}) => {
  return (
    <Select
      data={fontWeightOptions}
      label={label}
      value={value}
      onChange={onChange}
    />
  );
};

export default FontWeightSelect;
