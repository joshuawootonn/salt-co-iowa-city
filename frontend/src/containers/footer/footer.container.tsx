import React, { FC } from 'react';
import { css } from 'styled-components/macro';
import Salt from '../../svgs/salt.svg';
import LinkedList from './linkedList';
import BigLinks from './bigLinks';
import SocialLinks from './socialLinks';
import { FooterBlock } from '../../models/footer';

const styles = {
    root: css`
        display: grid;
        padding: 40px;
        column-gap: 20px;
        grid-auto-flow: column;
        margin: 0 auto;
        max-width: 1140px;
        position: relative;

        border-top: 2px solid ${({ theme }) => theme.colors.purple.medium};
        border-right: 2px solid ${({ theme }) => theme.colors.purple.medium};

        grid-template-columns: repeat(3, minmax(0, 1fr));
        grid-template-rows: repeat(2, 1fr);
    `,
    background: css`
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        max-width: 100vw;
        overflow: hidden;
    `,
    logo: css`
        height: 130px;
        position: absolute;
        top: 50%;
        left: 40%;
        transform: translate(-50%, -50%) rotate(-90deg);
    `,
    logoContainer: css`
        grid-row: 1/3;
        position: relative;
    `,

    listOne: css``,
    listTwo: css``,
    social: css`
        grid-row: 2/3;
        justify-self: flex-end;
        align-self: flex-end;
    `,
    bigLinks: css`
        grid-row: 2/3;
        justify-self: flex-start;
        align-self: flex-end;

        overflow: visible;
    `,
};

const FooterContainer: FC<FooterBlock> = ({ externalLinks }) => (
    <div css={styles.root}>
        <div css={styles.logoContainer}>
            <Salt css={styles.logo} />
        </div>

        <LinkedList
            links={[
                { label: 'Who we Are', to: '/who-we-are' },
                { label: 'Ministries', to: '/who-we-are' },
                { label: 'Staff', to: '/who-we-are' },
            ]}
        />
        <BigLinks links={externalLinks} css={styles.bigLinks} />

        <LinkedList
            links={[
                { label: 'Get Connected', to: '/how-to-connect' },
                { label: 'Events', to: '/how-to-connect' },
                { label: 'Connection Groups', to: '/how-to-connect' },
                { label: 'IFC', to: '/how-to-connect' },
                { label: 'Freshman Church', to: '/how-to-connect' },
            ]}
        />

        <SocialLinks css={styles.social} />
    </div>
);

export default FooterContainer;
