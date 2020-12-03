import React, { createContext, useContext, useEffect, useState } from 'react';

export const useFontLoader = () => {
    const { isLoaded } = useContext(FontLoadedContext);
    return isLoaded;
};

export const FontLoadedContext = createContext(false);

const FontLoadedProvider = ({ children }) => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        document.fonts.onloadingdone = function (fontFaceSetEvent) {
            console.log('font event', fontFaceSetEvent);
            setIsLoaded(true);
        };
    }, []);

    return (
        <FontLoadedContext.Provider value={{ isLoaded }}>
            {children}
        </FontLoadedContext.Provider>
    );
};

export default FontLoadedProvider;
