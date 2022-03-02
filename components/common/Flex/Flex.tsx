import React from "react";
import { Box } from "@mantine/core";
import { DefaultProps } from "@mantine/styles";
import useStyles from "./Flex.styLes";

export interface FlexProps extends DefaultProps {
  children?: React.ReactNode;
  direction?: React.CSSProperties["flexDirection"];
}

const Flex: React.FC<FlexProps> = ({
  children,
  direction,
  classNames,
  styles,
  className,
  ...others
}) => {
  const { classes, cx } = useStyles(
    { direction },
    { styles, classNames, name: "Flex" }
  );
  return (
    <Box className={cx(classes.root, className)} {...others}>
      {children}
    </Box>
  );
};

export default Flex;
