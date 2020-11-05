import React, { FC } from 'react';
import { css } from 'styled-components/macro';
import typography from './typography';
import { Link } from 'gatsby';

const styles = {
    root: css`
        ${typography.card.link};
        cursor: pointer;
        user-select: none;
        text-wrap: none;
    `,
};

export interface CardLinkProps {
    to?: string;
    target?: string;
    rel?: string;
}

const CardLink: FC<CardLinkProps> = ({ children, ...props }) => (
    <Link css={styles.root as any} {...props}>
        {children}
    </Link>
);

export default CardLink;
