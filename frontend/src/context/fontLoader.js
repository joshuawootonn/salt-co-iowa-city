import React, {createContext, useContext, useEffect, useState} from 'react';

export const useFontLoader = () => {
    const {isLoaded} = useContext(FontLoadedContext);
    return isLoaded;
};

export const FontLoadedContext = createContext(false);

const FontLoadedProvider = ({element}) => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        document.fonts.ready.then(function () {
            if (
                document.fonts.check('1em Montserrat') &&
                document.fonts.check('1em MonumentExtended')
            ) {
                setIsLoaded(true);
            }
        });
    }, []);

    return (
        <FontLoadedContext.Provider value={{isLoaded}}>
            {element}
        </FontLoadedContext.Provider>
    );
};

export const FontLoadedProviderComponent = ({children}) => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        document.fonts.ready.then(function () {
            if (
                document.fonts.check('1em Montserrat') &&
                document.fonts.check('1em MonumentExtended')
            ) {
                setIsLoaded(true);
            }
        });
    }, []);

    return (
        <FontLoadedContext.Provider value={{isLoaded}}>
            {children}
        </FontLoadedContext.Provider>
    );
};

export default FontLoadedProvider;
