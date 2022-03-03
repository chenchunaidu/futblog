import { Card, Text, Badge, Button, Group } from "@mantine/core";
import { ActionIcon } from "@mantine/core";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillTelephoneOutboundFill } from "react-icons/bs";
import { AiOutlineFire } from "react-icons/ai";
import ClientMenu from "./client-menu";

//TODO: handle dynamic data
//TODO: handle send new invoice
//TODO: visual difference between individual vs organization [use icon and tooltop or badge]
export default function ClientCard() {
  const VIPIcon = (
    <ActionIcon size="xs" radius="xl" color="pink" variant="transparent">
      <AiOutlineFire style={{ width: 24, height: 24 }} />
    </ActionIcon>
  );

  return (
    <div style={{ width: 340, margin: "auto" }}>
      <Card shadow="sm" padding="lg">
        <Group spacing="xs">
          <Group position="apart" sx={{ width: "100%" }}>
            <Text weight={600} size="lg">
              Proximity Works
            </Text>
            <Badge color="pink" variant="light" leftSection={VIPIcon}>
              VIP
            </Badge>
            <ClientMenu />
          </Group>
          <Group>
            <ActionIcon>
              <HiOutlineMail />
            </ActionIcon>
            <Text>proximity@gmail.com</Text>
          </Group>
          <Group>
            <ActionIcon>
              <BsFillTelephoneOutboundFill />
            </ActionIcon>
            <Text>+9190100000</Text>
          </Group>
          <Text size="xs" color="gray">
            502/4B, Versova, Skylark Towers, Chs Ltd, Mhada Hig Colony, Swami
            Samarth Circle, Andheri West,Maharastra,Mumbai,400053
          </Text>
          <Button variant="light" fullWidth style={{ marginTop: 14 }}>
            Send new invoice
          </Button>
        </Group>
      </Card>
    </div>
  );
}
