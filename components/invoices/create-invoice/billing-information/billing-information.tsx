import { Group, Text } from "@mantine/core";
import React, { useState } from "react";
import CreateInvoiceBillingInfoItem from "./billing-item";
import { nanoid } from "nanoid";
import { BillingItem, HandleItemChange, Tax as TaxInterface } from "./types";
// TODO: add tax
// TODO: add and delete description [id issue delete is not working properly]
// TODO: file attaches

export default function CreateInvoiceBillingInformation() {
  const [items, setItems] = useState<Partial<BillingItem>[]>([
    { id: nanoid() },
  ]);

  const handleAddItem = () => {
    const id = nanoid();
    setItems([...items, { id }]);
  };

  const handleDeleteItem = (itemIndex: number) => {
    const newItems = items.filter((item, index) => itemIndex !== index);
    setItems(newItems);
  };

  const handleItemChange: HandleItemChange = (itemIndex, key, value) => {
    const currentItems = items;
    if (currentItems[itemIndex]) {
      if (key === "tax" || key === "shipping" || key === "discount") {
        if (typeof value === "object" && !Array.isArray(value)) {
          currentItems[itemIndex][key] = {
            ...currentItems[itemIndex][key],
            ...value,
          };
        }
      } else if (key === "chips") {
        if (Array.isArray(value)) currentItems[itemIndex][key] = [...value];
      } else {
        if (typeof value === "string") {
          currentItems[itemIndex][key] = value;
        }
      }
    }
    setItems([...currentItems]);
  };

  return (
    <Group direction="column" grow>
      {items.map((item, index) => (
        <CreateInvoiceBillingInfoItem
          index={index}
          key={item?.id}
          item={item}
          handleAddItem={handleAddItem}
          handleDeleteItem={handleDeleteItem}
          handleItemChange={handleItemChange}
        />
      ))}
    </Group>
  );
}
