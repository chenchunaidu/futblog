import { Group, Button, Paper } from "@mantine/core";
import Flex from "../../components/common/flex";
import ClientCards from "../../components/clients/client-cards";
import CreateClientModal from "../../components/clients/create-client-modal";
import CreateClientDrawer from "../../components/clients/create-client-drawer";

export default function Clients() {
  return (
    <Group direction="column">
      <Flex sx={{ width: "100%" }} justify="flex-end">
        <CreateClientModal
          ModalOpenButtonLabel="New Client"
          // ModalTitle="Create new client"
        />
        {/* <CreateClientDrawer
          DrawerOpenButtonLabel="New Client"
          DrawerTitle="Create new client"
        /> */}
      </Flex>
      <ClientCards />
    </Group>
  );
}
