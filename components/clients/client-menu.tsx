import { Menu, Divider, Text } from "@mantine/core";

import { MdEdit, MdDeleteOutline } from "react-icons/md";

export default function ClientMenu() {
  return (
    <Menu>
      <Menu.Label>Client</Menu.Label>
      <Menu.Item icon={<MdEdit />}>Edit Client</Menu.Item>

      <Divider />
      <Menu.Label>Danger zone</Menu.Label>
      <Menu.Item color="red" icon={<MdDeleteOutline />}>
        Delete Client
      </Menu.Item>
    </Menu>
  );
}
