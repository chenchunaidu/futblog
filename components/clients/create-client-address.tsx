import React from "react";

import { TextInput, Group, Select } from "@mantine/core";
import { countries } from "../../data/all-countries";
import { UseForm } from "@mantine/hooks/lib/use-form/use-form";
import { CreateClientForm } from "./types";

interface CreateClientAddressProps {
  form: UseForm<CreateClientForm>;
}

const CreateClientAddress: React.FC<CreateClientAddressProps> = ({ form }) => {
  return (
    <Group spacing="sm" direction="column" grow>
      <TextInput
        data-autofocus
        placeholder="Street 1"
        label="Street 1"
        {...form.getInputProps("street1")}
      />

      <TextInput
        placeholder="Street 2"
        label="Street 2"
        {...form.getInputProps("street2")}
      />
      <Group grow>
        <TextInput
          data-autofocus
          placeholder="Pin code"
          label="Pin code"
          {...form.getInputProps("pinCode")}
        />
        <TextInput
          data-autofocus
          placeholder="City"
          label="City"
          {...form.getInputProps("city")}
        />
      </Group>
      <Group grow>
        <TextInput
          data-autofocus
          placeholder="State"
          label="State"
          {...form.getInputProps("state")}
        />
        <Select
          placeholder="Country"
          label="Country"
          data={countries}
          searchable
          {...form.getInputProps("country")}
        />
      </Group>
    </Group>
  );
};

export default CreateClientAddress;
