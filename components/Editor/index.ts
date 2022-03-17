import {
  Heading1Block,
  Heading2Block,
  Heading3Block,
  Heading4Block,
  Heading5Block,
  Heading6Block,
  CustomTextBlock,
} from "./CustomText";
import { CustomBackgroundImageBlock } from "./CustomBackgroundImage";
import { CustomImageBlock } from "./CustomImage";
import { Block, StyleProps } from "../../types/editor.types";
import { CustomInlineCodeBlock } from "./CustomInlineCode";
import { CustomQuoteBlock } from "./CustomQuote";
import { CustomListBlock } from "./CustomList";
import { CustomGridBlock } from "./CustomGrid";
import React from "react";
import { CustomInputProps } from "../common/Form";

interface CustomBlockProps {
  component: React.FC;
  defaultProps: StyleProps;
  inputs: CustomInputProps[];
}

export type { CustomBlockProps };

export const ComponentMapping = {
  "Heading 1": Heading1Block as CustomBlockProps,
  "Heading 2": Heading2Block as CustomBlockProps,
  "Heading 3": Heading3Block as CustomBlockProps,
  "Heading 4": Heading4Block as CustomBlockProps,
  "Heading 5": Heading5Block as CustomBlockProps,
  "Heading 6": Heading6Block as CustomBlockProps,
  Code: CustomInlineCodeBlock as CustomBlockProps,
  Text: CustomTextBlock as CustomBlockProps,
  Image: CustomImageBlock as CustomBlockProps,
  "Background Image": CustomBackgroundImageBlock as CustomBlockProps,
  Quote: CustomQuoteBlock as CustomBlockProps,
  List: CustomListBlock as CustomBlockProps,
  Grid: CustomGridBlock,
};

export const AllComponents = Object.keys(ComponentMapping) as Array<
  keyof typeof ComponentMapping
>;

export const defaultBlock: Block = {
  componentName: "Text",
  props: ComponentMapping["Text"].defaultProps,
};
