import useScreenType from '../components/useScreenType';
import { useEffect, useState } from 'react';
import merge from 'lodash.merge';

export const toVariant = (isTrue) => {
    return isTrue ? 'entered' : 'exited';
};

export const useAnimationProp = (base, { mobile, tablet, desktop }) => {
    const _media = useScreenType();
    const [media, setMedia] = useState(_media);

    useEffect(() => {
        setMedia(_media);
    }, [_media]);

    let animation;

    if (media === 'desktop' || media === 'xl') {
        animation = desktop || tablet || mobile;
    } else if (media === 'tablet') {
        animation = tablet || mobile;
    } else {
        animation = mobile;
    }

    return merge(base, animation);
};
