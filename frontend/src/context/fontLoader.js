import React, { createContext, useContext, useState } from 'react';

export const useFontLoader = () => {
    const { isLoaded } = useContext(FontLoadedContext);
    return isLoaded;
};

const _useFontLoader = () => {
    const [isLoaded, setIsLoaded] = useState(false);

    document.fonts.onloadingdone = function (fontFaceSetEvent) {
        setIsLoaded(true);
    };
    return isLoaded;
};
export const FontLoadedContext = createContext(false);

const FontLoadedProvider = ({ element }) => {
    const isLoaded = _useFontLoader();

    return (
        <FontLoadedContext.Provider value={{ isLoaded }}>
            {element}
        </FontLoadedContext.Provider>
    );
};

export default FontLoadedProvider;
