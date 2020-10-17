import React, { FC } from 'react';
import styled, { css } from 'styled-components/macro';
import GatsbyLink from 'gatsby-link';

const styles = {
    root: ({ size, type }: BaseTextLinkProps) => css`
        ${type === 'primary'
            ? css`
                  border: 2px solid
                      ${({ theme }) => theme.colors.purple.lightest};
                  font-family: 'MonumentExtended', Arial, sans-serif;
                  padding: 5px 50px 3px 50px;
                  text-transform: uppercase;
              `
            : css`
                  border: 2px solid ${({ theme }) => theme.colors.transparent};
                  font-family: ${size === 'default'
                          ? 'MonumentExtended'
                          : 'Montserrat'},
                      Arial, sans-serif;
                  text-transform: ${size === 'default' ? 'uppercase' : 'none'};

                  padding: 5px 5px 3px 5px;
              `};

        color: ${({ theme }) => theme.colors.purple.light};

        font-size: ${size === 'default' ? 25 : 18}px;

        cursor: pointer;
        user-select: none;
        text-decoration: none;
        text-wrap: none;
    `,
};

interface BaseTextLinkProps {
    type?: 'primary' | 'secondary';
    size?: 'default' | 'small';
}

export interface ExternalTextLinkProps extends BaseTextLinkProps {
    href?: string;
    destinationType: 'external';
}

export interface InternalTextLinkProps extends BaseTextLinkProps {
    to?: string;
    destinationType: 'internal';
}

const Link = (props: any) => (
    <GatsbyLink to={'/'} {...props} css={styles.root(props)} />
);

const TextLink: FC<InternalTextLinkProps | ExternalTextLinkProps> = ({
    children,
    ...props
}) => {
    return props.destinationType === 'internal' ? (
        <Link {...props}>{children}</Link>
    ) : (
        <a css={styles.root(props)} {...props}>
            {children}
        </a>
    );
};

TextLink.defaultProps = {
    type: 'primary',
    size: 'default',
};

export default TextLink;
