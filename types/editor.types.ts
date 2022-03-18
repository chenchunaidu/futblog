import { SelectItem } from "@mantine/core";
import { FormList } from "@mantine/form/lib/form-list/form-list";
import { UseFormReturnType } from "@mantine/form/lib/use-form";
import { inputComponentMapping } from "../components/common/Form";
import { BlockComponentMapping } from "../components/Editor";
import { GridItem } from "../components/Editor/CustomGrid";

export interface BlockProps {
  [x: string]: string | number | boolean | GridItem[];
}

export interface Block {
  blockName: keyof typeof BlockComponentMapping;
  props?: BlockProps;
}

export interface EditorFormInput {
  blocks: FormList<Block>;
}

export type EditorForm = UseFormReturnType<EditorFormInput>;

export type HandleAddBlock = (index: number, block?: Block) => void;

export type HandleDeleteBlock = (index: number) => void;

export type HandleDuplicateBlock = (index: number) => void;

export type HandleSelectBlock = (index: number) => void;

export type HandleAddGridItem = (block: Block) => void;

export type HandleSelectedBlockChange = (props: BlockProps) => void;

// block input

export type HandleBlockPropsValue =
  | string
  | number
  | boolean
  | React.ChangeEvent<HTMLInputElement>
  | React.ChangeEvent<HTMLTextAreaElement>
  | undefined;

export type HandleBlockPropsChange = (
  label: string,
  value: HandleBlockPropsValue
) => void;

export type HandleGridItemChange = (
  label: string,
  value: HandleBlockPropsValue,
  props: BlockProps | undefined
) => void;

export interface BlockPropsInput {
  type: keyof typeof inputComponentMapping;
  options?: (string | SelectItem)[];
  label?: string;
  name: string;
}

interface ComponentBlockProps {
  component: React.FC;
  defaultProps: BlockProps;
  inputs: BlockPropsInput[];
}

export type { ComponentBlockProps };
