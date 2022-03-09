import { Group, Text, Divider, Button, ActionIcon } from "@mantine/core";

export default function Item() {
  const priceDetails = [
    { name: "Amount", amount: 1000 },
    { name: "Tax", amount: 30 },
    { name: "Discount", amount: 20 },
    { name: "Shipping", amount: 20 },
  ];
  return (
    <Group direction="column" grow spacing={0}>
      <Group position="apart" sx={{ width: "100%" }}>
        <Text weight="600">Software engineer</Text>
      </Group>
      <Text size="sm" color="gray">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt minus
        debitis ea aliquam.
      </Text>
      <Group direction="column" grow spacing={4} mt="sm">
        {priceDetails.map(({ name, amount }, index) => (
          <Group position="apart" sx={{ width: "100%" }} key={index}>
            <Text size="xs"> {name}</Text>
            <Text size="xs" color="gray">
              {amount}
            </Text>
          </Group>
        ))}
        <Divider sx={{ width: "100%" }} variant="dashed" />
        <Group position="apart" sx={{ width: "100%" }}>
          <Text size="sm"> Total</Text>
          <Text size="sm" color="gray">
            900
          </Text>
        </Group>
      </Group>
    </Group>
  );
}
