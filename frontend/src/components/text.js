import { motion } from 'framer-motion';
import React from 'react';

const animationProps = {
    initial: { opacity: 0, y: 50, rotate: '1deg' },
    variants: {
        entered: { y: 0, opacity: 1, rotate: '0deg' },
        exited: { y: 50, opacity: 0, rotate: '1deg' },
    },
    transition: { type: 'spring', duration: 1 },
};

export const Paragraph = (props) => (
    <motion.p {...animationProps} {...props}>
        {props.children}
    </motion.p>
);
