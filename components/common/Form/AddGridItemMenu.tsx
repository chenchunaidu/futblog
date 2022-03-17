import { Menu, Button } from "@mantine/core";
import { ComponentMapping, AllComponents } from "../../Editor";

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
      {AllComponents.map((componentName) => (
        <Menu.Item
          key={componentName}
          onClick={() => {
            handleAddGridItem({
              componentName,
              props: ComponentMapping[componentName].defaultProps,
            });
          }}
        >
          {componentName}
        </Menu.Item>
      ))}
    </Menu>
  );
};

export default AddGridItemMenu;
