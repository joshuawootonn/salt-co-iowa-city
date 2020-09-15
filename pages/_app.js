import React from 'react';
import ApolloContext from '../src/context/apollo';
import ThemeContext, { primaryTheme } from '../src/context/themeContext';

const App = ({ Component, pageProps }) => (
    <ThemeContext theme={primaryTheme}>
        <ApolloContext>
            <Component {...pageProps} />
        </ApolloContext>
    </ThemeContext>
);

export default App;
