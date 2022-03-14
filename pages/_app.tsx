import "../styles/globals.css";
import type { AppProps } from "next/app";
import { MantineProvider, useMantineTheme } from "@mantine/core";
import { theme as customTheme } from "../theme";
import Layout from "../components/common/Layout/layout";

function MyApp({ Component, pageProps }: AppProps) {
  const theme = useMantineTheme();
  return (
    <MantineProvider theme={{ ...theme, ...customTheme }}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </MantineProvider>
  );
}

export default MyApp;
