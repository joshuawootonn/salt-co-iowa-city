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
import StaffContainer from '../src/containers/staff';
import { getStaffBlock, StaffBlock } from '../src/services/staff.services';

export interface WhoWeAreProps {
    whoWeAreBlock: WhoWeAreBlock;
    staffBlock: StaffBlock;
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
        <StaffContainer {...props.staffBlock} />
        <FooterContainer />
        <Link href="/">
            <a>Back to home</a>
        </Link>
    </ThemeContext>
);
export async function getStaticProps() {
    const whoWeAreBlock = await getWhoWeAreBlock();
    const staffBlock = await getStaffBlock();

    return { props: { whoWeAreBlock, staffBlock } };
}

export default WhoWeAre;
