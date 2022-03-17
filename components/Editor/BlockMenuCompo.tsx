import { Menu, Text, ActionIcon } from "@mantine/core";
import { Trash, Copy } from "tabler-icons-react";
import { BsThreeDotsVertical } from "react-icons/bs";
interface BlockMenuProps {
  onDeleteBlock: () => void;
  onDuplicateBlock: () => void;
}

//TODO: Menu options
//TODO: Turn into [Select component to render]
//TODO: Preview components

const BlockMenu: React.FC<BlockMenuProps> = ({
  onDeleteBlock,
  onDuplicateBlock,
}) => {
  return (
    <Menu
      control={
        <ActionIcon size="md" variant="hover">
          <BsThreeDotsVertical />
        </ActionIcon>
      }
    >
      <Menu.Label>Application</Menu.Label>
      <Menu.Item icon={<Trash size={14} />} onClick={onDeleteBlock}>
        Delete
      </Menu.Item>
      <Menu.Item
        icon={<Copy size={14} />}
        rightSection={
          <Text size="xs" color="dimmed">
            ⌘D
          </Text>
        }
        onClick={onDuplicateBlock}
      >
        Duplicate
      </Menu.Item>
    </Menu>
  );
};

export default BlockMenu;
