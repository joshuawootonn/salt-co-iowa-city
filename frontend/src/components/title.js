import React, { useEffect } from 'react';
import styled from 'styled-components/macro';
import typography from './typography';
import slugify from '../helpers/slugify';
import { Element, scroller } from 'react-scroll';
import { motion } from 'framer-motion';

export const forceScroll = () => {
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
        forceScroll();
    }, [typeof window !== `undefined` && document.location.href]);
};

const handleClick = (location) => {
    if (typeof window !== `undefined`) {
        document.location.href = `${document.location.origin}${
            document.location.pathname
        }#${slugify(location)}`;
    }
};

const Root = styled(Element)`
    overflow: hidden;
`;

const H1 = styled(motion.h1)`
    ${typography.title1};
    cursor: pointer;
    transform-origin: left;
`;

const H2 = styled(motion.h2)`
    ${typography.title2};
    cursor: pointer;
    transform-origin: left;
`;

const animationProps = {
    initial: { opacity: 0, y: 50, rotate: '5deg' },
    variants: {
        entered: { y: 0, opacity: 1, rotate: '0deg' },
        exited: { y: 50, opacity: 0, rotate: '5deg' },
    },
    transition: { type: 'spring', duration: 1, bounce: 0 },
};

const Title = (props) => {
    const Component = props.variant === 'small' ? H2 : H1;
    return (
        <Root name={`#${slugify(props.children)}`}>
            <Component
                {...animationProps}
                onClick={() => handleClick(props.children)}
                {...props}
            >
                {props.children}
            </Component>
        </Root>
    );
};

export default Title;
