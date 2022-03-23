import { List } from "@mantine/core";
import { getHotkeyHandler } from "@mantine/hooks";
import { useRecoilState } from "recoil";
import { editorStateAtom } from "../../atoms/editor.atom";
import { BlockComponentProps } from "../../types/editor.types";

export interface CustomListProps {
  listItems?: string[];
  variant?: "ordered" | "unordered";
}

const CustomList: React.FC<BlockComponentProps> = ({ blockId }) => {
  const [block, setBlock] = useRecoilState(editorStateAtom);
  const { props } = block[blockId];
  const { listItems = [], variant } = props as CustomListProps;

  return (
    <List type={variant}>
      {listItems.map((listItem, index) => (
        <List.Item
          contentEditable="true"
          suppressContentEditableWarning={true}
          key={index}
          // onKeyDown={getHotkeyHandler([["Enter", handleAddListItem]])}
        >
          {listItem}
        </List.Item>
      ))}
    </List>
  );
};

export default CustomList;
