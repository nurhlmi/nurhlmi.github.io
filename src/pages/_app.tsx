import Navbar from "@/components/navbar";
import { Provider } from "@/components/ui/provider";
import { Container, Stack } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { Plus_Jakarta_Sans } from "next/font/google";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style>{`:root { --font-plus-jakarta-sans: ${plusJakartaSans.style.fontFamily}; }`}</style>
      <Provider>
        <Container centerContent>
          <Navbar />
          <Stack width="full" maxWidth={560} mt={6} pb={24}>
            <Component {...pageProps} />
          </Stack>
        </Container>
      </Provider>
    </>
  );
}
