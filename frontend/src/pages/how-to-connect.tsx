import React, { FC } from 'react';

import { css } from 'styled-components/macro';
import { HowToConnectBlock } from '../__stories__/services/howToConnect.services';
import { MinistryConnectionBlock } from '../__stories__/services/ministryConnection.service';
import { UpcomingEventBlock } from '../__stories__/services/upcomingEvent.service';
import { ConnectionGroupBlock } from '../__stories__/services/connectionGroup.service';
import ThemeContext, { primaryTheme } from '../context/themeContext';
import HeaderContainer from '../containers/header';
import IntroContainer from '../containers/intro';
import HowToConnectSvg from '../svgs/howToConnect.svg';
import UpcomingEventsContainer from '../containers/upcomingEvents';
import ConnectionGroupContainer from '../containers/connectionGroup';
import MinistryConnectionContainer from '../containers/ministryConnection';
import FooterContainer from '../containers/footer';
import { useHowToConnectBlock } from '../services/howToConnect.services';
import { useUpcomingEventBlock } from '../services/upcomingEvent.services';
import { useConnectionGroupBlock } from '../services/connectionGroup.services';
import { useMinistryConnectionBlock } from '../services/ministryConnection.services';

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

const HowToConnect: FC = () => {
    const howToConnectBlock = useHowToConnectBlock();
    const upcomingEventBlock = useUpcomingEventBlock();

    const connectionGroupBlock = useConnectionGroupBlock();
    const ministryConnectionsBlock = useMinistryConnectionBlock();

    console.log(connectionGroupBlock);
    return (
        <ThemeContext theme={primaryTheme}>
            <HeaderContainer />
            <IntroContainer {...howToConnectBlock} css={styles.intro}>
                <HowToConnectSvg />
            </IntroContainer>
            <UpcomingEventsContainer
                {...upcomingEventBlock}
                css={styles.upcomingEvents}
            />

            <ConnectionGroupContainer
                {...connectionGroupBlock}
                css={styles.connectionGroup}
            />
            <MinistryConnectionContainer
                ministryConnections={
                    ministryConnectionsBlock.ministryConnections
                }
                css={styles.ministryConnections}
            />
            <FooterContainer />
        </ThemeContext>
    );
};

export default HowToConnect;
