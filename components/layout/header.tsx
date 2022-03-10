import { Text, Group } from "@mantine/core";
import React from "react";
import Link from "next/link";

export default function index() {
  const navItems = [
    { title: "Dashboard", path: "/dashboard" },
    { title: "Invoices", path: "/invoices" },
    { title: "Clients", path: "/clients" },
    { title: "Calendar", path: "/calendar" },
    {
      title: "Tax",
      path: "/tax",
    },
  ];
  return (
    <Group sx={{ padding: "1rem" }} direction="row" position="apart">
      <Group direction="row" spacing="xl">
        <Group>
          <Text size="xl" weight="bold">
            Logo
          </Text>
        </Group>
        <Group direction="row" spacing="xl">
          {navItems.map(({ title, path }) => (
            <Text key={path} size="md">
              <Link href={path}>
                <a>{title}</a>
              </Link>
            </Text>
          ))}
        </Group>
      </Group>
      <Group>
        <Text>Profile</Text>
      </Group>
    </Group>
  );
}
