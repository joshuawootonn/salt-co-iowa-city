import React, { useEffect, useState } from 'react';
import { useIntersection } from 'react-use';

const useIntersect = (ref, options = { threshold: 0.5 }) => {
    const intersection = useIntersection(ref, options);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (intersection && intersection.intersectionRatio > 0) {
            setIsVisible(true);
        }
    }, [intersection]);

    return {
        isVisible,
        intersection,
    };
};

export default useIntersect;
