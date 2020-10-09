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
import {
    getUpcomingEventsBlock,
    UpcomingEventBlock,
} from '../src/services/upcomingEvent.service';
import {
    ConnectionGroupBlock,
    getConnectionGroupBlock,
} from '../src/services/connectionGroup.service';
import UpcomingEventsContainer from '../src/containers/upcomingEvents';
import ConnectionGroupContainer from '../src/containers/connectionGroup';
import { css } from 'styled-components';

const styles = {
    intro: css`
        margin-bottom: 150px;
    `,
    upcomingEvents: css`
        margin-bottom: 300px;
    `,
    connectionGroup: css`
        margin-bottom: 250px;
    `,
    ministryConnections: css`
        margin-bottom: 250px;
    `,
};

export interface HowToConnectProps {
    howToConnectBlock: HowToConnectBlock;
    ministryConnectionsBlock: MinistryConnectionBlock;
    upcomingEventsBlock: UpcomingEventBlock;
    connectionGroupBlock: ConnectionGroupBlock;
}

const HowToConnect: FC<HowToConnectProps> = (props) => (
    <ThemeContext theme={primaryTheme}>
        <Head>
            <title>Salt Company Iowa City</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <HeaderContainer />
        <IntroContainer {...props.howToConnectBlock} css={styles.intro}>
            <HowToConnectSvg />
        </IntroContainer>
        <UpcomingEventsContainer
            {...props.upcomingEventsBlock}
            css={styles.upcomingEvents}
        />

        <ConnectionGroupContainer
            {...props.connectionGroupBlock}
            css={styles.connectionGroup}
        />
        <MinistryConnectionContainer
            ministryConnections={
                props.ministryConnectionsBlock.ministryConnections
            }
            css={styles.ministryConnections}
        />
        <FooterContainer />
    </ThemeContext>
);
export async function getStaticProps() {
    const howToConnectBlock = await getHowToConnectBlock();
    const ministryConnectionsBlock = await getMinistryConnectionsBlock();
    const upcomingEventsBlock = await getUpcomingEventsBlock();
    const connectionGroupBlock = await getConnectionGroupBlock();

    return {
        props: {
            howToConnectBlock,
            ministryConnectionsBlock,
            upcomingEventsBlock,
            connectionGroupBlock,
        },
    };
}

export default HowToConnect;
