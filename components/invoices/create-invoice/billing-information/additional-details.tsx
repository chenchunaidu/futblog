import React from "react";
import { Chips, Chip, Group, Paper } from "@mantine/core";
import Tax from "./tax";
import OtherDetails from "./other-details";
import Discount from "./discount";
import AttachFiles from "./attach-files";
import Shipping from "./shipping";
import { UseFormReturnType } from "@mantine/form/lib/use-form";
import { BasicInformation } from "../types";

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
  form: UseFormReturnType<BasicInformation>;
  index: number;
}

const AdditionalDetails: React.FC<AdditionalDetailsProps> = ({
  index,
  form,
}) => {
  const additionalDetailsComponents: Record<string, React.ReactNode> = {
    tax: <Tax key="tax" form={form} index={index} />,
    discount: <Discount key="tax" />,
    files: <AttachFiles key="tax" />,
    other: <OtherDetails key="tax" />,
    shipping: <Shipping key="tax" />,
  };

  return (
    <Group grow direction="column">
      <Chips multiple {...form.getListInputProps("billing", index, "chips")}>
        {additionalDetails.map(({ value, label, disabled }, index) => (
          <Chip value={value} key={index} disabled={disabled}>
            {label}
          </Chip>
        ))}
      </Chips>
      <Group direction="column" mt="sm" spacing="xs" grow>
        {form.values?.billing[index]?.chips.map((item: string, index) => (
          <Paper key={index} shadow="md" p="sm">
            {additionalDetailsComponents[item]}
          </Paper>
        ))}
      </Group>
    </Group>
  );
};

export default AdditionalDetails;
