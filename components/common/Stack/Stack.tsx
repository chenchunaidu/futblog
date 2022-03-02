import React from "react";
import useStyles from "./Stack.styles";
import { Box } from "@mantine/core";
import { DefaultProps, MantineNumberSize } from "@mantine/styles";

export interface StackProps extends DefaultProps {
  spacing?: MantineNumberSize;
  direction?: React.CSSProperties["flexDirection"];
  children?: React.ReactNode;
}

const Stack: React.FC<StackProps> = ({
  children,
  direction = "column",
  classNames,
  styles,
  className,
  spacing,
  ...others
}) => {
  const { classes, cx } = useStyles(
    { direction, spacing },
    { styles, classNames, name: "Stack" }
  );
  return (
    <Box className={cx(classes.root, className)} {...others}>
      {children}
    </Box>
  );
};
export default Stack;
