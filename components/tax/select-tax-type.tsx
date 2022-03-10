import { Paper, Group, Text, Select, SelectItemProps } from "@mantine/core";
import { taxTypesOptions } from "../../data/tax-types";
import { forwardRef, FC } from "react";
import { UseForm } from "@mantine/hooks/lib/use-form/use-form";
import { SelectTaxTypeForm } from "./types";

interface CustomSelectItemProps extends SelectItemProps {
  label: string;
  description: string;
}

const SelectItem = forwardRef<HTMLDivElement, CustomSelectItemProps>(
  ({ label, description, ...others }, ref) => {
    return (
      <div ref={ref} {...others}>
        <Group noWrap>
          <div>
            <Paper padding="lg" shadow="lg">
              <Text weight="600">{label}</Text>
              <Text size="xs" color="dimmed">
                {description}
              </Text>
            </Paper>
          </div>
        </Group>
      </div>
    );
  }
);

SelectItem.displayName = "SelectItem";

interface SelectTaxTypeProps {
  form: UseForm<SelectTaxTypeForm>;
}

const SelectTaxType: FC<SelectTaxTypeProps> = ({ form }) => {
  return (
    <form>
      <Group direction="column" grow>
        <Select
          data={taxTypesOptions}
          itemComponent={SelectItem}
          searchable
          clearable
          label="Select tax type"
          description="Tax will be calculated depending the tax type you have selected"
          {...form.getInputProps("taxType")}
        />
      </Group>
    </form>
  );
};
export default SelectTaxType;
