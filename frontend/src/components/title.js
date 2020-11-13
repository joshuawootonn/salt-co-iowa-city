import React, { useEffect } from 'react';
import { css } from 'styled-components/macro';
import typography from './typography';
import slugify from '../helpers/slugify';
import { Element, scroller } from 'react-scroll';
import { motion } from 'framer-motion';
const styles = {
    root: css`
        overflow: hidden;
    `,
    normal: css`
        ${typography.title1};
        cursor: pointer;
        transform-origin: left;
    `,
    small: css`
        ${typography.title2};
        cursor: pointer;
        transform-origin: left;
    `,
};

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

const animationProps = {
    initial: { opacity: 0, y: 50, rotate: '5deg' },
    variants: {
        entered: { y: 0, opacity: 1, rotate: '0deg' },
        exited: { y: 50, opacity: 0, rotate: '5deg' },
    },
    transition: { type: 'spring', duration: 1 },
};

const Normal = (props) => {
    // console.log(props.children);
    return (
        <Element name={`#${slugify(props.children)}`}>
            <motion.h1
                {...animationProps}
                onClick={() => handleClick(props.children)}
                css={styles.normal}
                {...props}
            >
                {props.children}
            </motion.h1>
        </Element>
    );
};

const Small = (props) => (
    <Element css={styles.root} name={`#${slugify(props.children)}`} {...props}>
        <motion.h2
            {...animationProps}
            onClick={() => handleClick(props.children)}
            css={styles.small}
        >
            {props.children}
        </motion.h2>
    </Element>
);

const Title = (props) =>
    props.variant === 'small' ? <Small {...props} /> : <Normal {...props} />;

export default Title;
