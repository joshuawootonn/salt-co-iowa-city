import { scroller } from 'react-scroll';
import { useEffect } from 'react';
import slugify from '../../helpers/slugify';
import useScreenType from '../useScreenType';

export const forceScrollToTitle = (options) => {
    if (typeof window !== `undefined` && document.location.hash !== '') {
        scroller.scrollTo(document.location.hash, {
            duration: 1000,
            delay: 0,
            smooth: 'easeInOutQuart',
            offset: -200,
            ...options,
        });
    }
};

export const useTitleScoller = () => {
    const screenType = useScreenType();
    useEffect(() => {
        forceScrollToTitle({
            offset:
                screenType === 'desktop'
                    ? -200
                    : screenType === 'tablet'
                    ? -130
                    : -120,
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
