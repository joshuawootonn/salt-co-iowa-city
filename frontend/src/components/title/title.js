import React from 'react';
import styled from 'styled-components/macro';
import typography from '../typography';
import slugify from '../../helpers/slugify';
import { Element } from 'react-scroll';
import { motion } from 'framer-motion';
import { toVariant } from '../../helpers/animation';
import { useFontLoader } from '../../context/fontLoader';
import useIntersect from '../../helpers/useIntersect';
import { handleTitleElementClick } from './utils';

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

const Title = (props) => {
    const isLoaded = useFontLoader();
    const ref = React.useRef(null);
    // Note due to the animation and possible absolute positioned elements this is not 1.0 threshold
    const { isVisible } = useIntersect(ref, { threshold: 0.6 });

    const Component = props.variant === 'small' ? H2 : H1;

    return (
        <Component
            {...animationProps}
            ref={ref}
            animate={!props.isOrchestrated && toVariant(isLoaded && isVisible)}
            onClick={() => handleTitleElementClick(props.children)}
            {...props}
        >
            <Root name={`#${slugify(props.children)}`}>{props.children}</Root>
        </Component>
    );
};

export default Title;
