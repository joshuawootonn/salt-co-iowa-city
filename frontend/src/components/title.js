import React, { useEffect } from 'react';
import styled, { css } from 'styled-components/macro';
import typography from './typography';
import slugify from '../helpers/slugify';
import { Element, scroller } from 'react-scroll';
import { animated, useSpring, config } from 'react-spring';

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

const styles = {
    root: css`
        overflow: hidden;
    `,
    normal: css`
        ${typography.title1};
        cursor: pointer;
        transform-origin: left;
        color: lawngreen;
    `,
    small: css`
        ${typography.title2};
        cursor: pointer;
        transform-origin: left;
    `,
};

const Root = styled(Element)`
    overflow: hidden;
`;

const H1 = styled(animated.h1)`
    ${typography.title1};
    cursor: pointer;
    transform-origin: left;
`;

const H2 = styled(animated.h2)`
    ${typography.title2};
    cursor: pointer;
    transform-origin: left;
`;

const Title = ({ v, ...props }) => {
    const style = useSpring({
        transform: `translateY(${v ? '0' : '100'}%) rotate(${v ? 0 : 5}deg)`,
        opacity: v ? 1 : 0,
        config: { ...config.slow, friction: 50, clamp: true },
    });
    const Component = props.variant === 'small' ? H2 : H1;

    return (
        <Root name={`#${slugify(props.children)}`}>
            <Component
                style={style}
                onClick={() => handleClick(props.children)}
                {...props}
            >
                {props.children}
            </Component>
        </Root>
    );
};

export default Title;
