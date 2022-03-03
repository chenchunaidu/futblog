import { Group, Button, Paper } from "@mantine/core";
import Flex from "../../components/common/flex";
import InvoiceTable from "../../components/invoices/table";

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
