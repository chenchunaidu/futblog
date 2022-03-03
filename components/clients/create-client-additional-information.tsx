import React from "react";

import { TextInput, Group, Textarea } from "@mantine/core";
import { UseForm } from "@mantine/hooks/lib/use-form/use-form";
import { CreateClientForm } from "./types";

interface CreateClientAdditionalInformationProps {
  form: UseForm<CreateClientForm>;
}

const CreateClientAdditionalInformation: React.FC<
  CreateClientAdditionalInformationProps
> = ({ form }) => {
  return (
    <Group spacing="md" direction="column" grow>
      <Group grow>
        <TextInput
          data-autofocus
          placeholder="Phone number"
          label="Phone number"
          {...form.getInputProps("phoneNumber")}
        />
        <TextInput
          placeholder="Fax Number"
          label="Fax Number"
          {...form.getInputProps("faxNumber")}
        />
      </Group>

      <TextInput
        placeholder="Tax Identification Number"
        label="Tax Identification Number"
        {...form.getInputProps("taxIdentificationNumber")}
      />

      <Textarea
        placeholder="Notes"
        label="Notes"
        {...form.getInputProps("notes")}
      />
    </Group>
  );
};

export default CreateClientAdditionalInformation;
