import React from "react";
import { Group, TextInput, Text } from "@mantine/core";
import { Tax as TaxInterface, HandleItemChange } from "./types";

interface TaxProps extends Partial<TaxInterface> {
  handleItemChange: HandleItemChange;
  index: number;
}

const Tax: React.FC<TaxProps> = ({ name, amount, handleItemChange, index }) => {
  return (
    <Group grow direction="column" spacing="xs">
      <Text weight="600">Taxes</Text>
      <Group direction="row" grow>
        <TextInput
          placeholder="GST"
          label="Name"
          value={name}
          onChange={(e) =>
            handleItemChange(index, "tax", { name: e.target.value })
          }
        />
        <TextInput placeholder="1000" label="Amount" value={amount} />
      </Group>
    </Group>
  );
};

export default Tax;
