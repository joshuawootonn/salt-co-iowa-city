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
        background: ${({ theme }) => theme.colors.backgroundTransparent};
        border: none;

        transition: ease 150ms;
        outline: none;
        cursor: pointer;

        &:hover,
        &:focus {
            transform: scale(1.1);
        }
        &:active,
        &:focus:active {
            transform: scale(1);
        }
    `,
};

const Left = styled(motion.button)`
    ${styles.button};
    svg {
        transform: rotate(180deg);
    }
`;

const Right = styled(motion.button)`
    ${styles.button};
`;

interface ControlProps {
    onNext: () => void;
    onPrev: () => void;
}

const Control: FC<ControlProps> = ({ onNext, onPrev }) => {
    return (
        <div css={styles.arrowContainer}>
            <Left onClick={onPrev}>
                <BlockArrow />
            </Left>
            <Right onClick={onNext}>
                <BlockArrow />
            </Right>
        </div>
    );
};

export default Control;
