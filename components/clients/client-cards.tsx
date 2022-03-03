import React from "react";
import { SimpleGrid } from "@mantine/core";
import ClientCard from "./client-card";
import { Client } from "./types";
//TODO: handle dynamic data
//TODO: pagination

interface ClientCardsProps {
  clients: Client[];
}

const ClientCards: React.FC<ClientCardsProps> = ({ clients = [] }) => {
  return (
    <SimpleGrid
      cols={3}
      breakpoints={[
        { maxWidth: "lg", cols: 2, spacing: "md" },
        { maxWidth: "sm", cols: 1, spacing: "sm" },
      ]}
      sx={{ padding: "2rem", width: "100%" }}
    >
      {clients.map((client, index) => (
        <ClientCard key={index} {...client} />
      ))}
    </SimpleGrid>
  );
};

export default ClientCards;
