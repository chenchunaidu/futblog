import { SimpleGrid } from "@mantine/core";
import React from "react";
import InvoiceCard from "./invoice-card";

export default function InvoiceCards() {
  const invoices = [1, 2, 3, 4, 5, 6];
  return (
    <SimpleGrid
      cols={3}
      breakpoints={[
        { maxWidth: "lg", cols: 2, spacing: "md" },
        { maxWidth: "sm", cols: 1, spacing: "sm" },
      ]}
      sx={{ padding: "2rem", width: "100%" }}
      spacing="xl"
    >
      {invoices.map((invoice, index) => (
        <InvoiceCard key={index} />
      ))}
    </SimpleGrid>
  );
}
