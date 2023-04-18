import "../styles/globals.scss";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { AuthContextProvider } from '../context/AuthContext'

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
      <AuthContextProvider>
      <Component {...pageProps} />
      </AuthContextProvider>
    </ChakraProvider>
  );
}

export default MyApp;
