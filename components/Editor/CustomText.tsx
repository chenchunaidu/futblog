import { Title, Text } from "@mantine/core";

export const CustomTitleBlock = {
  component: Title,
  defaultProps: { children: "Title", order: 1 },
  inputs: [
    { type: "textarea", label: "Content", name: "children" },
    { type: "titleOrderSelect", label: "Order", name: "order" },
  ],
};

export const CustomTextBlock = {
  component: Text,
  defaultProps: { children: "Text", weight: "normal" },
  inputs: [
    { type: "textarea", label: "Content", name: "children" },
    { type: "fontWeightSelect", label: "Font weight", name: "weight" },
    { type: "fontSizeSelect", label: "Font size", name: "size" },
    { type: "color", label: "Color", name: "color" },
  ],
};
