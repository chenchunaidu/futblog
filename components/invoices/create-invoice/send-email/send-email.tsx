import { Group, Text, Divider, Button, ActionIcon } from "@mantine/core";
import React from "react";
import Item from "./item";

export default function CreateInvoiceSendEmail() {
  const allItems = [1, 2, 3, 4];
  return (
    <Group direction="column" grow>
      <Text size="lg" weight="bold">
        Total
      </Text>
      {allItems.map((item, index) => (
        <Item key={index} />
      ))}
      <Divider sx={{ width: "100%" }} variant="dashed" />
      <Group position="apart" sx={{ width: "100%" }}>
        <Text weight="600">Total</Text>
        <Text color="gray">400</Text>
      </Group>
      <Group grow>
        <Button variant="light" disabled>
          Preview PDF
        </Button>
        <Button variant="light" disabled>
          Preview Email
        </Button>
        <Button variant="light">Save for later</Button>
      </Group>
    </Group>
  );
}
