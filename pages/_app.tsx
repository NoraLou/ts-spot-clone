import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import PlayerLayout from '../components/playerLayout';
import "reset-css";

const theme = extendTheme({
  colors: {
    gray: {
      100: '#F5f5f',
      200: '#eeeeee',
      300: '#E0e0e0',
      400: "#BDBDBD"
    },
  },
  components: {
    Button: {
      variants: {
        link: {
          ":focus": {
            outline: "none",
            boxShadow: "none",
          },
        },
      },
    },
  },
})

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <PlayerLayout>
        <Component {...pageProps} />
      </PlayerLayout>
    </ChakraProvider>
  );
};

export default MyApp;
