import { CustomTextBlock, CustomTitleBlock } from "./CustomText";
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
  Title: CustomTitleBlock as ComponentBlockProps,
  Text: CustomTextBlock as ComponentBlockProps,
  Image: CustomImageBlock as ComponentBlockProps,
  "Background Image": CustomBackgroundImageBlock as ComponentBlockProps,
  Quote: CustomQuoteBlock as ComponentBlockProps,
  List: CustomListBlock as ComponentBlockProps,
  Grid: CustomGridBlock,
  Code: CustomPrismCodeBlock as ComponentBlockProps,
  "Inline Code": CustomInlineCodeBlock as ComponentBlockProps,
  Divider: CustomDividerBlock as ComponentBlockProps,
};

export const AllBlockNames = Object.keys(BlockComponentMapping) as Array<
  keyof typeof BlockComponentMapping
>;

export const defaultBlock: Block = {
  blockName: "Text",
  props: BlockComponentMapping["Text"].defaultProps,
};
