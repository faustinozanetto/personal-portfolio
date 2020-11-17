import { createGlobalStyle } from 'styled-components/macro';
import { Theme } from './';
const { colors } = Theme;

const GlobalStyle = createGlobalStyle`
  html {
    background-color: #fafafb;
    overflow-x: hidden;
  }

  body {
    -webkit-tap-highlight-color: transparent;
    -webkit-touch-callout: none;
    margin: 0;
    padding: 0;
  }

  .dark-mode {
    background: ${colors.richBlack} !important;
    color: #fff;

    h1,h2,h3,h4,h5,p {
      /* background: ${colors.richBlack} !important; */
      color: #fff !important;
    }

    a {
      color: white !important;
      /* background: #fff; */
    }
  }
`;

export default GlobalStyle;
