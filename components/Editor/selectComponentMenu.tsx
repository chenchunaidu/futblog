import { Menu, ActionIcon } from "@mantine/core";
import { ComponentMapping, AllComponents } from ".";
import { AiFillPlusCircle } from "react-icons/ai";
import { HandleAddBlock } from "../../types/editor.types";

interface SelectComponentMenuProps {
  handleAddBlock: HandleAddBlock;
  index: number;
}

const SelectComponentMenu: React.FC<SelectComponentMenuProps> = ({
  handleAddBlock,
  index,
}) => {
  return (
    <Menu
      position="right"
      control={
        <ActionIcon variant="hover" size="md">
          <AiFillPlusCircle size={24} />
        </ActionIcon>
      }
    >
      {AllComponents.map((componentName) => (
        <Menu.Item
          key={componentName}
          onClick={() =>
            handleAddBlock(index, {
              componentName,
              props: ComponentMapping[componentName].defaultProps,
            })
          }
        >
          {componentName}
        </Menu.Item>
      ))}
    </Menu>
  );
};

export default SelectComponentMenu;
