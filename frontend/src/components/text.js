import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components/macro';

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
    animate: 'entered',
    transition: { type: 'spring', duration: 1, bounce: 0 },
};

const Text = (props) => {
    const Component = props.elementType === 'paragraph' ? P : Span;
    return (
        <Root>
            <Component {...animationProps} {...props}>
                {props.children}
            </Component>
        </Root>
    );
};

export default Text;
