import React from 'react';
import FontLoadedProvider from './src/context/fontLoader';

const App = ({ element }) => <FontLoadedProvider element={element} />;

// Wraps every page in a component
export const wrapPageElement = App;
