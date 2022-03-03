import { Button, Group, Text, Box } from "@mantine/core";
import { useState } from "react";
import CreateClientBasicInformation from "./create-client-basic-information";
import CreateClientAddress from "./create-client-address";
import CreateClientAdditionalInformation from "./create-client-additional-information";
import { useForm } from "@mantine/hooks";
import { CreateClientForm } from "./types";

//TODO: call api on save

interface CreateClientStepperProps {
  handleSubmit: (input: CreateClientForm) => void;
}

const CreateClientStepper: React.FC<CreateClientStepperProps> = ({
  handleSubmit,
}) => {
  const [active, setActive] = useState<number>(1);
  const [clientType, setClientType] = useState<string>("individual");
  const form = useForm<CreateClientForm>({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      currency: "USD",
      language: "en",
      street1: "",
      street2: "",
      city: "",
      state: "",
      country: "US",
      pinCode: "",
      phoneNumber: "",
      faxNumber: "",
      taxIdentificationNumber: "",
      notes: "",
      organizationName: "",
      clientType: "",
    },

    validationRules: {
      firstName: (value) => (value ? true : false),
      lastName: (value) => (value ? true : false),
    },

    errorMessages: {
      firstName: "First name is required",
      lastName: "Last name is required ",
    },
  });

  const nextStep = () => {
    const isValid = form.validate();
    if (active === steps.length) {
      const { values } = form;
      handleSubmit({ ...values, clientType });
    } else if (isValid) setActive(active + 1);
  };
  const prevStep = () => setActive(active > 1 ? active - 1 : active);

  const steps = [
    {
      label: "Step 1",
      description: "Enter basic information",
      Component: (
        <CreateClientBasicInformation
          form={form}
          setClientType={setClientType}
          clientType={clientType}
        />
      ),
    },
    {
      label: "Step 2",
      description: "Enter address",
      Component: <CreateClientAddress form={form} />,
    },
    {
      label: "Step 3",
      description: "Enter additional information",
      Component: <CreateClientAdditionalInformation form={form} />,
    },
  ];

  const activeStep = steps[active - 1];
  const { Component, description } = activeStep || {};
  return (
    <form>
      <Group spacing="sm" direction="column" align="center">
        <Box sx={{ textAlign: "center" }}>
          <Text size="xl">{description}</Text>
          <Text size="xs" color="gray">
            Step {active}/{steps.length}
          </Text>
        </Box>

        {Component}

        <Group position="center" mt="xl">
          <Button variant="default" onClick={prevStep}>
            Back
          </Button>
          <Button onClick={nextStep}>
            {active === steps.length ? "Submit" : "Next step"}
          </Button>
        </Group>
      </Group>
    </form>
  );
};

export default CreateClientStepper;
