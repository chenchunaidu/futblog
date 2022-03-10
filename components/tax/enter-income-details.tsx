import React from "react";
import { Group, Text, NumberInput, InputWrapper } from "@mantine/core";
import { Configuration } from "../../data/tax-types";
import { UseForm } from "@mantine/hooks/lib/use-form/use-form";
import { IncomeDetailsForm } from "../../pages/tax/types";

interface EnterIncomeDetailsProps {
  configuration: Configuration;
  form: UseForm<IncomeDetailsForm>;
}

const EnterIncomeDetails: React.FC<EnterIncomeDetailsProps> = ({
  configuration = {},
  form,
}) => {
  const { name, description, allowedInvestmentOptions = [] } = configuration;
  return (
    <Group direction="column" grow>
      <Text>You have selected {name}</Text>
      <Text size="xs" color="dimmed">
        {description}
      </Text>
      <NumberInput
        placeholder="Taxable amount"
        label="Taxable amount"
        {...form.getInputProps("income")}
      />
      {allowedInvestmentOptions?.length ? (
        <InputWrapper
          id="investmentAmount"
          label="Tax deductible investment amount"
          description={`${allowedInvestmentOptions?.join(", ")}`}
        >
          <NumberInput
            id="investmentAmount"
            placeholder="0"
            {...form.getInputProps("investmentAmount")}
          />
        </InputWrapper>
      ) : (
        ""
      )}
    </Group>
  );
};

export default EnterIncomeDetails;
