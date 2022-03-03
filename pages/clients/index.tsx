import { Group } from "@mantine/core";
import Flex from "../../components/common/flex";
import ClientCards from "../../components/clients/client-cards";
import CreateClientModal from "../../components/clients/create-client-modal";

//TODO: fetch all clients data and pass to client cards
export default function Clients() {
  return (
    <Group direction="column">
      <Flex sx={{ width: "100%" }} justify="flex-end">
        <CreateClientModal ModalOpenButtonLabel="New Client" />
      </Flex>
      <ClientCards />
    </Group>
  );
}
