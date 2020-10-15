import React, { FC } from 'react';
import { css } from 'styled-components/macro';
import typography from './typography';

const styles = {
    root: css`
        ${typography.card.link};
        cursor: pointer;
        user-select: none;
        text-wrap: none;
    `,
};

export interface CardLinkProps {
    href?: string;
    target?: string;
    rel?: string;
}

const CardLink: FC<CardLinkProps> = ({ children, ...props }) => (
    <a css={styles.root} {...props}>
        {children}
    </a>
);

export default CardLink;
