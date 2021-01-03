import React, { FC } from 'react';
import styled, { css } from 'styled-components/macro';
import Salt from '../svgs/salt.svg';
import { Link as GatsbyLink } from 'gatsby';

const styles = {
    logo: css`
        height: 68px;
    `,
};

export interface TextLinkProps {
    to: string;
    onClick?: any;
}

const Link = styled((props) => <GatsbyLink {...props} />)`
    color: ${({ theme }) => theme.colors.blue.light};

    cursor: pointer;
    user-select: none;
    text-decoration: none;
    text-wrap: none;
`;

const LogoLink: FC<TextLinkProps> = ({ children, ...props }) => (
    <Link {...props}>
        <Salt css={styles.logo} />
    </Link>
);

export default LogoLink;
