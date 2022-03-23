import { blockNameComponentMapping } from "../components/Editor/data";

export interface BlockComponentProps {
  blockId: string;
}

export type Block = Record<string, BlockItem>;
export interface BlockItem {
  id: string;
  blockName: keyof typeof blockNameComponentMapping;
  props: Record<string, unknown>;
  children: string[];
  selected?: boolean;
}

export type HandleEditorStateChange = () => void;

export type HandleSetSelectedBlock = (block: Block) => void;
