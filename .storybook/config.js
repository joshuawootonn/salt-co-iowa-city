import {addDecorator, configure} from '@storybook/react';
import React from "react";
import ApolloContext from "../src/context/apollo";
import ThemeContext, {primaryTheme} from "../src/context/themeContext";

import '../styles/globals.css'

addDecorator(story => <ThemeContext theme={primaryTheme}>
    <ApolloContext>{story()}</ApolloContext>
</ThemeContext>)

configure(require.context('../src', true, /\.stories\.(js|tsx)?$/), module);

