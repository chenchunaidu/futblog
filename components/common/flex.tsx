import React from "react";
import { Box } from "@mantine/core";
import { DefaultProps } from "@mantine/styles";

export interface FlexProps extends DefaultProps {
  children?: React.ReactNode;
  direction?: React.CSSProperties["flexDirection"];
}

const Flex: React.FC<FlexProps> = ({ children, direction, sx = {} }) => {
  return (
    <Box
      sx={{
        flexDirection: direction,
        display: "flex",
        ...sx,
      }}
    >
      {children}
    </Box>
  );
};

export default Flex;
