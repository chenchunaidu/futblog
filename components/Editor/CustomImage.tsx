import { Image } from "@mantine/core";

export const CustomImageBlock = {
  component: Image,
  defaultProps: {
    withPlaceholder: true,
    width: 200,
    height: 120,
    alt: "With default placeholder",
    src: "",
    caption: "My dog begging for treats",
  },
};
