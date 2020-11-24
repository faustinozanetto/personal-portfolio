import { createGlobalStyle } from 'styled-components/macro';
import { Theme } from './';

const GlobalStyle = createGlobalStyle`
  /* Main styling */
  *,
  ::before,
  ::after {
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    margin: 3rem 0 0 0;
    font-family: ${Theme.fonts.bodyFont};
    font-size: ${Theme.fonts.normalFontSize};
    font-weight: ${Theme.fontWeights.medium};
    background-color: ${Theme.colors.firstColorLighten};
    color: ${Theme.colors.textColor};
    line-height: 1.6;
  }

  h1,
  h2,
  h3,
  ul {
    margin: 0;
  }

  h2,
  h3 {
    font-weight: ${Theme.fontWeights.fontSemiBold};
  }

  ul {
    padding: 0;
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }
`;

export default GlobalStyle;
