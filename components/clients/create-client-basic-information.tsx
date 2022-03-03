import React, { Dispatch, SetStateAction } from "react";

import { TextInput, Group, Select, RadioGroup, Radio } from "@mantine/core";
import { formattedLanguages } from "../../data/all-languages";
import { formattedCurrencies } from "../../data/all-currencies";
import { UseForm } from "@mantine/hooks/lib/use-form/use-form";
import { CreateClientForm } from "./types";

interface CreateClientBasicInformationProps {
  form: UseForm<CreateClientForm>;
  clientType?: string;
  setClientType?: Dispatch<SetStateAction<string>>;
}

const CreateClientBasicInformation: React.FC<
  CreateClientBasicInformationProps
> = ({ form, clientType, setClientType }) => {
  return (
    <Group spacing="md" direction="column" grow>
      <RadioGroup
        label="Select client type"
        description="Select whether client is individual or organization"
        value={clientType}
        onChange={setClientType}
      >
        <Radio value="individual">Individual</Radio>
        <Radio value="organization">Organization</Radio>
      </RadioGroup>
      {clientType === "organization" ? (
        <TextInput
          data-autofocus
          placeholder="Organization name"
          label="Organization name"
          {...form.getInputProps("organizationName")}
        />
      ) : (
        ""
      )}

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
