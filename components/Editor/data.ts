import { nanoid } from "nanoid";
import { Block } from "../../types/editor.types";
import CustomButton from "./Button";
import Column from "./Column";
import CustomImage from "./Image";
import CustomList from "./List";
import Row from "./Row";
import CustomText from "./Text";
import { Heading1, Heading2, Heading3 } from "./Title";

export const blockNameComponentMapping = {
  Row: { component: Row },
  Text: { component: CustomText },
  Column: { component: Column },
  "Heading 1": { component: Heading1 },
  "Heading 2": { component: Heading2 },
  "Heading 3": { component: Heading3 },
  Image: { component: CustomImage },
  Button: { component: CustomButton },
  List: { component: CustomList },
};

export const SampleEditorState: Block = {
  root: {
    id: nanoid(),
    blockName: "Row",
    children: ["comp-123", "comp-124", "comp-125", "comp-126"],
    props: {},
  },
  "comp-123": {
    id: nanoid(),
    blockName: "Text",
    children: [],
    props: { content: "Text" },
  },

  "comp-124": {
    id: nanoid(),
    blockName: "Heading 1",
    children: [],
    props: { content: "Something 1", order: 1 },
  },
  "comp-125": {
    id: nanoid(),
    blockName: "Heading 1",
    children: [],
    props: { content: "Something 2", order: 2 },
  },
  "comp-126": {
    id: nanoid(),
    blockName: "Heading 1",
    children: [],
    props: { content: "Something 3", order: 3 },
  },
};
