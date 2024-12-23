import {createTheme} from '@shopify/restyle';
import { colors } from './colors';
import { textVariants } from './textVarinats';

const theme = createTheme({
  colors: {
    mainBackground: colors.white,
    mainForeground: colors.black,
    cardPrimaryBackground: colors.purplePrimary,
    buttonPrimaryBackground: colors.purplePrimary,
    black: colors.black
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  textVariants
});

export type Theme = typeof theme;
export default theme;