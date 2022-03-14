import { AppShell, Header } from "@mantine/core";
import NavbarSearch from "./nav";

interface LayoutProps {
  children: React.ReactNode;
}
const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <AppShell
      padding="md"
      navbar={<NavbarSearch />}
      styles={(theme) => ({
        main: {
          height: "100vh",
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.white,
        },
      })}
    >
      {children}
    </AppShell>
  );
};

export default Layout;
