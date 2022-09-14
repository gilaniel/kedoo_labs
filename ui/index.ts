import { extendTheme } from "@chakra-ui/react";

import styles from "./styles";

import * as components from "./components";
import colors from "./foundations/colors";

const coreTheme = extendTheme({
  config: {
    cssVarPrefix: "kl",
    initialColorMode: "light",
  },
  styles,
  // shadows,
  colors,
  // ...typography,
  components: {
    ...components,
  },
});

export const theme = coreTheme;
