import React from 'react';
import ApolloContext from '../src/context/apollo';
import ThemeContext, { primaryTheme } from '../src/context/themeContext';
import { CustomPreloader } from 'react-preloaders';
import Salt from '../src/svgs/salt.svg';
import '../src/context/index.css';
import Preloader from '../src/components/preloader';

const App = ({ Component, pageProps }) => {
    console.log(pageProps);
    return (
        <ThemeContext theme={primaryTheme}>
            <ApolloContext>
                <Component {...pageProps} />

                {process.browser && (
                    <CustomPreloader
                        background={primaryTheme.colors.background}
                    >
                        <Preloader />
                    </CustomPreloader>
                )}
            </ApolloContext>
        </ThemeContext>
    );
};

export default App;
