import React, { FC } from 'react';
import { css } from 'styled-components/macro';

const styles = {
    root: ({ size, type }: TextLinkProps) => css`
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

export interface TextLinkProps {
    type?: 'primary' | 'secondary';
    size?: 'default' | 'small';
    href?: string;
}

const TextLink: FC<TextLinkProps> = ({ children, ...props }) => (
    <a css={styles.root(props)} {...props}>
        {children}
    </a>
);

TextLink.defaultProps = {
    type: 'primary',
    size: 'default',
};

export default TextLink;
