import React, { FC } from 'react';
import Head from 'next/head';
import AnnouncementContainer from '../src/containers/announcement';
import ThemeContext, { primaryTheme } from '../src/context/themeContext';
import {
    AnnouncementBlock,
    getAnnouncementBlock,
} from '../src/services/announcements.services';
import FooterContainer from '../src/containers/footer';
import {
    getWelcomeBlock,
    WelcomeBlock,
} from '../src/services/welcome.services';
import WelcomeContainer from '../src/containers/welcome';
import { css } from 'styled-components';

import { convertToImage, storeImage } from '../src/helpers/imageOptimization';
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
    announcementBlock: AnnouncementBlock;
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

const processImage = async (url: string) => {
    console.log('1');
    const response = await fetch(url);
    console.log('2');
    const fileName = url.split('/').pop();
    console.log('3');
    if (!fileName) return url;
    const i = convertToImage(url);
    console.log('4');

    return storeImage(i, response);
};

const aaa = async (bbb: AnnouncementBlock) => {
    // console.log(JSON.stringify(bbb));
    const ccc = deepMap(bbb, (val: any, key: string) => (!val ? null : val));
    // console.log(JSON.stringify(ccc));
    return deepMapAsync(ccc, async (val: any, key: string) => {
        console.log('LAMBDA', key, val);
        return key === 'url' ? processImage(val) : val;
    });
};

export async function getStaticProps() {
    const announcementBlock = await getAnnouncementBlock();
    const welcomeBlock = await getWelcomeBlock();

    console.log(JSON.stringify(announcementBlock));
    const ccc = await aaa(announcementBlock);
    console.log(JSON.stringify(ccc));

    return {
        props: { announcementBlock: ccc, welcomeBlock },
    };
}

export default Home;
