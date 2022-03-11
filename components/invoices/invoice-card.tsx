import { Badge, Card, Divider, Group, Text } from "@mantine/core";
import React from "react";
import { FaMoneyBillAlt } from "react-icons/fa";
import { CgOrganisation } from "react-icons/cg";
import { ActionIcon } from "@mantine/core";

export default function InvoiceCard() {
  const DUEIcon = (
    <ActionIcon size="xs" radius="xl" color="pink" variant="transparent">
      <FaMoneyBillAlt style={{ width: 24, height: 24 }} />
    </ActionIcon>
  );

  const ClientIcon = (
    <ActionIcon size="xs" radius="xl" variant="transparent">
      <CgOrganisation style={{ width: 24, height: 24 }} />
    </ActionIcon>
  );

  return (
    <div style={{ width: 340, margin: "auto" }}>
      <Card shadow="sm" p="lg">
        <Group direction="column" spacing={10}>
          <Group>
            <Text weight={600} size="lg">
              June invoice
            </Text>
          </Group>

          <Group position="apart" sx={{ color: "gray", width: "100%" }}>
            <Text size="sm" weight="bold">
              #INV-124
            </Text>
            <Text size="sm">June 12 2022</Text>
          </Group>
          <Group>
            <Text size="xs" color="gray">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium fugit qui corrupti explicabo consequuntur sit, at
            </Text>
          </Group>
          <Text weight={600}>Items</Text>
          <Group position="apart" sx={{ width: "100%" }}>
            <Text size="sm">Software engineer</Text>
            <Text size="sm" color="gray">
              1 x 100
            </Text>
          </Group>
          <Group position="apart" sx={{ width: "100%" }}>
            <Text size="sm">Software engineer 2</Text>
            <Text size="sm" color="gray">
              2 x 1000
            </Text>
          </Group>
          <Divider sx={{ width: "100%" }} />
          <Group position="apart" sx={{ width: "100%" }}>
            <Text size="sm" weight="bold">
              Total
            </Text>
            <Text size="sm" color="gray">
              3000
            </Text>
          </Group>

          <Group>
            <Badge color="pink" leftSection={DUEIcon}>
              DUE
            </Badge>
            <Badge size="lg" leftSection={ClientIcon}>
              Proximity works
            </Badge>
          </Group>
        </Group>
      </Card>
    </div>
  );
}
