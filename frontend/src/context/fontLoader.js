import React, { createContext, useContext, useEffect, useState } from 'react';

export const useFontLoader = () => {
    const { isLoaded } = useContext(FontLoadedContext);
    return isLoaded;
};

export const FontLoadedContext = createContext(false);

const FontLoadedProvider = ({ element }) => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        document.fonts.onloadingdone = function (fontFaceSetEvent) {
            console.log('font event', fontFaceSetEvent);
            setIsLoaded(true);
        };
    }, []);

    return (
        <FontLoadedContext.Provider value={{ isLoaded }}>
            {element}
        </FontLoadedContext.Provider>
    );
};

export default FontLoadedProvider;
