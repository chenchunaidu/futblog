import { createStyles } from "@mantine/styles";

interface FlexStyles {
  direction: React.CSSProperties["flexDirection"];
  justifyContent: React.CSSProperties["justifyContent"];
  alignItems: React.CSSProperties["alignItems"];
}

export default createStyles(
  (theme, { direction, justifyContent, alignItems }: FlexStyles) => ({
    root: {
      flexDirection: direction,
      display: "flex",
      justifyContent,
      alignItems,
    },
  })
);
