import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import ApolloContext from '../src/context/apollo';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const theme = {
    colors: {
        primary: '#0070f3',
    },
};

const App = ({ Component, pageProps }) => (
    <>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
            <ApolloContext>
                <Component {...pageProps} />
            </ApolloContext>
        </ThemeProvider>
    </>
);

export default App;
