import { Title, Text, TextProps, TitleProps } from "@mantine/core";
import { ContentEditableProps } from "../../types/editor.types";

export type CustomTextProps = TextProps<"div">;
const CustomText: React.FC<CustomTextProps> = (props) => {
  return (
    <Text
      {...props}
      contentEditable="true"
      suppressContentEditableWarning={true}
    ></Text>
  );
};

export type CustomTitleProps = TitleProps;
const CustomTitle: React.FC<CustomTitleProps> = (props) => {
  return (
    <Title
      contentEditable="true"
      {...props}
      suppressContentEditableWarning={true}
    ></Title>
  );
};

export const CustomTitleBlock = {
  component: CustomTitle,
  defaultProps: { children: "Title", order: 1 },
  inputs: [
    { type: "textarea", label: "Content", name: "children" },
    { type: "titleOrderSelect", label: "Order", name: "order" },
  ],
};

export const CustomTextBlock = {
  component: CustomText,
  defaultProps: { children: "Text", weight: "normal" },
  inputs: [
    { type: "textarea", label: "Content", name: "children" },
    { type: "fontWeightSelect", label: "Font weight", name: "weight" },
    { type: "fontSizeSelect", label: "Font size", name: "size" },
    { type: "color", label: "Color", name: "color" },
  ],
};
