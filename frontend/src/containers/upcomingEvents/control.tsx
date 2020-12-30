import React, { FC } from 'react';

import { css } from 'styled-components/macro';
import BlockArrow from '../../svgs/blockArrow.svg';
import layout from '../../components/layout';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const styles = {
    arrowContainer: css`
        ${layout.container};
        justify-content: flex-end;
        align-items: flex-end;
        display: flex;
        width: 100%;
        flex-direction: row;

        & > button:not(:first-child) {
            margin-left: 8px;
        }
    `,

    button: css`
        width: 100px;
        background: none;
        border: none;

        transition: ease 150ms;
        outline: none;
        cursor: pointer;
        transform-origin: center;

        &:hover,
        &:focus {
            transform: scale(1.1) translateY(-50%);
        }
        &:active,
        &:focus:active {
            transform: scale(1) translateY(-50%);
        }
    `,
};

const Left = styled(motion.button)`
    ${styles.button};
    svg {
        transform: scaleX(-1);
    }

    ::before {
        display: none;
    }
    z-index: 100;
`;

const Right = styled(motion.button)`
    ${styles.button};

    ::before {
        display: none;
    }

    z-index: 100;
`;

export const RightArrow: FC = (props) => {
    return (
        <Right {...props}>
            <BlockArrow />
        </Right>
    );
};

export const LeftArrow: FC = (props) => {
    return (
        <Left {...props}>
            <BlockArrow />
        </Left>
    );
};
