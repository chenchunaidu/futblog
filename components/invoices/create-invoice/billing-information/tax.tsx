import React from "react";
import { Group, TextInput, Text } from "@mantine/core";
import { Tax as TaxInterface, HandleItemChange } from "./types";
import { UseFormReturnType } from "@mantine/form/lib/use-form";
import { BasicInformation } from "../types";

interface TaxProps extends Partial<TaxInterface> {
  form: UseFormReturnType<BasicInformation>;
  index: number;
}

const Tax: React.FC<TaxProps> = ({ form, index }) => {
  return (
    <Group grow direction="column" spacing="xs">
      <Text weight="600">Taxes</Text>
      <Group direction="row" grow>
        <TextInput
          placeholder="GST"
          label="Name"
          {...form.getListInputProps("billing", index, "taxName")}
        />
        <TextInput
          placeholder="1000"
          label="Amount"
          {...form.getListInputProps("billing", index, "taxAmount")}
        />
      </Group>
    </Group>
  );
};

export default Tax;
