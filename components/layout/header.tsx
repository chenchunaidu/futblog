import { Text, Group } from "@mantine/core";
import React from "react";

export default function index() {
  const navItems = ["Dashboard", "Invoices", "Clients", "Calendar"];
  return (
    <Group
      sx={{ justifyContent: "space-between", padding: "1rem" }}
      direction="row"
    >
      <Group direction="row" spacing="xl">
        <Group>
          <Text>Logo</Text>
        </Group>
        <Group direction="row">
          {navItems.map((navItem) => (
            <Text key={navItem}>{navItem}</Text>
          ))}
        </Group>
      </Group>
      <Group>
        <Text>Profile</Text>
      </Group>
    </Group>
  );
}
