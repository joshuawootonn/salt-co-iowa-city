import React, { useEffect, useState } from 'react';
import { useIntersection } from 'react-use';

const useIntersect = (ref, options) => {
    const intersection = useIntersection(ref, options);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (intersection && intersection.intersectionRatio > 0) {
            setIsVisible(true);
        }
    }, [intersection]);

    return {
        isVisible,
    };
};

export default useIntersect;
