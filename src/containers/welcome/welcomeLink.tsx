import React, { FC } from 'react';
import typography from '../../components/typography';
import { css } from 'styled-components';
import TextLink from '../../components/textLink';
import Link from 'next/link';

const styles = {
    root: css`
        max-width: 750px;
        display: flex;
        flex-direction: column;
    `,
    text: css`
        ${typography.bigText};
        border-bottom: 2px solid ${({ theme }) => theme.colors.purple.lightest};
        padding-bottom: 10px;
    `,
    button: css`
        transform: translateY(-2px);
        justify-self: flex-end;
        align-self: flex-end;
    `,
};

export interface TextButtonProps {
    text: string;
    label: string;
    href: string;
}

const WelcomeLink: FC<TextButtonProps> = ({ text, label, href }) => {
    return (
        <div css={styles.root}>
            <p css={styles.text}>{text}</p>
            <Link href={href}>
                <TextLink css={styles.button}>{label}</TextLink>
            </Link>
        </div>
    );
};

export default WelcomeLink;
