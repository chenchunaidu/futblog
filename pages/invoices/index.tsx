import { Group, Button, Paper } from "@mantine/core";
import Flex from "../../components/common/flex";
import InvoiceTable from "../../components/invoices/table";

//TODO: do invoice cards like client card
//TODO: Add invoice modal
//TODO: Show all invoice cards

export default function Invoices() {
  return (
    <Group direction="column">
      <Flex sx={{ width: "100%" }} justify="flex-end">
        <Button>New invoice</Button>
      </Flex>
      <Paper sx={{ width: "100%" }}>
        <InvoiceTable />
      </Paper>
    </Group>
  );
}
