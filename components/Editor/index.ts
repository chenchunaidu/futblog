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

export const ComponentMapping = {
  "Heading 1": Heading1Block,
  "Heading 2": Heading2Block,
  "Heading 3": Heading3Block,
  "Heading 4": Heading4Block,
  "Heading 5": Heading5Block,
  "Heading 6": Heading6Block,
  Code: CustomInlineCodeBlock,
  Text: CustomTextBlock,
  Image: CustomImageBlock,
  "Background Image": CustomBackgroundImageBlock,
  Quote: CustomQuoteBlock,
  List: CustomListBlock,
  Grid: CustomGridBlock,
};

export const AllComponents = Object.keys(ComponentMapping) as Array<
  keyof typeof ComponentMapping
>;

export const defaultBlock: Block = {
  componentName: "Text",
  props: ComponentMapping["Text"].defaultProps,
};
