import { Title, Text } from "@mantine/core";

export const CustomTitleBlock = {
  component: Title,
  defaultProps: { children: "Title", order: 1 },
  inputs: [
    { type: "textarea", label: "Content", name: "children" },
    { type: "number", label: "Order", name: "order" },
  ],
};

export const Heading1Block = {
  component: Title,
  defaultProps: { children: "Title", order: 1 },
  inputs: CustomTitleBlock.inputs,
};
export const Heading2Block = {
  component: Title,
  defaultProps: { children: "Title", order: 2 },
  inputs: CustomTitleBlock.inputs,
};
export const Heading3Block = {
  component: Title,
  defaultProps: { children: "Title", order: 3 },
  inputs: CustomTitleBlock.inputs,
};
export const Heading4Block = {
  component: Title,
  defaultProps: { children: "Title", order: 4 },
  inputs: CustomTitleBlock.inputs,
};
export const Heading5Block = {
  component: Title,
  defaultProps: { children: "Title", order: 5 },
  inputs: CustomTitleBlock.inputs,
};
export const Heading6Block = {
  component: Title,
  defaultProps: { children: "Title", order: 6 },
  inputs: CustomTitleBlock.inputs,
};

export const CustomTextBlock = {
  component: Text,
  defaultProps: { children: "Text" },
  inputs: [{ type: "textarea", label: "Content", name: "children" }],
};
