import React, { FC } from 'react';
import { css } from 'styled-components';
import Salt from '../svgs/salt.svg';

const styles = {
    root: css`
        display: grid;
        column-gap: 20px;
        grid-auto-flow: column;
        margin: 0 auto;
        max-width: 1140px;
        position: relative;

        border-top: 2px solid ${({ theme }) => theme.colors.purple.medium};
        border-right: 2px solid ${({ theme }) => theme.colors.purple.medium};

        display: flex;
        flex-direction: row;
    `,
    background: css`
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        max-width: 100vw;
        overflow: hidden;
    `,
    left: css`
        width: 33%;
    `,

    linkedListRoot: css`
        display: flex;
        flex-direction: column;
    `,
};

const LinkedList = () => {
    return (
        <div css={styles.linkedListRoot}>
            <a>Who we Are</a>
            <a>Ministries</a>
            <a>Staff</a>
        </div>
    );
};

const BigLinks = () => {
    return (
        <div>
            <a>Contact us</a>
            <a>Our home church</a>
        </div>
    );
};

const SocialLinks = () => {
    return (
        <div>
            <a>instagram</a>
            <a>vimeo</a>
            <a>youtube</a>
        </div>
    );
};

export interface FooterBlockProps {}

const FooterBlock: FC<FooterBlockProps> = () => (
    <div css={styles.root}>
        <div css={styles.left}>
            <Salt />
        </div>
        <div css={styles.left}>
            <LinkedList />
            <BigLinks />
        </div>
        <div css={styles.left}>
            <LinkedList />

            <SocialLinks />
        </div>
    </div>
);

export default FooterBlock;
