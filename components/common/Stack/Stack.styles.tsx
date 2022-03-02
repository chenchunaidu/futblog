import { createStyles, MantineNumberSize } from "@mantine/styles";

interface StackStyles {
  spacing?: MantineNumberSize;
  direction: React.CSSProperties["flexDirection"];
}

export default createStyles(
  (theme, { direction, spacing = 0 }: StackStyles) => {
    const formattedSpacing = `${
      typeof spacing === "number" ? spacing : theme.spacing[spacing]
    }px`;
    return {
      root: {
        "& : not(:first-child)": {
          ...(direction === "column"
            ? { marginTop: formattedSpacing }
            : { marginLeft: formattedSpacing }),
        },
        display: "flex",
        flexDirection: direction,
      },
    };
  }
);
