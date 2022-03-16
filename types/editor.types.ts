import { FormList } from "@mantine/form/lib/form-list/form-list";
import { UseFormReturnType } from "@mantine/form/lib/use-form";
import React from "react";
import { ComponentMapping } from "../components/Editor";

export interface StyleProps {
  [x: string]: any;
}
export interface Block {
  componentName: keyof typeof ComponentMapping;
  props?: StyleProps;
  quantity?: number;
  direction?: React.CSSProperties["flexDirection"];
}

export interface EditorFormInput {
  blocks: FormList<Block>;
}

export type EditorForm = UseFormReturnType<EditorFormInput>;

export type HandleAddBlock = (index: number, block?: Block) => void;

export type HandleDeleteBlock = (index: number) => void;

export type HandleDuplicateBlock = (index: number) => void;

export type HandleSelectBlock = (index: number) => void;

export type HandleSelectedBlockChange = (value: string) => void;
