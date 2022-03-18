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
import { Block } from "../../types/editor.types";
import { CustomInlineCodeBlock } from "./CustomInlineCode";
import { CustomQuoteBlock } from "./CustomQuote";
import { CustomListBlock } from "./CustomList";
import { CustomGridBlock } from "./CustomGrid";
import { ComponentBlockProps } from "../../types/editor.types";
import { CustomPrismCodeBlock } from "./CustomPrismCode";
import { CustomDividerBlock } from "./CustomDivider";

export const BlockComponentMapping = {
  "Heading 1": Heading1Block as ComponentBlockProps,
  "Heading 2": Heading2Block as ComponentBlockProps,
  "Heading 3": Heading3Block as ComponentBlockProps,
  "Heading 4": Heading4Block as ComponentBlockProps,
  "Heading 5": Heading5Block as ComponentBlockProps,
  "Heading 6": Heading6Block as ComponentBlockProps,
  "Inline Code": CustomInlineCodeBlock as ComponentBlockProps,
  Text: CustomTextBlock as ComponentBlockProps,
  Image: CustomImageBlock as ComponentBlockProps,
  "Background Image": CustomBackgroundImageBlock as ComponentBlockProps,
  Quote: CustomQuoteBlock as ComponentBlockProps,
  List: CustomListBlock as ComponentBlockProps,
  Grid: CustomGridBlock,
  Code: CustomPrismCodeBlock as ComponentBlockProps,
  Divider: CustomDividerBlock as ComponentBlockProps,
};

export const AllBlockNames = Object.keys(BlockComponentMapping) as Array<
  keyof typeof BlockComponentMapping
>;

export const defaultBlock: Block = {
  blockName: "Text",
  props: BlockComponentMapping["Text"].defaultProps,
};
