import { FormList } from "@mantine/form/lib/form-list/form-list";
import { BillingItem } from "./billing-information/types";

export interface BasicInformation {
  name: string;
  invoiceNo: string;
  description: string;
  language: string;
  currency: string;
  eventDate: string;
  dueDate: string;
  placeOrderNo: string;
  client: string;
  billing: FormList<BillingItem>;
}
