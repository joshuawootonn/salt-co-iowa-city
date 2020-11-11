import React, { FC, useContext, useEffect, useState } from 'react';
import { useIntersection } from 'react-use';
import { useFontLoader } from '../context/fontLoader';
import { motion } from 'framer-motion';

interface IC {
    isVisible: boolean;
    viewState: string;
}
export const IntersectionContext = React.createContext<IC>({
    isVisible: false,
    viewState: 'exited',
});

export interface IntersectionObserverProp {
    reset?: boolean;
    render?: (props: IC) => void;
    threshold?: number;
}

export const useIntersectionObserver = () => {
    return useContext(IntersectionContext);
};

export const IntersectionObserver: FC<IntersectionObserverProp> = ({
    children,
    render,
    reset = true, // if value set to true - observed element will reappear every time it shows up on the screen
    threshold = 0.25,
    ...props
}) => {
    const [isVisible, setVisible] = useState(false);
    const intersectionRef = React.useRef(null);
    const intersection = useIntersection(intersectionRef, {
        threshold,
    });

    useEffect(() => {
        const inViewNow = intersection && intersection.intersectionRatio > 0;
        if (inViewNow) {
            return setVisible(inViewNow);
        } else if (reset) {
            return setVisible(false);
        }
    }, [intersection, reset]);

    return (
        <IntersectionContext.Provider
            value={{
                isVisible: isVisible,
                viewState: isVisible ? 'entered' : 'exited',
            }}
        >
            <motion.div ref={intersectionRef} {...props}>
                {render
                    ? render({
                          isVisible: isVisible,
                          viewState: isVisible ? 'entered' : 'exited',
                      })
                    : (children as any)}
            </motion.div>
        </IntersectionContext.Provider>
    );
};
