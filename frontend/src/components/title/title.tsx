import React, { FC } from 'react';
import styled from 'styled-components/macro';
import typography from '../typography';
import slugify from '../../helpers/slugify';
import { Element } from 'react-scroll';
import { motion } from 'framer-motion';
import { toVariant } from '../../helpers/animation';
import { useFontLoader } from '../../context/fontLoader';
import useIntersect from '../../helpers/useIntersect';
import { handleTitleElementClick } from '../../helpers/scroll';
import { css } from 'styled-components/macro';

const Root = styled(Element)`
    overflow: hidden;
`;

interface HeaderProps {
    isClickable?: boolean;
}

const H1 = styled(motion.h1)<HeaderProps>`
    ${typography.title1};
    ${({ isClickable }) =>
        isClickable &&
        css`
            cursor: pointer;
        `}
    transform-origin: left;
`;

const H2 = styled(motion.h2)<HeaderProps>`
    ${typography.title2};
    ${({ isClickable }) =>
        isClickable &&
        css`
            cursor: pointer;
        `}
    transform-origin: left;
`;

const animationProps = {
    initial: { opacity: 0, y: 40, rotate: '4deg' },
    variants: {
        entered: { y: 0, opacity: 1, rotate: '0deg' },
        exited: { y: 40, opacity: 0, rotate: '4deg' },
    },
    transition: {
        type: 'spring',
        duration: 1,
        bounce: 0,
    },
};

interface TitleProps {
    isClickable?: boolean;
    variant?: 'small' | 'default';
    isOrchestrated?: boolean;
}

const Title: FC<TitleProps> = (props) => {
    const isLoaded = useFontLoader();
    const ref = React.useRef(null);
    // Note due to the animation and possible absolute positioned elements this is not 1.0 threshold
    const { isVisible } = useIntersect(ref, { threshold: 0.6 });

    const Component = props.variant === 'small' ? H2 : H1;

    const handleClick = () =>
        props.isClickable && handleTitleElementClick(props.children);

    return (
        <Component
            ref={ref}
            {...animationProps}
            animate={!props.isOrchestrated && toVariant(isLoaded && isVisible)}
            onClick={handleClick}
            {...props}
        >
            <Root name={`#${slugify(props.children as any)}`}>
                {props.children}
            </Root>
        </Component>
    );
};

Title.defaultProps = {
    isClickable: true,
    isOrchestrated: false,
    variant: 'default',
};

export default Title;
