import { Group } from "@mantine/core";

import ClientCards from "../../components/clients/client-cards";
import CreateClientModal from "../../components/clients/create-client-modal";
import { Client } from "../../components/clients/types";

//TODO: fetch all clients data and pass to client cards

const clients: Client[] = [
  {
    firstName: "John",
    lastName: "Mayer",
    email: "john.mayer@gmail.com",
    currency: "USD",
    language: "english",
    street1: "502/4B, Versova, Skylark Towers",
    street2: "Mhada Hig Colony, Swami Samarth Circle, Andheri West",
    city: "Mumbai",
    state: "Maharastra",
    country: "India",
    pinCode: "400053",
    phoneNumber: "9090909090",
    faxNumber: "FAX123JK",
    taxIdentificationNumber: "GSTIN12KJKJKD",
    notes: "some note",
    organizationName: "John Mayer's inc.,",
    clientType: "organization",
  },
];

export default function Clients() {
  return (
    <Group direction="column">
      <CreateClientModal ModalOpenButtonLabel="New Client" />

      <ClientCards clients={clients} />
    </Group>
  );
}
