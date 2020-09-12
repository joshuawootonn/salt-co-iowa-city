import {addDecorator, configure} from '@storybook/react';
import React from "react";
import ApolloContext from "../src/context/apollo";

addDecorator(story => <ApolloContext>{story()}</ApolloContext>)

configure(require.context('../src', true, /\.stories\.(js|tsx)?$/), module);

