import { Block } from "../../types/editor.types";
import React from "react";
import { useLocalStorageValue } from "@mantine/hooks";

import { defaultBlock } from ".";
import cloneDeep from "lodash.clonedeep";
import { Group } from "@mantine/core";
import BlockWrapper from "./BlockWrapper";
import { nanoid } from "nanoid";

const EditorComp = () => {
  const [editorState, setEditorState] = useLocalStorageValue<Block[]>({
    key: "editorState",
    defaultValue: [
      {
        children: [],
        id: nanoid(),
        blockName: "Text",
        props: { children: "Some text" },
      },
      {
        children: [],
        id: nanoid(),
        blockName: "Title",
        props: { children: "Some text", order: 1 },
      },
      {
        children: [],
        id: nanoid(),
        blockName: "Background Image",
        props: {
          content: `Building large scale applications using react`,
          imageUrl:
            "https://bs-uploads.toptal.io/blackfish-uploads/components/seo/content/og_image_file/og_image/777655/react-context-api-4929b3703a1a7082d99b53eb1bbfc31f.png",
          textColor: "white",
          fontWeight: "bold",
          width: "100%",
          fontSize: "md",
          height: "500px",
        },
      },
    ],
  });

  return (
    <Group direction="column">
      {editorState.map((block) => (
        <BlockWrapper key={block.id} block={block} />
      ))}
    </Group>
  );
};

export default React.memo(EditorComp);
