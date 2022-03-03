import React from "react";
import { Box } from "@mantine/core";
import { DefaultProps } from "@mantine/styles";
import useStyles from "./flex.styles";

export interface FlexProps extends DefaultProps {
  children?: React.ReactNode;
  direction?: React.CSSProperties["flexDirection"];
  justify?: React.CSSProperties["justifyContent"];
  align?: React.CSSProperties["alignItems"];
}

const Flex: React.FC<FlexProps> = ({
  children,
  direction,
  classNames,
  styles,
  className,
  justify,
  align,
  ...others
}) => {
  const { classes, cx } = useStyles(
    { direction, justifyContent: justify, alignItems: align },
    { styles, classNames, name: "Flex" }
  );
  return (
    <Box className={cx(classes.root, className)} {...others}>
      {children}
    </Box>
  );
};

export default Flex;
