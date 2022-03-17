import { FormList } from "@mantine/form/lib/form-list/form-list";
import { UseFormReturnType } from "@mantine/form/lib/use-form";
import { ComponentMapping } from "../components/Editor";
import { GridItem } from "../components/Editor/CustomGrid";

export interface StyleProps {
  [x: string]: string | number | boolean | GridItem[];
}

type componentName = keyof typeof ComponentMapping;
export interface Block {
  componentName: keyof typeof ComponentMapping;
  props?: StyleProps;
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

export type HandleSelectedBlockChange = (props: StyleProps) => void;
