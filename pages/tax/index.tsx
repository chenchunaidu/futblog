import { useState } from "react";
import { Stepper, Button, Group, Paper, Container } from "@mantine/core";
import CalculateTax from "../../components/tax/calculate-tax";
import EnterIncomeDetails from "../../components/tax/enter-income-details";
import SelectTaxType from "../../components/tax/select-tax-type";
import { SelectTaxTypeForm, IncomeDetailsForm } from "./types";
import { useForm } from "@mantine/hooks";
import { taxConfiguration } from "../../data/tax-types";
import { calculateTax, CalculatedTax } from "../../helpers/tax-calculation";

export default function CreateInvoice() {
  const [active, setActive] = useState(0);
  const [selectedTax, setSelectedTax] = useState("");
  const [incomeDetails, setIncomeDetails] = useState<IncomeDetailsForm>();
  const [calculatedTax, setCalculatedTax] = useState<CalculatedTax>();

  const selectTaxForm = useForm<SelectTaxTypeForm>({
    initialValues: {
      taxType: "",
    },
    validationRules: {
      taxType: (value) => (value ? true : false),
    },
    errorMessages: {
      taxType: "Tax type is required",
    },
  });

  const incomeDetailsForm = useForm<IncomeDetailsForm>({
    initialValues: {
      income: 0,
      investmentAmount: 0,
    },
    validationRules: {
      income: (value) => value > 0,
    },
    errorMessages: {
      income: "Taxable income should be grater than 0",
    },
  });

  const nextStep = () => {
    let isValid = false;
    if (active === 0) {
      isValid = selectTaxForm.validate();
      setSelectedTax(selectTaxForm.values.taxType);
    }
    if (active === 1) {
      isValid = incomeDetailsForm.validate();
      const result = calculateTax({
        incomeDetails: incomeDetailsForm.values,
        configuration: taxConfiguration[selectedTax],
      });
      setCalculatedTax(result);
      setIncomeDetails(incomeDetailsForm.values);
    }

    if (isValid) {
      setActive((current) => (current < 2 ? current + 1 : current));
    }
  };
  const prevStep = () =>
    setActive((current) => (current > 0 ? current - 1 : current));

  const steps = [
    {
      label: "Select Tax Type",
      description: "Please select tax type.",
      Component: <SelectTaxType form={selectTaxForm} />,
    },
    {
      label: "Enter income details",
      description: "Please enter your income and benefits",
      Component: (
        <EnterIncomeDetails
          form={incomeDetailsForm}
          configuration={taxConfiguration[selectedTax] || {}}
        />
      ),
    },
    {
      label: "Calculate tax",
      description: "Here you can see the calculated tax",
      Component: <CalculateTax calculatedTax={calculatedTax} />,
      containerSize: "lg",
    },
  ];

  return (
    <Container size="md" padding="xs">
      <Paper padding="xl">
        <Stepper active={active} onStepClick={setActive} breakpoint="sm">
          {steps.map(
            ({ label, description, Component, containerSize }, index) => (
              <Stepper.Step label={label} description={description} key={index}>
                <Container
                  size={containerSize === "lg" ? "xl" : "xs"}
                  sx={{ height: "65vh", overflow: "scroll" }}
                >
                  <Paper padding="xl" my="lg">
                    {Component}
                  </Paper>
                </Container>
              </Stepper.Step>
            )
          )}
        </Stepper>

        {active !== steps.length - 1 ? (
          <Group position="center" mt="xl">
            <Button variant="default" onClick={prevStep}>
              Back
            </Button>
            <Button onClick={nextStep}>Next step</Button>
          </Group>
        ) : (
          <Group position="center" mt="xl">
            <Button variant="default" onClick={prevStep}>
              Back
            </Button>
            {/* <Button onClick={nextStep}>Share tax card</Button> */}
          </Group>
        )}
      </Paper>
    </Container>
  );
}
