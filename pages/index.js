import React from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import AnnouncementBlock from '../src/blocks/announcementsBlock';
import ThemeContext, { primaryTheme } from '../src/context/themeContext';

export default function Home() {
    return (
        <ThemeContext theme={primaryTheme}>
            <div className={styles.container}>
                <Head>
                    <title>Salt Company Iowa City</title>
                    <link rel="icon" href="/favicon.ico" />
                </Head>

                <AnnouncementBlock />
            </div>
        </ThemeContext>
    );
}
