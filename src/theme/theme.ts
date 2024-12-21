import {createTheme} from '@shopify/restyle';
import { colors } from './colors';

const theme = createTheme({
  colors: {
    mainBackground: colors.white,
    mainForeground: colors.black,
    cardPrimaryBackground: colors.purplePrimary,
    buttonPrimaryBackground: colors.purplePrimary,
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  textVariants: {
    header: {
      fontWeight: 'bold',
      fontSize: 34,
    },
    body: {
      fontSize: 16,
      lineHeight: 24,
    },
    defaults: {
      // We can define a default text variant here.
    },
  },
});

export type Theme = typeof theme;
export default theme;