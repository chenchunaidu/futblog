import {
  Group,
  Textarea,
  TextInput,
  Paper,
  Button,
  ActionIcon,
  Text,
} from "@mantine/core";
import { UseFormReturnType } from "@mantine/form/lib/use-form";
import React from "react";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { BasicInformation } from "../types";
import AdditionalDetails from "./additional-details";
import { BillingItem, HandleItemChange } from "./types";

//TODO: rename item

interface CreateInvoiceBillingInfoItemProps {
  index: number;
  form: UseFormReturnType<BasicInformation>;
}

const CreateInvoiceBillingInfoItem: React.FC<
  CreateInvoiceBillingInfoItemProps
> = ({ index, form }) => {
  return (
    <div>
      <Paper shadow="lg" p="sm" key={index}>
        {index > 0 ? (
          <Group position="right" sx={{ width: "100%" }}>
            <ActionIcon
              variant="light"
              color="red"
              onClick={() => form.removeListItem("billing", index)}
            >
              <MdOutlineDeleteOutline size="24px" />
            </ActionIcon>
          </Group>
        ) : (
          ""
        )}

        <Group grow direction="column">
          <TextInput
            placeholder="Item name"
            label="Item name"
            {...form.getListInputProps("billing", index, "name")}
          />
          <Group direction="column" grow>
            <Textarea
              placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore eos laudantium "
              label="Description"
              {...form.getListInputProps("billing", index, "description")}
            />
          </Group>
          <Group grow>
            <TextInput
              placeholder="Quantity"
              label="Quantity"
              {...form.getListInputProps("billing", index, "quantity")}
            />
            <TextInput
              placeholder="Rate"
              label="Rate"
              {...form.getListInputProps("billing", index, "rate")}
            />
            <TextInput
              placeholder="Amount"
              label="Amount"
              {...form.getListInputProps("billing", index, "amount")}
            />
          </Group>
          <Group spacing={0} mt="sm">
            <Text size="md" weight="bold">
              Additional details
            </Text>
            <Text size="sm">
              Select additional details you want to add by clicking on chip
            </Text>
          </Group>
          <AdditionalDetails index={index} form={form} />
          <Button
            variant="light"
            onClick={() =>
              form.addListItem("billing", {
                name: "",
                description: "",
                quantity: "",
                rate: "",
                amount: "",
                chips: [],
                discount: {},
                // tax: {},
                shipping: {},
              })
            }
          >
            Add item
          </Button>
        </Group>
      </Paper>
    </div>
  );
};

export default CreateInvoiceBillingInfoItem;
