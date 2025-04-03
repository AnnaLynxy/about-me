import { css } from "@emotion/react";

export const globalStylesCss = css`
  html {
    font-family: "Newsreader", serif;
    font-size: 10px;
  }

  main {
    font-size: 1.8rem;
    background: #fff;
    padding: 50px;
    line-height: 1.5;
  }

  h1 {
    font-size: 4rem;
    line-height: 1.2;
    margin-bottom: 40px;
  }

  h2 {
    font-size: 2.4rem;
    line-height: 1.2;
    margin-bottom: 10px;
  }

  h3 {
    font-size: 1.8rem;
  }

  h4 {
    font-size: 1.6rem;
  }

  a {
    color: initial;
    text-decoration: none;
    border-bottom: 1px solid;
    transition: all 0.2s ease;
  }

  button {
    color: initial;
    padding: 0;
    transition: all 0.2s ease;
    font-family: "Newsreader", serif;
  }

  a:hover {
    border-bottom-color: transparent;
  }
`;
