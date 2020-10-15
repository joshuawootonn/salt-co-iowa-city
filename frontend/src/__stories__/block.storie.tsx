import React from 'react';
import { BlockStory } from '../helpers/story';
import { storiesOf } from '@storybook/react';
import WelcomeContainer from '../containers/welcome';
import AnnouncementContainer from '../containers/announcement';
import ConnectionGroupContainer from '../containers/connectionGroup';
import ContactContainer from '../containers/contact';
import UpcomingEventsContainer from '../containers/upcomingEvents';
import StaffContainer from '../containers/staff';
import MinistryDescriptionContainer from '../containers/ministryDescription';
import MinistryConnectionContainer from '../containers/ministryConnection';
import HowToConnectSvg from '../svgs/howToConnect.svg';
import IntroContainer from '../containers/intro';
import WhoWeAreSvg from '../svgs/whoWeAre.svg';

storiesOf('Block', module)
    .add('Announcements', () => (
        <BlockStory
            domain={'announcements'}
            component={AnnouncementContainer}
        />
    ))
    .add('Connection Groups', () => (
        <BlockStory
            domain={'connection-groups'}
            component={ConnectionGroupContainer}
        />
    ))
    .add('Contact', () => (
        <BlockStory domain={'contact'} component={ContactContainer} />
    ))
    .add('How To Connect', () => (
        <BlockStory
            domain={'how-to-connect'}
            component={(props: any) => (
                <IntroContainer {...props}>
                    <HowToConnectSvg />
                </IntroContainer>
            )}
        />
    ))
    .add('Ministry Connections', () => (
        <BlockStory
            domain={'ministry-connections'}
            component={MinistryConnectionContainer}
        />
    ))
    .add('Ministry Descriptions', () => (
        <BlockStory
            domain={'ministry-descriptions'}
            component={MinistryDescriptionContainer}
        />
    ))
    .add('Staff', () => (
        <BlockStory domain={'staff'} component={StaffContainer} />
    ))
    .add('Upcoming Events', () => (
        <BlockStory
            domain={'upcoming-events'}
            component={UpcomingEventsContainer}
        />
    ))
    .add('Welcome', () => (
        <BlockStory domain={'welcome'} component={WelcomeContainer} />
    ))
    .add('Who We Are', () => (
        <BlockStory
            domain={'who-we-are'}
            component={(props: any) => (
                <IntroContainer {...props}>
                    <WhoWeAreSvg />
                </IntroContainer>
            )}
        />
    ));
