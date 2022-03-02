import { createStyles } from "@mantine/styles";

interface FlexStyles {
  direction: React.CSSProperties["flexDirection"];
}

export default createStyles((theme, { direction }: FlexStyles) => ({
  root: { flexDirection: direction, display: "flex" },
}));
