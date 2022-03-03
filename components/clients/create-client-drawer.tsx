import { useState } from "react";
import { Drawer, Button, Group } from "@mantine/core";
import CreateClientStepper from "./create-client-stepper";

interface CreateClientDrawerProps {
  DrawerOpenButtonLabel?: string;
  DrawerTitle?: string;
}

const CreateClientDrawer: React.FC<CreateClientDrawerProps> = ({
  DrawerOpenButtonLabel,
  DrawerTitle,
}) => {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <Drawer
        opened={opened}
        onClose={() => setOpened(false)}
        title={DrawerTitle}
        padding="xl"
        size="35%"
        position="right"
      >
        <CreateClientStepper />
      </Drawer>

      <Group position="center">
        <Button onClick={() => setOpened(true)}>{DrawerOpenButtonLabel}</Button>
      </Group>
    </>
  );
};

export default CreateClientDrawer;
