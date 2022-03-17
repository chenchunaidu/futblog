import { Select } from "@mantine/core";
import React from "react";
import { fontWeightOptions } from "./data";
// import Select

// const FontWeightSelect = () => {};
interface FontWeightSelectProps {
  value: string;
  onChange: (e: string | null) => void;
}

const FontWeightSelect: React.FC<FontWeightSelectProps> = ({
  value,
  onChange,
}) => {
  return <Select data={fontWeightOptions} value={value} onChange={onChange} />;
};

export default FontWeightSelect;
