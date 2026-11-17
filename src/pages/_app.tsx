import IslandHost from "@/components/island-host";
import Footer from "@/components/footer";
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
        <IslandHost>
          <Container centerContent>
            <Navbar />
            <Stack as="main" gap={4} width="full" maxWidth={560} mt={6} pb={24}>
              <Component {...pageProps} />
              <Footer />
            </Stack>
          </Container>
        </IslandHost>
      </Provider>
    </>
  );
}
