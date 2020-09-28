import React, { FC } from 'react';
import Head from 'next/head';
import AnnouncementBlock from '../src/blocks/announcementsBlock';
import ThemeContext, { primaryTheme } from '../src/context/themeContext';
import { Announcement, getAnnouncements } from '../src/services/announcements';
import FooterBlock from '../src/blocks/footer';

export interface HomeProps {
    announcements: Announcement[];
}

const Home: FC<HomeProps> = ({ announcements }) => (
    <ThemeContext theme={primaryTheme}>
        <div>
            <Head>
                <title>Salt Company Iowa City</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <AnnouncementBlock links={announcements} />
            <FooterBlock />
        </div>
    </ThemeContext>
);

export async function getStaticProps() {
    const announcements = await getAnnouncements();
    return { props: { announcements } };
}

export default Home;
