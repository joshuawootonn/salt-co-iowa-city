import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components/macro';
import { toVariant } from '../helpers/animation';
import { useFontLoader } from '../context/fontLoader';
import useIntersect from '../helpers/useIntersect';

const Root = styled(motion.div)`
    overflow: hidden;
    position: relative;
`;

const P = styled(motion.p)``;

const Span = styled(motion.span)`
    display: inline-block;
    overflow: hidden;

    div {
        display: inline-block;
        overflow: hidden;
        transform-origin: left;
    }
`;

const animationProps = {
    initial: 'exited',
    variants: {
        entered: { y: 0, opacity: 1 },
        exited: { y: 20, opacity: 0 },
    },
    transition: { type: 'spring', duration: 1, bounce: 0 },
};

const Text = (props) => {
    const isLoaded = useFontLoader();
    const ref = React.useRef(null);

    const { isVisible } = useIntersect(ref, { threshold: 0.6 });
    const Component = props.elementType === 'paragraph' ? P : Span;
    return (
        <Root>
            <Component
                animate={
                    !props.isOrchestrated && toVariant(isLoaded && isVisible)
                }
                {...animationProps}
                {...props}
            >
                {props.children}
            </Component>
        </Root>
    );
};

export default Text;
