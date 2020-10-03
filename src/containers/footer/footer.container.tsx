import React, { FC } from 'react';
import { css } from 'styled-components';
import Salt from '../../svgs/salt.svg';
import LinkedList from './linkedList';
import TextLink from '../../components/textLink';
import BigLinks from './bigLinks';
import SocialLinks from './socialLinks';

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
    logoContainer: css`
        grid-row: 1/3;
        position: relative;

        svg {
            position: absolute;
            top: 50%;
            left: 40%;
            transform: translate(-50%, -50%) rotate(-90deg);
        }
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

const FooterContainer: FC = () => (
    <div css={styles.root}>
        <div css={styles.logoContainer}>
            <Salt />
        </div>

        <LinkedList
            links={[
                { label: 'Who we Are', href: '' },
                { label: 'Ministries', href: '' },
                { label: 'Staff', href: '' },
            ]}
        />
        <BigLinks css={styles.bigLinks} />

        <LinkedList
            links={[
                { label: 'Get Connected', href: '' },
                { label: 'Events', href: '' },
                { label: 'Connection Groups', href: '' },
                { label: 'IFC', href: '' },
                { label: 'Freshman Church', href: '' },
            ]}
        />

        <SocialLinks css={styles.social} />
    </div>
);

export default FooterContainer;
