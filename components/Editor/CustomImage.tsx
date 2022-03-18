import { Image } from "@mantine/core";

export const CustomImageBlock = {
  component: Image,
  defaultProps: {
    withPlaceholder: true,

    alt: "With default placeholder",
    src: "",
    caption: "My dog begging for treats",
  },
  inputs: [
    { type: "text", name: "alt", label: "Alt" },
    { type: "text", name: "width", label: "Width" },
    { type: "text", name: "height", label: "Height" },
    { type: "text", name: "src", label: "Image URL" },
    { type: "text", name: "caption", label: "Caption" },
  ],
};
