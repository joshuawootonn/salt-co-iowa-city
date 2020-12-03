import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const Button = styled(motion.button)`
    padding: 10px;
    cursor: pointer;

    background-color: transparent;
    border: none;

    outline: none;

    transition: ease 150ms;

    &:hover {
        transform: scale(1.1);
    }
    &:focus {
        transform: scale(1.1);
    }
    &:active {
        transform: scale(1.05);
    }
`;

const IconAction = (props) => {
    if (props.type === 'button') {
        return <Button {...props}>{props.children}</Button>;
    }

    return <motion.a {...props}>{props.children}</motion.a>;
};

export default IconAction;
