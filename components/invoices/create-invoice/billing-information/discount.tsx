import React from "react";
import { Group, TextInput, Text } from "@mantine/core";

export default function Tax() {
  return (
    <Group grow direction="column" spacing="xs">
      <Text weight="600">Discount</Text>
      <Group direction="row" grow>
        <TextInput placeholder="Diwali sale" label="Name" />
        <TextInput placeholder="1000" label="Amount" />
      </Group>
    </Group>
  );
}
