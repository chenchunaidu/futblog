import { Select } from "@mantine/core";
import React from "react";
import { titleOrderOptions } from "./data";

interface TitleOrderSelectProps {
  value: string;
  onChange?: (e: string | null) => void;
  label?: string;
}

const TitleOrderSelect: React.FC<TitleOrderSelectProps> = ({
  value,
  onChange,
  label,
}) => {
  return (
    <Select
      data={titleOrderOptions}
      label={label}
      value={value}
      onChange={onChange}
    />
  );
};

export default TitleOrderSelect;
