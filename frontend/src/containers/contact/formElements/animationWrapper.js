import React from 'react';
import { motion } from 'framer-motion';

const AnimationWrapper = (props) => {
    const animationProps = {
        initial: 'exited',
        variants: {
            entered: { x: 0, y: 0, opacity: 1 },
            exited: { x: -20, y: 30, opacity: 0 },
        },
        transition: { type: 'spring' },
    };

    return <motion.div {...animationProps}>{props.children}</motion.div>;
};

export default AnimationWrapper;
