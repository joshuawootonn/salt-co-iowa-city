import React, { FC } from 'react';

import { css } from 'styled-components/macro';
import Salt from '../../svgs/salt.svg';
import TextLink from '../../components/textLink';
import Link from 'next/link';
import LogoLink from '../../components/logoLink';

const styles = {
    root: css`
        position: fixed;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        height: 70px;
        margin: 40px auto 0 auto;
        padding: 0 80px;
        width: 100vw;
        z-index: 10;
    `,
    grow: css`
        flex-grow: 1;
    `,
    link: css`
        margin-left: 44px;
        display: inline-block;
    `,
};

const HeaderContainer: FC = () => (
    <div css={styles.root}>
        <Link href="/">
            <LogoLink css={styles.link} />
        </Link>
        <div css={styles.grow} />
        <Link href="/who-we-are">
            <TextLink css={styles.link}>Who We are</TextLink>
        </Link>
        <Link href="/how-to-connect">
            <TextLink css={styles.link}>Get Connected</TextLink>
        </Link>
    </div>
);

export default HeaderContainer;
