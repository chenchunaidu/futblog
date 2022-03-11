import {
  Group,
  Paper,
  Text,
  Title,
  useMantineTheme,
  ActionIcon,
  SimpleGrid,
  Divider,
} from "@mantine/core";
import React from "react";
import TaxSlabsView from "./tax-slabs-view";
import { CalculatedTax } from "../../helpers/tax-calculation";
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";

interface CalculateTaxProps {
  calculatedTax: CalculatedTax | undefined;
}

const CalculateTax: React.FC<CalculateTaxProps> = ({ calculatedTax }) => {
  const {
    income = 0,
    tax = 0,
    slabWiseSegregation,
    taxableIncome,
  } = calculatedTax || {};
  return (
    <SimpleGrid cols={2}>
      <Paper shadow="lg" p="xs">
        <Group direction="column" grow>
          <Title order={3}>Tax Summary</Title>
          <Group direction="column" grow spacing={0}>
            <Paper shadow="xs" p="xs">
              <Text size="lg" color="dimmed">
                Income
              </Text>
              <Group>
                <Title>{income}</Title>
                <ActionIcon color="green">
                  <AiOutlineArrowUp size="48px" />
                </ActionIcon>
              </Group>
            </Paper>
          </Group>

          <Group direction="column" grow spacing={0}>
            <Paper shadow="xs" p="xs">
              <Text size="lg" color="dimmed">
                Taxable Income
              </Text>
              <Group>
                <Title>{taxableIncome}</Title>
              </Group>
            </Paper>
          </Group>

          <Paper shadow="xs" p="xs">
            <Group direction="column" grow spacing={0}>
              <Text size="lg" color="dimmed">
                Tax
              </Text>
              <Group>
                <Title>{tax}</Title>
                <ActionIcon color="red">
                  <AiOutlineArrowDown size="48px" />
                </ActionIcon>
              </Group>
            </Group>
          </Paper>
          <Paper shadow="xs" p="xs">
            <Group direction="column" grow spacing={0}>
              <Text size="lg" color="dimmed">
                Real Income
              </Text>
              <Group>
                <Title>{income - tax}</Title>
              </Group>
            </Group>
          </Paper>
        </Group>
      </Paper>
      <Paper shadow="lg" p="xs">
        <Group align="flex-start">
          <Title order={3}>Slab wise tax</Title>
          {slabWiseSegregation ? (
            <TaxSlabsView taxSlabs={slabWiseSegregation} />
          ) : (
            ""
          )}
        </Group>
      </Paper>
    </SimpleGrid>
  );
};

export default CalculateTax;
