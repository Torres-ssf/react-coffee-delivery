import { createGlobalStyle, css } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: none;
    box-shadow: 0 0 0 2px ${({ theme }) => theme['yellow-500']};
  }

  body {
    ${({ theme }) => css`
      background: ${theme.background};
      color: ${theme['gray-700']};
    `};
    max-width: 90rem;
    margin: 0 auto;
    padding: 0 10rem;
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }
`
