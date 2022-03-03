import { Text, Group } from "@mantine/core";
import React from "react";
import Link from "next/link";

export default function index() {
  const navItems = [
    { title: "Dashboard", path: "/dashboard" },
    { title: "Invoices", path: "/invoices" },
    { title: "Clients", path: "/clients" },
    { title: "Calendar", path: "/calendar" },
  ];
  return (
    <Group sx={{ padding: "1rem" }} direction="row" position="apart">
      <Group direction="row" spacing="xl">
        <Group>
          <Text>Logo</Text>
        </Group>
        <Group>
          {navItems.map(({ title, path }) => (
            <Text key={path}>
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
