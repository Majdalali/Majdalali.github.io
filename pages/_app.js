import "../styles/globals.scss";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

// Chakra
const theme = extendTheme({
  colors: {
    cards: {
      666: "#353847",
    },
  },
});
function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
