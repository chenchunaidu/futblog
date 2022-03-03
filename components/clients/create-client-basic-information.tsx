import React from "react";

import { TextInput, Group, Select } from "@mantine/core";
import { formattedLanguages } from "../../data/all-languages";
import { formattedCurrencies } from "../../data/all-currencies";
import { UseForm } from "@mantine/hooks/lib/use-form/use-form";
import { CreateClientForm } from "./types";

interface CreateClientBasicInformationProps {
  form: UseForm<CreateClientForm>;
}

const CreateClientBasicInformation: React.FC<
  CreateClientBasicInformationProps
> = ({ form }) => {
  return (
    <Group spacing="md" direction="column" grow>
      <Group grow align="flex-start">
        <TextInput
          data-autofocus
          placeholder="Your first name"
          label="First name"
          {...form.getInputProps("firstName")}
        />
        <TextInput
          placeholder="Your last name"
          label="Last name"
          {...form.getInputProps("lastName")}
        />
      </Group>
      <TextInput
        placeholder="Your email"
        label="Email"
        {...form.getInputProps("email")}
      />

      <Select
        data={formattedCurrencies}
        placeholder="Currency"
        label="Currency"
        searchable
        {...form.getInputProps("currency")}
      />
      <Select
        placeholder="Language"
        label="Language"
        data={formattedLanguages}
        searchable
        {...form.getInputProps("language")}
      />
    </Group>
  );
};

export default CreateClientBasicInformation;
