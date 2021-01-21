import React from 'react';
import styled, { css } from 'styled-components/macro';

import { motion } from 'framer-motion';
import { lighten } from 'polished';

const styles = {
    root: css`
        width: 100%;
        height: 100%;
        position: relative;

        background-color: transparent;

        border: 2px solid transparent;
        border-radius: 0;

        padding: 0;

        outline: none;

        transition: ease 150ms;
    `,

    interactivity: css`
        ${({ theme }) => {
            const hoverCss = css`
                transform: scale(1.03);
                border: 2px solid ${lighten(0.3, theme.colors.background)};
            `;
            return css`
                cursor: pointer;

                &:focus-visible {
                    ${hoverCss}
                }
                &:hover {
                    ${hoverCss}
                }
                &:active,
                &:active:focus-visible {
                    transform: scale(1);
                    border: 2px solid ${lighten(0.4, theme.colors.background)};
                }
            `;
        }}
    `,
};

const Root = (props) => {
    if (props.type === 'button') {
        return (
            <motion.button css={[styles.root, styles.interactivity]} {...props}>
                {props.children}
            </motion.button>
        );
    }

    if (props.type === 'link') {
        return (
            <motion.a
                css={[styles.root, styles.interactivity]}
                target="_blank"
                rel="noopener noreferrer"
                {...props}
            >
                {props.children}
            </motion.a>
        );
    }

    return (
        <motion.div css={styles.root} {...props}>
            {props.children}
        </motion.div>
    );
};

export default Root;
