import React, { FC } from 'react';
import { css } from 'styled-components';
import Salt from '../svgs/salt.svg';

const styles = {
    root: css`
        color: ${({ theme }) => theme.colors.purple.light};

        cursor: pointer;
        user-select: none;
        text-decoration: none;
        text-wrap: none;
    `,
    logo: css`
        height: 68px;
    `,
};

export interface TextLinkProps {
    href?: string;
}

const LogoLink: FC<TextLinkProps> = ({ children, ...props }) => (
    <a css={styles.root} {...props}>
        <Salt css={styles.logo} />
    </a>
);

export default LogoLink;
