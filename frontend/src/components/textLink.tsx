import React, { FC } from 'react';
import styled, { css } from 'styled-components/macro';
import GatsbyLink from 'gatsby-link';
import typography from './typography';
import { motion } from 'framer-motion';
import { queryShit } from './useScreenType';

const styles = {
    root: ({ size, type, font }: BaseTextLinkProps) => css`
        text-decoration: none;

        font-family: ${font === 'primary' ? 'MonumentExtended' : 'Montserrat'},
            Arial, sans-serif;

        text-transform: ${font === 'primary' ? 'uppercase' : 'none'};

        color: ${({ theme }) => theme.colors.blue.light};

        cursor: pointer;
        user-select: none;

        text-wrap: none;

        transition: ease 500ms;
        &:hover {
            color: ${({ theme }) => theme.colors.blue.lightest};
        }
        &:focus {
            color: ${({ theme }) => theme.colors.blue.lightest};
        }
        &:active {
            color: ${({ theme }) => theme.colors.blue.lightest};
        }

        ${type === 'primary' &&
        css`
            border: 2px solid ${({ theme }) => theme.colors.blue.lightest};

            text-transform: uppercase;
            ${queryShit({
                mobile: css`
                    padding: ${size === 'default'
                        ? '5px 30px 4px 30px'
                        : '5px 25px 4px 25px'};
                    font-size: ${size === 'default' ? 18 : 12}px;
                `,
                tablet: css`
                    padding: ${size === 'default'
                        ? '5px 50px 3px 50px'
                        : '5px 35px 3px 35px'};
                    font-size: ${size === 'default' ? 25 : 18}px;
                `,
            })}
        `}
        ${type === 'secondary' &&
        css`
            border: 2px solid ${({ theme }) => theme.colors.transparent};
            padding: 5px 5px 3px 5px;
            font-size: ${size === 'default' ? 25 : 18}px;

            ${queryShit({
                mobile: css`
                    font-size: ${size === 'default' ? 22 : 18}px;
                `,
                tablet: css`
                    font-size: ${size === 'default' ? 25 : 18}px;
                `,
            })}
        `};
        ${type === 'card' &&
        css`
            ${typography.card.link};
        `};

        ${type === 'largeText' &&
        css`
            ${typography.card.link};
            text-decoration: underline;
        `};
    `,
};

interface BaseTextLinkProps {
    type?: 'primary' | 'secondary' | 'card' | 'largeText';
    font?: 'primary' | 'secondary';
    size?: 'default' | 'small';
    onClick?: any;
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
    destinationType,
    ...props
}) => {
    return destinationType === 'internal' ? (
        <Link {...props}>{children}</Link>
    ) : (
        <motion.a
            target="_blank"
            rel="noopener noreferrer"
            css={styles.root(props) as any}
            {...props}
        >
            {children}
        </motion.a>
    );
};

TextLink.defaultProps = {
    type: 'primary',
    font: 'primary',
    size: 'default',
};

export default TextLink;
