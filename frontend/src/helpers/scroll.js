import { animateScroll, scroller } from 'react-scroll';
import { useEffect } from 'react';
import useScreenType from '../components/useScreenType';
import slugify from './slugify';

const defaultOptions = {
    duration: 1000,
    delay: 0,
    smooth: 'easeInOutQuart',
    offset: -200,
};

export const forceScrollToTitle = (options) => {
    // console.log('asdf');
    if (typeof window !== `undefined` && document.location.hash !== '') {
        scroller.scrollTo(document.location.hash, {
            ...defaultOptions,
            ...options,
        });
    }
};

export const scrollToTop = (options) => {
    animateScroll.scrollToTop({ ...defaultOptions, ...options });
};

export const useTitleScoller = () => {
    const screenType = useScreenType();
    useEffect(() => {
        forceScrollToTitle({
            offset:
                screenType === 'desktop'
                    ? -200
                    : screenType === 'tablet'
                    ? -150
                    : -150,
        });
    }, [typeof window !== `undefined` && document.location.href, screenType]);
};

export const handleTitleElementClick = (location) => {
    if (typeof window !== `undefined`) {
        document.location.href = `${document.location.origin}${
            document.location.pathname
        }#${slugify(location)}`;
    }
};
