import { defaultTheme } from '../styles/themes/default'

type TDefaultTheme = typeof defaultTheme

declare module 'styled-components' {
  export interface DefaultTheme extends TDefaultTheme {}
}
