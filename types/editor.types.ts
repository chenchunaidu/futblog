import { FormList } from "@mantine/form/lib/form-list/form-list";
import { UseFormReturnType } from "@mantine/form/lib/use-form";

export interface Block {
  content: string;
}

export interface EditorFormInput {
  blocks: FormList<Block>;
}

export type EditorForm = UseFormReturnType<EditorFormInput>;

export type HandleAddBlock = (index: number, block?: Block) => void;

export type HandleDeleteBlock = (index: number) => void;

export type HandleDuplicateBlock = (index: number) => void;
