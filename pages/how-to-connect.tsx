import React, { FC } from 'react';
import Link from 'next/link';
import ThemeContext, { primaryTheme } from '../src/context/themeContext';
import Head from 'next/head';
import FooterContainer from '../src/containers/footer';
import HeaderContainer from '../src/containers/header/header.container';
import IntroContainer from '../src/containers/intro';
import {
    getHowToConnectBlock,
    HowToConnectBlock,
} from '../src/services/howToConnect.services';
import HowToConnectSvg from '../src/svgs/howToConnect.svg';

export interface HowToConnectProps {
    howToConnectBlock: HowToConnectBlock;
}

const HowToConnect: FC<HowToConnectProps> = (props) => (
    <ThemeContext theme={primaryTheme}>
        <Head>
            <title>Salt Company Iowa City</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <HeaderContainer />
        <IntroContainer {...props.howToConnectBlock}>
            <HowToConnectSvg />
        </IntroContainer>
        <FooterContainer />
        <Link href="/">
            <a>Back to home</a>
        </Link>
    </ThemeContext>
);
export async function getStaticProps() {
    const howToConnectBlock = await getHowToConnectBlock();

    return { props: { howToConnectBlock } };
}

export default HowToConnect;
