import { createGlobalStyle } from 'styled-components/macro';
// import Theme from './Themes';
// const { colors, fontSizes, fonts, fontWeights } = Theme;

const GlobalStyle = createGlobalStyle`
  html {
    overflow-x: hidden;
    width: 100vh;
    padding-left: 15%;
    padding-top: 5%;
  }

  body {
    -webkit-tap-highlight-color: transparent;
    -webkit-touch-callout: none;
    margin: 0;
    padding: 0;
  }
`;

export default GlobalStyle;
