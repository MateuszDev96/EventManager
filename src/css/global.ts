import { createGlobalStyle } from 'styled-components'
import { theme } from '@/theme'

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
  }

  body {
    font-size: 14px;
    line-height: 1.2;
    font-weight: 300;
    overflow: hidden;
    font-family: 'Roboto', sans-serif;
    color: var(${theme.colors.BaseTextColor});
  }

  #app {
    height: 100vh;
    width: 100vw;
  }

  input,
  select,
  textarea,
  button {
    font-size: 14px;
    line-height: 1.2;
    font-weight: 300;
    font-family: 'Roboto', sans-serif;
  }
`