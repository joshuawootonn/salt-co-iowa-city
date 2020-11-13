import React, { useEffect, useRef } from 'react';
import {
    config,
    useSpring,
    a,
    animated,
    useTrail,
    interpolate,
} from 'react-spring';
import styled, { css } from 'styled-components/macro';
import Splitting from 'splitting';

const styles = {
    phantom: css`
        opacity: 0;
    `,
    normal: css`
        position: absolute;
    `,
};

const Root = styled.div`
    overflow: hidden;
    position: relative;
`;

const P = styled(animated.p)``;

const Span = styled(animated.span)`
    display: inline-block;
    overflow: hidden;

    div {
        display: inline-block;
        overflow: hidden;
        transform-origin: left;
    }
`;

const Text = ({ v, ...props }) => {
    console.log(props);
    const items = React.Children.toArray(props.children.split(' '));

    const trail = useTrail(items.length, {
        config: {
            ...config.default,
            tension: 2000,
            friction: 130,
        },
        opacity: v ? 1 : 0,
        y: v ? 0 : 30,
        rotate: v ? 0 : 20,
        height: v ? 100 : 0,
        from: { opacity: 0, y: 50, rotate: 2, height: '0%' },
    });
    const Component = props.elementType === 'paragraph' ? P : Span;
    return (
        <Root>
            <Component {...props}>
                {trail.map(({ height, ...style }, index) => (
                    <a.div
                        style={{ ['max-height']: height }}
                        key={items[index]}
                    >
                        <a.div
                            style={{
                                ...style,
                                transform: interpolate(
                                    [style.rotate, style.y],
                                    (rotate, y) =>
                                        `rotate(${rotate}deg) translateY(${y}px)`
                                ),
                            }}
                        >
                            {items[index]}
                        </a.div>
                        <span>&nbsp;</span>
                    </a.div>
                ))}
            </Component>
        </Root>
    );
};

export default Text;
