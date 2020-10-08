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
        <WelcomeContainer {...props.welcomeBlock} />
        <AnnouncementContainer block={props.announcementBlock} />
        <FooterContainer />
    </ThemeContext>
);

export async function getStaticProps() {
    const announcementBlock = await getAnnouncementBlock();
    const welcomeBlock = await getWelcomeBlock();

    return { props: { announcementBlock, welcomeBlock } };
}

export default Home;
