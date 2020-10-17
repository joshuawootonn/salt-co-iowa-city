import React, { FC } from 'react';
import { css } from 'styled-components/macro';
import TextLink from '../../components/textLink';
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
        <LogoLink to={'/'} css={styles.link} />
        <div css={styles.grow} />

        <TextLink
            to={'/who-we-are'}
            destinationType={'internal'}
            css={styles.link}
        >
            Who We are
        </TextLink>
        <TextLink
            to={'/how-to-connect'}
            destinationType={'internal'}
            css={styles.link}
        >
            Get Connected
        </TextLink>
    </div>
);

export default HeaderContainer;
