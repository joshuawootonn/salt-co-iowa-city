import React, { createContext, useState } from 'react';

export const useFontLoader = () => {
    const [isLoaded, setIsLoaded] = useState(false);

    document.fonts.onloadingdone = function (fontFaceSetEvent) {
        setIsLoaded(true);

        console.log('NICE!!');
    };
    return isLoaded;
};

const FontLoadedContext = createContext(false);

const FontLoadedProvider = ({ element }) => {
    const isLoaded = useFontLoader();

    return (
        <FontLoadedContext.Provider value={{ isLoaded }}>
            {element}
        </FontLoadedContext.Provider>
    );
};

const App = ({ element }) => <FontLoadedProvider element={element} />;

// Wraps every page in a component
export const wrapPageElement = App;
