import React from 'react';
import { motion } from 'framer-motion';
import styled, { css } from 'styled-components/macro';

const baseStyles = css`
    padding: 10px;
    cursor: pointer;

    background-color: transparent;
    border: none;

    outline: none;

    transition: ease 150ms;

    transform-origin: center;
    &:hover {
        transform: scale(1.15);
    }
    &:focus {
        transform: scale(1.15);
    }
    &:active {
        transform: scale(1.075);
    }
`;

const Button = styled(motion.button)`
    ${baseStyles}
`;

const Link = styled(motion.a)`
    ${baseStyles}
`;

const IconAction = (props) => {
    if (props.type === 'button') {
        return <Button {...props}>{props.children}</Button>;
    }

    return <Link {...props}>{props.children}</Link>;
};

export default IconAction;
