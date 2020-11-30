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
    transition: all 500ms ease-in-out;
    max-width: 100%;
    overflow-x: hidden;
  }

  body {
    font-family: ${Theme.fonts.bodyFont};
    font-size: ${Theme.fonts.normalFontSize};
    font-weight: ${Theme.fontWeights.medium};
    background-color: ${Theme.colors.backgroundLight};
    font-size: 14px;
    line-height: 22px;
    margin: 0;
    padding: 0;
    max-width: 100%;
    overflow-x: hidden;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
      line-height: 110%;
      margin: 0;
      font-weight: 500;
      color: #fff;
  }

  h1 {
    font-size: 48px;
  }

  h2 {
    font-size: 36px;
  }

  h3 {
    font-size: 28px;
  }

  h4 {
    font-size: 18px;
  }

  h5 {
    font-size: 16px;
  }

  h6 {
    font-size: 14px;
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

  /* Dark mode styling */
  .dark-mode {
    background-color: ${Theme.colors.backgroundDark} !important;

    /* h2, a, svg {
      color: ${Theme.colors.textDark} !important;
    } */

    /* a:hover {
      color: ${Theme.colors.textHoverDark} !important;
    } */
  }
`;

export default GlobalStyle;
