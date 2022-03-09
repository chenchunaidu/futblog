import React from "react";
import { Group, TextInput, Text } from "@mantine/core";

export default function Shipping() {
  return (
    <Group grow direction="column" spacing="xs">
      <Text weight="600">Shipping</Text>
      <Group direction="row" grow>
        <TextInput placeholder="Courier" label="Name" />
        <TextInput placeholder="1000" label="Amount" />
      </Group>
    </Group>
  );
}
