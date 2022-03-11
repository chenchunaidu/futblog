import { Group } from "@mantine/core";
import React from "react";
import CreateInvoiceBillingInfoItem from "./billing-item";

import { UseFormReturnType } from "@mantine/form/lib/use-form";
import { BasicInformation } from "../types";
// TODO: add tax
// TODO: add and delete description [id issue delete is not working properly]
// TODO: file attaches
interface InvoiceBillingInformationProps {
  form: UseFormReturnType<BasicInformation>;
}

const InvoiceBillingInformation: React.FC<InvoiceBillingInformationProps> = ({
  form,
}) => {
  return (
    <Group direction="column" grow>
      {form.values.billing.map((_, index) => (
        <CreateInvoiceBillingInfoItem form={form} index={index} key={index} />
      ))}
    </Group>
  );
};

export default InvoiceBillingInformation;
