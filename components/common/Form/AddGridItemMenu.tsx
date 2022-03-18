import { Menu, Button } from "@mantine/core";
import { BlockComponentMapping, AllBlockNames } from "../../Editor";

import { HandleAddGridItem } from "../../../types/editor.types";

interface SelectComponentMenuProps {
  handleAddGridItem: HandleAddGridItem;
  // index: number;
}

const AddGridItemMenu: React.FC<SelectComponentMenuProps> = ({
  handleAddGridItem,
}) => {
  return (
    <Menu
      position="right"
      control={<Button variant="light">Add grid item</Button>}
    >
      {AllBlockNames.map((blockName) => (
        <Menu.Item
          key={blockName}
          onClick={() => {
            handleAddGridItem({
              blockName,
              props: BlockComponentMapping[blockName].defaultProps,
            });
          }}
          disabled={blockName === "Grid"}
        >
          {blockName}
        </Menu.Item>
      ))}
    </Menu>
  );
};

export default AddGridItemMenu;
