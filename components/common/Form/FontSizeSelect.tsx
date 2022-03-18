import { Select } from "@mantine/core";
import React from "react";
import { mantineFontSizeOptions } from "./data";

interface FontSizeSelectProps {
  value: string;
  onChange?: (e: string | null) => void;
  label?: string;
}

const FontSizeSelect: React.FC<FontSizeSelectProps> = ({
  value,
  onChange,
  label,
}) => {
  return (
    <Select
      data={mantineFontSizeOptions}
      label={label}
      value={value}
      onChange={onChange}
    />
  );
};

export default FontSizeSelect;
