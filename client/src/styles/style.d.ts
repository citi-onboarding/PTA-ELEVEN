
import 'styled-components';
import { theme } from './theme';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export type Theme = typeof theme;

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}