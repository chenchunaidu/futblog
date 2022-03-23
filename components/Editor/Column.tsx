import { Group } from "@mantine/core";
import React from "react";

export interface ColumnProps {
  children?: React.ReactNode;
}

const Column: React.FC<ColumnProps> = ({ children }) => {
  return (
    <Group direction="row" grow>
      {children}
    </Group>
  );
};

export default Column;
