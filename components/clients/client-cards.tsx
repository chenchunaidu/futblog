import React from "react";
import { SimpleGrid } from "@mantine/core";
import ClientCard from "./client-card";
//TODO: handle dynamic data
//TODO: pagination
export default function ClientCards() {
  const cards = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <SimpleGrid
      cols={3}
      breakpoints={[
        { maxWidth: "lg", cols: 2, spacing: "md" },
        { maxWidth: "sm", cols: 1, spacing: "sm" },
      ]}
      sx={{ padding: "2rem", width: "100%" }}
    >
      {cards.map((card, index) => (
        <ClientCard key={index} />
      ))}
    </SimpleGrid>
  );
}
