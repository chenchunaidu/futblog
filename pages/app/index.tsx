import { Group } from "@mantine/core";
import React from "react";

export default function index() {
  return (
    <Group
      spacing="sm"
      sx={{ justifyContent: "space-between" }}
      direction="row"
    >
      <Group>Something</Group>
      <Group>Something</Group>
    </Group>
  );
}
