/* eslint-disable @typescript-eslint/no-misused-promises */
import { Group, Button, Paper } from "@mantine/core";
import InvoiceCards from "../../components/invoices/invoice-cards";
import { useRouter } from "next/router";
//TODO: do invoice cards like client card
//TODO: Add invoice modal
//TODO: Show all invoice cards

export default function Invoices() {
  const router = useRouter();

  return (
    <Group direction="column">
      <Button onClick={() => router.push("/invoices/create")}>
        New invoice
      </Button>

      <InvoiceCards />
    </Group>
  );
}
