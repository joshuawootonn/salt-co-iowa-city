import React, { ReactElement } from 'react';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';

import { theme } from 'theme';

interface LayoutProps {
  children: ReactElement | ReactElement[];
}

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;    
    font-family: 'Lato', sans-serif;
  }
  a {
    cursor:pointer;
  }
  div {
    box-sizing: border-box;
  }
  @import url('https://fonts.googleapis.com/css?family=Lato&display=swap');
`;

const Content = styled.div`
  position: relative;
  min-height: 100vh;
  margin: 0 auto;
`;

const StylingProvider = ({ children }: LayoutProps) => (
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <Content>{children}</Content>
    </ThemeProvider>
  </>
);

export default StylingProvider;
