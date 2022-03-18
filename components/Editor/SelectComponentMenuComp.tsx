import { Menu, ActionIcon } from "@mantine/core";
import { BlockComponentMapping, AllBlockNames } from ".";
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
      {AllBlockNames.map((blockName) => (
        <Menu.Item
          key={blockName}
          onClick={() =>
            handleAddBlock(index, {
              blockName,
              props: BlockComponentMapping[blockName].defaultProps,
            })
          }
        >
          {blockName}
        </Menu.Item>
      ))}
    </Menu>
  );
};

export default SelectComponentMenu;
