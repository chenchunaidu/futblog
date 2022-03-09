import { useState } from "react";
import { Stepper, Button, Group, Paper, Container } from "@mantine/core";
import CreateInvoiceSendEmail from "../../components/invoices/create-invoice/send-email/send-email";
import CreateInvoiceBillingInformation from "../../components/invoices/create-invoice/billing-information/billing-information";
import CreateInvoiceBasicInformation from "../../components/invoices/create-invoice/basic-information";
import { BasicInformation } from "../../components/invoices/create-invoice/types";

// TODO: create three components
//TODO: basic information component
//TODO: payment details component
//TODO: send email component
//TODO: preview pdf
export default function CreateInvoice() {
  const [active, setActive] = useState(0);
  const [basicInformation, setBasicInformation] = useState<
    Partial<BasicInformation>
  >({});
  const nextStep = () =>
    setActive((current) => (current < 2 ? current + 1 : current));
  const prevStep = () =>
    setActive((current) => (current > 0 ? current - 1 : current));

  const steps = [
    {
      label: "Basic information",
      description: "Enter basic information",
      Component: (
        <CreateInvoiceBasicInformation initialValues={basicInformation} />
      ),
    },
    {
      label: "Billing details",
      description: "Enter billing details",
      Component: <CreateInvoiceBillingInformation />,
    },
    {
      label: "Send email",
      description: "Send invoice through email",
      Component: <CreateInvoiceSendEmail />,
    },
  ];

  return (
    <Container size="md" padding="xs">
      <Paper padding="xl">
        <Stepper active={active} onStepClick={setActive} breakpoint="sm">
          {steps.map(({ label, description, Component }, index) => (
            <Stepper.Step label={label} description={description} key={index}>
              <Container size="xs">
                <Paper shadow="sm" padding="lg">
                  {Component}
                </Paper>
              </Container>
            </Stepper.Step>
          ))}
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
            <Button onClick={nextStep}>Send invoice</Button>
          </Group>
        )}
      </Paper>
    </Container>
  );
}
