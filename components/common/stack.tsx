import React from "react";
import Flex, { FlexProps } from "./flex";

export interface StackProps extends FlexProps {
  spacing?: "number" | "string";
}

const Stack: React.FC<StackProps> = ({
  direction = "column",
  sx = {},
  children,
  spacing = "10px",
}) => {
  return (
    <Flex
      direction={direction}
      sx={{
        ...sx,
        "& : not(:first-child)": {
          ...(direction === "column"
            ? { marginTop: spacing }
            : { marginLeft: spacing }),
        },
      }}
    >
      {children}
    </Flex>
  );
};

export default Stack;
