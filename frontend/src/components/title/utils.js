import { scroller } from 'react-scroll';
import { useEffect } from 'react';
import slugify from '../../helpers/slugify';

export const forceScrollToTitle = () => {
    if (typeof window !== `undefined` && document.location.hash !== '') {
        scroller.scrollTo(document.location.hash, {
            duration: 1000,
            delay: 0,
            smooth: 'easeInOutQuart',
            offset: -200,
        });
    }
};

export const useTitleScoller = () => {
    useEffect(() => {
        forceScrollToTitle();
    }, [typeof window !== `undefined` && document.location.href]);
};

export const handleTitleElementClick = (location) => {
    if (typeof window !== `undefined`) {
        document.location.href = `${document.location.origin}${
            document.location.pathname
        }#${slugify(location)}`;
    }
};
