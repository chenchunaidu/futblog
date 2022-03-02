import { AppShell, Navbar } from "@mantine/core";
import CustomHeader from "./header";

export interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <AppShell
      sx={{
        height: "100vh",
      }}
      padding="md"
      header={<CustomHeader />}
      styles={(theme) => ({
        main: {
          overflow: "scroll",
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[1],
        },
        body: {
          height: "92%",
        },
      })}
    >
      {children}
    </AppShell>
  );
};

export default Layout;
