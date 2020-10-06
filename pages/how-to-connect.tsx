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
import MinistryConnectionContainer from '../src/containers/ministryConnection';
import {
    getMinistryConnectionsBlock,
    MinistryConnectionBlock,
} from '../src/services/ministryConnection.service';

export interface HowToConnectProps {
    howToConnectBlock: HowToConnectBlock;
    ministryConnectionsBlock: MinistryConnectionBlock;
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

        <MinistryConnectionContainer
            ministryConnections={
                props.ministryConnectionsBlock.ministryConnections
            }
        />
        <FooterContainer />
        <Link href="/">
            <a>Back to home</a>
        </Link>
    </ThemeContext>
);
export async function getStaticProps() {
    const howToConnectBlock = await getHowToConnectBlock();
    const ministryConnectionsBlock = await getMinistryConnectionsBlock();
    return { props: { howToConnectBlock, ministryConnectionsBlock } };
}

export default HowToConnect;
