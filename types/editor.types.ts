export interface Block {
  id: string;
  blockName: string;
  props: any;
  children: Block[];
}
