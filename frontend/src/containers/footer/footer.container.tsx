import React, { FC } from 'react';
import { css } from 'styled-components/macro';
import Salt from '../../svgs/salt.svg';
import LinkedList from './linkedList';
import BigLinks from './bigLinks';
import SocialLinks from './socialLinks';
import { FooterBlock } from '../../models/footer';
import slugify from '../../helpers/slugify';
import { queryShit } from '../../components/useScreenType';

const styles = {
    root: css`
        display: grid;
        padding: 40px;
        column-gap: 20px;
        grid-auto-flow: column;
        margin: 0 auto;
        max-width: 1140px;
        position: relative;

        border-top: 2px solid ${({ theme }) => theme.colors.blue.medium};
        border-right: 2px solid ${({ theme }) => theme.colors.blue.medium};

        grid-template-columns: repeat(3, minmax(0, 1fr));
        grid-template-rows: repeat(2, 1fr);

        ${queryShit({
            mobile: css`
                border-top: none;
                border-right: none;
                grid-template-columns: repeat(2, minmax(0, 1fr));
                grid-template-rows: repeat(4, fit-content());
            `,
        })}
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

        ${queryShit({
            mobile: css`
                position: relative;
                top: 0;
                left: 0;

                height: 32px;
                transform: translate(0%, 0%) rotate(0deg);
            `,
        })};
    `,
    logoContainer: css`
        grid-row: 1/3;
        position: relative;
        ${queryShit({
            mobile: css`
                grid-row: 4/5;
                grid-column: 1/2;

                justify-self: flex-start;
                align-self: center;
            `,
        })}
    `,

    listOne: css`
        ${queryShit({
            mobile: css`
                grid-column: 1/3;
                grid-row: 2/3;
            `,
        })}
    `,
    listTwo: css`
        ${queryShit({
            mobile: css`
                grid-column: 1/3;
                grid-row: 3/4;
            `,
        })}
    `,
    social: css`
        grid-row: 2/3;

        justify-self: flex-end;
        align-self: flex-end;
        ${queryShit({
            mobile: css`
                grid-column: 2/3;
                grid-row: 4/5;

                justify-self: flex-end;
                align-self: center;
            `,
        })};
    `,
    bigLinks: css`
        grid-row: 2/3;

        ${queryShit({
            mobile: css`
                grid-column: 1/3;
                grid-row: 1/2;
            `,
        })};
        justify-self: flex-start;
        align-self: flex-end;

        overflow: visible;
    `,
};

const FooterContainer: FC<FooterBlock> = ({
    externalLinks,
    howToConnectLinks,
    whoWeAreLinks,
}) => (
    <div css={styles.root}>
        <div css={styles.logoContainer}>
            <Salt css={styles.logo} />
        </div>

        <LinkedList
            css={styles.listOne}
            links={[
                { label: 'Who we Are', to: '/who-we-are' },
                ...whoWeAreLinks.map((link: string) => ({
                    label: link,
                    to: `/who-we-are/#${slugify(link)}`,
                })),
            ]}
        />
        <BigLinks links={externalLinks} css={styles.bigLinks} />

        <LinkedList
            css={styles.listTwo}
            links={[
                { label: 'Get Connected', to: '/how-to-connect' },
                ...howToConnectLinks.map((link: string) => ({
                    label: link,
                    to: `/how-to-connect/#${slugify(link)}`,
                })),
            ]}
        />

        <SocialLinks css={styles.social} />
    </div>
);

export default FooterContainer;
