import { createGlobalStyle } from 'styled-components';
import theme from 'theme';

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Roboto';
    src: url("/assets/fonts/Roboto.ttf") format("truetype");
  }

  body {
    font-family: ${theme.fonts.primary};
    font-size: 1.6rem;
    color: ${theme.colors.black};
    background-color: ${theme.colors.white};
  }

  img {
    user-select: none;
  }

  *::selection {
    background-color: ${theme.colors.primary};
    color: ${theme.colors.black};
  }

  * {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

export const ResetStyle = createGlobalStyle`
  html {
    font-size: 62.5%;
  }

  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
    font-weight: normal;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ol,
  ul {
    list-style: none;
  }

  q,
  blockquote {
    quotes: none;
  }

  q:before,
  q:after,
  blockquote:before,
  blockquote:after {
    content: none;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  input:required,
  input:invalid {
    box-shadow: none;
  }

  input::placeholder {
    color: inherit;
  }

  button {
    border-width: 0;
    border-radius: 0;
    background-color: transparent;
  }

  select {
    border-radius: 0;
    background-color: transparent;
    border: 0;
    appearance: none;
    outline: none;
  }

  fieldset {
    border: 0;
  }

  legend {
    display: table;
    float: left;
  }

  legend + * {
    clear: both;
  }

  textarea {
    border-width: 0;
    background-color: transparent;
  }

  option {
    background-color: #ffffff;
    color: #000000;
  }
`;
