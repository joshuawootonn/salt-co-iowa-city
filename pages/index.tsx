import React, { FC } from 'react';
import Head from 'next/head';
import AnnouncementContainer from '../src/containers/announcement';
import ThemeContext, { primaryTheme } from '../src/context/themeContext';
import {
    Announcement,
    AnnouncementBlock,
    getAnnouncementBlock,
} from '../src/services/announcements';
import FooterContainer from '../src/containers/footer';

export interface HomeProps {
    announcementBlock: AnnouncementBlock;
}

const Home: FC<HomeProps> = (props) => {
    console.log(props);
    return (
        <ThemeContext theme={primaryTheme}>
            <Head>
                <title>Salt Company Iowa City</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <AnnouncementContainer block={props.announcementBlock} />
            <FooterContainer />
        </ThemeContext>
    );
};

export async function getStaticProps() {
    const announcementBlock = await getAnnouncementBlock();

    return { props: { announcementBlock } };
}

export default Home;
