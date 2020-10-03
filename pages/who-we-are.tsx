import React, { FC } from 'react';
import Link from 'next/link';
import ThemeContext, { primaryTheme } from '../src/context/themeContext';
import Head from 'next/head';
import FooterContainer from '../src/containers/footer';
import HeaderContainer from '../src/containers/header/header.container';
import IntroContainer from '../src/containers/intro';
import WhoWeAreSvg from '../src/svgs/whoWeAre.svg';
import {
    getWhoWeAreBlock,
    WhoWeAreBlock,
} from '../src/services/whoWeAre.services';

export interface WhoWeAreProps {
    whoWeAreBlock: WhoWeAreBlock;
}

const WhoWeAre: FC<WhoWeAreProps> = (props) => (
    <ThemeContext theme={primaryTheme}>
        <Head>
            <title>Salt Company Iowa City</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <HeaderContainer />
        <IntroContainer {...props.whoWeAreBlock}>
            <WhoWeAreSvg />
        </IntroContainer>
        <FooterContainer />
        <Link href="/">
            <a>Back to home</a>
        </Link>
    </ThemeContext>
);
export async function getStaticProps() {
    const whoWeAreBlock = await getWhoWeAreBlock();

    return { props: { whoWeAreBlock } };
}

export default WhoWeAre;
