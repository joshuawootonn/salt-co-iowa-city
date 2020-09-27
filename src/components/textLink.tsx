import React, { FC } from 'react';
import { css } from 'styled-components';

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
                  font-family: 'Montserrat', Arial, sans-serif;
                  padding: 5px 5px 3px 5px;
              `};

        color: ${({ theme }) => theme.colors.purple.light};

        font-size: ${size === 'default' ? 25 : 18}px;

        cursor: pointer;
        user-select: none;
    `,
};

export interface TextLinkProps {
    type?: 'primary' | 'secondary';
    size?: 'default' | 'small';
}

const TextLink: FC<TextLinkProps> = ({ children, ...props }) => (
    <a css={styles.root(props)}>{children}</a>
);

TextLink.defaultProps = {
    type: 'primary',
    size: 'default',
};

export default TextLink;
