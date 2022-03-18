import { List } from "@mantine/core";

interface CustomListProps {
  listItems?: string;
}

const CustomList: React.FC<CustomListProps> = ({ listItems }) => {
  const list =
    typeof listItems === "string" ? listItems?.split(",") : listItems;
  return (
    <List>
      {list?.map((listItem, index) => (
        <List.Item key={index}>{listItem}</List.Item>
      ))}
    </List>
  );
};

export default CustomList;

export const CustomListBlock = {
  component: CustomList,
  defaultProps: { listItems: "First Item" },
  inputs: [],
};
