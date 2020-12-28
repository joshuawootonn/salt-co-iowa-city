import React, { useEffect, useState } from 'react';
import { useIntersection } from 'react-use';

const useIntersect = (
    ref,
    options = { threshold: 0.5 },
    isRepeatable = false
) => {
    const intersection = useIntersection(ref, options);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (
            intersection &&
            intersection.intersectionRatio > options.threshold
        ) {
            setIsVisible(true);
        } else {
            if (isRepeatable) {
                setIsVisible(false);
            }
        }
    }, [intersection]);

    return {
        isVisible,
        intersection,
    };
};

export default useIntersect;
