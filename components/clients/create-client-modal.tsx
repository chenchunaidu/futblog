import { useState } from "react";
import { Modal, Button, Group } from "@mantine/core";
import CreateClientStepper from "./create-client-stepper";

interface CreateClientModalProps {
  ModalOpenButtonLabel?: string;
  ModalTitle?: string;
}

const CreateClientModal: React.FC<CreateClientModalProps> = ({
  ModalOpenButtonLabel,
  ModalTitle,
}) => {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title={ModalTitle}
        // size="lg"
      >
        <CreateClientStepper />
      </Modal>

      <Group position="center">
        <Button onClick={() => setOpened(true)}>{ModalOpenButtonLabel}</Button>
      </Group>
    </>
  );
};

export default CreateClientModal;
