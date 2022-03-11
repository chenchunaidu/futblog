import { Card, Text, Badge, Button, Group } from "@mantine/core";
import { ActionIcon } from "@mantine/core";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillTelephoneOutboundFill } from "react-icons/bs";
import { AiOutlineFire } from "react-icons/ai";
import ClientMenu from "./client-menu";
import { Client } from "./types";

//TODO: handle send new invoice
//TODO: handle client
//TODO: handle edit client

type ClientCardProps = Client;

const ClientCard: React.FC<ClientCardProps> = ({
  firstName,
  lastName,
  organizationName,
  email,
  phoneNumber,
  street1,
  street2,
  city,
  state,
  pinCode,
  country,
  clientType,
}) => {
  const VIPIcon = (
    <ActionIcon size="xs" radius="xl" color="pink" variant="transparent">
      <AiOutlineFire style={{ width: 24, height: 24 }} />
    </ActionIcon>
  );

  const isOrganization = clientType === "organization";

  return (
    <div style={{ width: 340, margin: "auto" }}>
      <Card shadow="sm" p="lg">
        <Group spacing="xs">
          <Group position="apart" sx={{ width: "100%" }}>
            <Text weight={600} size="lg">
              {isOrganization ? organizationName : `${firstName} ${lastName}`}
            </Text>
            <ClientMenu />
          </Group>
          <Badge color="pink" variant="light" leftSection={VIPIcon}>
            {isOrganization ? "Organization" : "Individual"}
          </Badge>
          <Group>
            <ActionIcon>
              <HiOutlineMail />
            </ActionIcon>
            <Text>{email}</Text>
          </Group>
          <Group>
            <ActionIcon>
              <BsFillTelephoneOutboundFill />
            </ActionIcon>
            <Text>{phoneNumber}</Text>
          </Group>
          <Text size="xs" color="gray">
            {street1}, {street2}, {city}, {state}, {country}, {pinCode}
          </Text>
          <Button variant="light" fullWidth style={{ marginTop: 14 }}>
            Send new invoice
          </Button>
        </Group>
      </Card>
    </div>
  );
};

export default ClientCard;
