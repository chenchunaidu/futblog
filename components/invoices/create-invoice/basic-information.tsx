import React from "react";

import { TextInput, Group, Select, Textarea } from "@mantine/core";
import { DatePicker } from "@mantine/dates";
import { formattedLanguages } from "../../../data/all-languages";
import { formattedCurrencies } from "../../../data/all-currencies";
import { BasicInformation } from "./types";
import { UseFormReturnType } from "@mantine/form/lib/use-form";

interface CreateInvoiceBasicInformationProps {
  form: UseFormReturnType<BasicInformation>;
}

const CreateInvoiceBasicInformation: React.FC<
  CreateInvoiceBasicInformationProps
> = ({ form }) => {
  return (
    <Group spacing="md" direction="column" grow>
      <form>
        <Group grow>
          <TextInput
            data-autofocus
            placeholder="June invoice"
            label="Name"
            {...form.getInputProps("name")}
          />
          <TextInput
            placeholder="INV-1"
            label="Invoice no."
            {...form.getInputProps("invoiceNo")}
          />
        </Group>

        <Textarea
          placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore eos laudantium "
          label="Description"
          {...form.getInputProps("description")}
        />

        <Select
          data={[]}
          placeholder="Client"
          label="Client"
          searchable
          {...form.getInputProps("client")}
        />
        <Group grow>
          <Select
            placeholder="Language"
            label="Language"
            data={formattedLanguages}
            searchable
            {...form.getInputProps("language")}
          />
          <Select
            data={formattedCurrencies}
            placeholder="Currency"
            label="Currency"
            searchable
            {...form.getInputProps("currency")}
          />
        </Group>
        <Group grow>
          <DatePicker
            placeholder="Event date"
            label="Event date"
            allowFreeInput
            {...form.getInputProps("eventDate")}
          />
          <DatePicker
            placeholder="Due date"
            label="Due date"
            allowFreeInput
            {...form.getInputProps("dueDate")}
          />
          <TextInput
            placeholder="Place order no."
            label="Place order no."
            {...form.getInputProps("placeOrderNo")}
          />
        </Group>
      </form>
    </Group>
  );
};

export default CreateInvoiceBasicInformation;
