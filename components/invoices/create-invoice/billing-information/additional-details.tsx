import React, { useState } from "react";
import { Chips, Chip, Text, Group, Paper } from "@mantine/core";
import Tax from "./tax";
import OtherDetails from "./other-details";
import Discount from "./discount";
import AttachFiles from "./attach-files";
import Shipping from "./shipping";
import {
  Discount as DiscountInterface,
  HandleItemChange,
  Shipping as ShippingInterface,
  Tax as TaxInterface,
} from "./types";

const additionalDetails = [
  {
    label: "Discount",
    value: "discount",
  },
  {
    label: "Tax",
    value: "tax",
  },
  {
    label: "Attach Files",
    value: "files",
    disabled: true,
  },
  {
    label: "Shipping",
    value: "shipping",
  },
  {
    label: "Other details",
    value: "other",
    disabled: true,
  },
];

interface AdditionalDetailsProps {
  discount: Partial<DiscountInterface>;
  tax: Partial<TaxInterface>;
  shipping: Partial<ShippingInterface>;
  handleItemChange: HandleItemChange;
  chips: string[];
  index: number;
}

const AdditionalDetails: React.FC<AdditionalDetailsProps> = ({
  discount = {},
  tax = {},
  shipping = {},
  handleItemChange,
  index,
  chips,
}) => {
  const additionalDetailsComponents: Record<string, React.ReactNode> = {
    tax: (
      <Tax
        key="tax"
        {...tax}
        index={index}
        handleItemChange={handleItemChange}
      />
    ),
    discount: <Discount key="tax" />,
    files: <AttachFiles key="tax" />,
    other: <OtherDetails key="tax" />,
    shipping: <Shipping key="tax" />,
  };

  return (
    <Group grow direction="column">
      <Chips
        multiple
        value={chips}
        onChange={(e) => {
          handleItemChange(index, "chips", e);
        }}
      >
        {additionalDetails.map(({ value, label, disabled }, index) => (
          <Chip value={value} key={index} disabled={disabled}>
            {label}
          </Chip>
        ))}
      </Chips>
      <Group direction="column" mt="sm" spacing="xs" grow>
        {chips.map((item: string, index) => (
          <Paper key={index} shadow="md" padding="sm">
            {additionalDetailsComponents[item]}
          </Paper>
        ))}
      </Group>
    </Group>
  );
};

export default AdditionalDetails;
