import { Group } from "@mantine/core";
import React from "react";

export interface RowProps {
  children?: React.ReactNode;
}

const Row: React.FC<RowProps> = ({ children }) => {
  return (
    <Group direction="column" spacing={0} grow>
      {children}
    </Group>
  );
};

export default Row;
