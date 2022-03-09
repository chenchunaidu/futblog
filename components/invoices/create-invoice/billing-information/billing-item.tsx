import {
  Group,
  Textarea,
  TextInput,
  Paper,
  Button,
  ActionIcon,
  Text,
} from "@mantine/core";
import React from "react";
import { MdOutlineDeleteOutline } from "react-icons/md";
import AdditionalDetails from "./additional-details";
import { BillingItem, HandleItemChange } from "./types";

//TODO: rename item

interface CreateInvoiceBillingInfoItemProps {
  index: number;
  handleDeleteItem: (index: number) => void;
  handleAddItem: () => void;
  item: Partial<BillingItem>;
  handleItemChange: HandleItemChange;
}

const CreateInvoiceBillingInfoItem: React.FC<
  CreateInvoiceBillingInfoItemProps
> = ({ index, handleAddItem, handleItemChange, handleDeleteItem, item }) => {
  const {
    description,
    name,
    quantity,
    rate,
    amount,
    discount = {},
    shipping = {},
    tax = {},
    chips = [],
  } = item;
  return (
    <div>
      <Paper shadow="lg" padding="sm" key={index}>
        {index > 0 ? (
          <Group position="right" sx={{ width: "100%" }}>
            <ActionIcon
              variant="light"
              color="red"
              onClick={() => handleDeleteItem(index)}
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
            value={name}
            onChange={(e) => handleItemChange(index, "name", e.target.value)}
          />
          <Group direction="column" grow>
            <Textarea
              placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore eos laudantium "
              label="Description"
              value={description}
              onChange={(e) =>
                handleItemChange(index, "description", e.target.value)
              }
            />
          </Group>
          <Group grow>
            <TextInput
              placeholder="Quantity"
              label="Quantity"
              value={quantity}
              onChange={(e) =>
                handleItemChange(index, "quantity", e.target.value)
              }
            />
            <TextInput
              placeholder="Rate"
              label="Rate"
              value={rate}
              onChange={(e) => handleItemChange(index, "rate", e.target.value)}
            />
            <TextInput
              placeholder="Amount"
              label="Amount"
              value={amount}
              onChange={(e) =>
                handleItemChange(index, "amount", e.target.value)
              }
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
          <AdditionalDetails
            index={index}
            discount={discount}
            tax={tax}
            shipping={shipping}
            handleItemChange={handleItemChange}
            chips={chips}
          />
          <Button variant="light" onClick={handleAddItem}>
            Add item
          </Button>
        </Group>
      </Paper>
    </div>
  );
};

export default CreateInvoiceBillingInfoItem;
