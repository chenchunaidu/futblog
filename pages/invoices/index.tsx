/* eslint-disable @typescript-eslint/no-misused-promises */
import { Group, Button, Paper } from "@mantine/core";
import Flex from "../../components/common/flex";
import InvoiceCards from "../../components/invoices/invoice-cards";
import { useRouter } from "next/router";
//TODO: do invoice cards like client card
//TODO: Add invoice modal
//TODO: Show all invoice cards

export default function Invoices() {
  const router = useRouter();

  return (
    <Group direction="column">
      <Flex sx={{ width: "100%" }} justify="flex-end">
        <Button onClick={() => router.push("/invoices/create")}>
          New invoice
        </Button>
      </Flex>

      <InvoiceCards />
    </Group>
  );
}
