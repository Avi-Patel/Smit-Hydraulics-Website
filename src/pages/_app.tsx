import "@/styles/globals.css";
import type { AppProps } from "next/app";

import { ThemeProvider } from "@sprinklrjs/spaceweb/theme";
import SpacewebProvider from "@sprinklrjs/spaceweb/spacewebProvider";
import light from "@sprinklrjs/spaceweb-themes/hyperspace/light";

import { canUseDom } from "@/utils/canUseDom";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SpacewebProvider direction="ltr" theme={light}>
      <ThemeProvider
        theme={light}
        containerElement={canUseDom() ? document.body : null}
      >
        <Component {...pageProps} />
      </ThemeProvider>
    </SpacewebProvider>
  );
}
