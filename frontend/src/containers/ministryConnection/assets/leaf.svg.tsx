import React, { FC } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Svg = styled(motion.svg)`
    opacity: 0.2;
    path {
        stroke: ${({ theme }) => theme.colors.blue.medium};
        stroke-width: 2px;
        stroke-linejoin: round;
        stroke-linecap: round;
    }
`;

const Flag: FC = (props) => (
    <Svg
        viewBox="0 0 352 517"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path d="M179.834 511.591L179.471 238.669L179.296 106.428" />
        <path d="M179.834 511.591L179.471 238.669L179.296 106.428" />
        <path d="M179.477 241.462L102.906 164.892" />
        <path d="M179.477 241.461L254.744 166.193" />
        <path d="M254.29 263.162L179.602 337.851L102.88 261.128" />
        <path d="M179.695 407.923C340.196 405.884 389.88 220.503 307.278 133.453L178.545 4.71851L49.8541 133.41C-64.6758 261.286 61.0131 414.412 179.695 407.923Z" />
    </Svg>
);

export default Flag;
