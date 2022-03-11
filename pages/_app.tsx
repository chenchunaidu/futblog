import "../styles/globals.css";
import type { AppProps } from "next/app";
import { MantineProvider, useMantineTheme } from "@mantine/core";
import { theme as customTheme } from "../theme";

function MyApp({ Component, pageProps }: AppProps) {
  const theme = useMantineTheme();
  return (
    <MantineProvider theme={{ ...theme, ...customTheme }}>
      <Component {...pageProps} />
    </MantineProvider>
  );
}

export default MyApp;
