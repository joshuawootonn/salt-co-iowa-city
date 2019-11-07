import React, { ReactElement } from 'react';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';

import { theme } from 'theme';
import { GridThemeProvider } from 'styled-bootstrap-grid';

interface LayoutProps {
  children: ReactElement | ReactElement[];
}

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
    cursor: none;
  }
  a {
    cursor: none;
  }
  div {
    box-sizing: border-box;
  }
  @import url('https://fonts.googleapis.com/css?family=Josefin+Sans&display=swap');
`;

const Content = styled.div`
  position: relative;
  min-height: 100vh;
  margin: 0 auto;
`;

const gridTheme = {
  breakpoints: {
    // defaults below
    xl: 2561,
    lg: 1921,
    md: 1101,
    sm: 576,
    xs: 575,
    // or you can use aliases
    // giant: 1200,
    // desktop: 992,
    // tablet: 768,
    // phone: 576,
    // smaller: 575,
  },
  row: {
    padding: 10, // default 15
  },
  col: {
    padding: 5, // default 15
  },
  container: {
    padding: 0, // default 15
    maxWidth: {
      // defaults below
      xl: 1500,
      lg: 1200,
      md: 900,
      sm: 640,
      xs: 540,
      // or you can use aliases
      // giant: 1140,
      // desktop: 960,
      // tablet: 720,
      // phone: 540,
      // smaller: 540,
    },
  },
};

const StylingProvider = ({ children }: LayoutProps) => (
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <GridThemeProvider gridTheme={gridTheme}>
        <Content>{children}</Content>
      </GridThemeProvider>
    </ThemeProvider>
  </>
);

export default StylingProvider;
