import React, { FC } from 'react';
import Head from 'next/head';
import AnnouncementContainer from '../src/containers/announcement';
import ThemeContext, { primaryTheme } from '../src/context/themeContext';
import {
    any,
    getAnnouncementBlock,
} from '../src/services/announcements.services';
import FooterContainer from '../src/containers/footer';
import {
    getWelcomeBlock,
    WelcomeBlock,
} from '../src/services/welcome.services';
import WelcomeContainer from '../src/containers/welcome';
import { css } from 'styled-components';

import {
    convertToImage,
    findImagesAndConvert,
    storeImage,
} from '../src/helpers/imageOptimization';
import deepMap, { deepMapAsync } from '../src/helpers/deepMap';

const styles = {
    intro: css`
        margin-bottom: 250px;
    `,
    announcements: css`
        margin-bottom: 450px;
    `,
};

export interface HomeProps {
    announcementBlock: any;
    welcomeBlock: WelcomeBlock;
}

const Home: FC<HomeProps> = (props) => (
    <ThemeContext theme={primaryTheme}>
        <Head>
            <title>Salt Company Iowa City</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <WelcomeContainer {...props.welcomeBlock} css={styles.intro} />
        <AnnouncementContainer
            {...props.announcementBlock}
            css={styles.announcements}
        />
        <FooterContainer />
    </ThemeContext>
);

export async function getStaticProps() {
    const announcementBlock = await getAnnouncementBlock();
    const welcomeBlock = await getWelcomeBlock();

    console.log(JSON.stringify(announcementBlock));
    const ccc = await findImagesAndConvert(announcementBlock);
    console.log(JSON.stringify(ccc));

    return {
        props: { announcementBlock: ccc, welcomeBlock },
    };
}

export default Home;
