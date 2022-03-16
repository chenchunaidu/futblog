import "../styles/globals.css";
import type { AppProps } from "next/app";
import { MantineProvider, useMantineTheme } from "@mantine/core";
import { theme as customTheme } from "../theme";
import Layout from "../components/common/Layout/layout";
import { RecoilRoot } from "recoil";

function MyApp({ Component, pageProps }: AppProps) {
  const theme = useMantineTheme();
  return (
    <RecoilRoot>
      <MantineProvider theme={{ ...theme, ...customTheme }}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </MantineProvider>
    </RecoilRoot>
  );
}

export default MyApp;
