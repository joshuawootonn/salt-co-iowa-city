import React from 'react';
import { useIntersection } from 'react-use';

const useIntersect = (ref, options) => {
    const intersection = useIntersection(ref, options);
    return {
        isVisible: intersection && intersection.intersectionRatio > 0,
    };
};

export default useIntersect;
