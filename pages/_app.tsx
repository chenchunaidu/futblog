import "../styles/globals.css";
import type { AppProps } from "next/app";
import { MantineProvider, useMantineTheme } from "@mantine/core";
import { theme as customTheme } from "../theme";

import { RecoilRoot } from "recoil";

function MyApp({ Component, pageProps }: AppProps) {
  const theme = useMantineTheme();
  return (
    <RecoilRoot>
      <MantineProvider theme={{ ...theme, ...customTheme }}>
        <Component {...pageProps} />
      </MantineProvider>
    </RecoilRoot>
  );
}

export default MyApp;
