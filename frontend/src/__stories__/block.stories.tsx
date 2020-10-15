import React from 'react';
import { ServiceStory } from '../helpers/story';
import { storiesOf } from '@storybook/react';
import WelcomeContainer from '../containers/welcome';
import AnnouncementContainer from '../containers/announcement';
import { getWelcomeBlock } from './services/welcome.services';
import { getAnnouncementBlock } from './services/announcements.services';

storiesOf('Block', module)
    .add('Announcements', () => (
        <ServiceStory
            service={getAnnouncementBlock}
            component={AnnouncementContainer}
        />
    ))
    // .add('Connection Groups', () => (
    //     <BlockStory
    //         domain={'connection-groups'}
    //         component={ConnectionGroupContainer}
    //     />
    // ))
    // .add('Contact', () => (
    //     <BlockStory domain={'contact'} component={ContactContainer} />
    // ))
    // .add('How To Connect', () => (
    //     <BlockStory
    //         domain={'how-to-connect'}
    //         component={(props: any) => (
    //             <IntroContainer {...props}>
    //                 <HowToConnectSvg />
    //             </IntroContainer>
    //         )}
    //     />
    // ))
    // .add('Ministry Connections', () => (
    //     <BlockStory
    //         domain={'ministry-connections'}
    //         component={MinistryConnectionContainer}
    //     />
    // ))
    // .add('Ministry Descriptions', () => (
    //     <BlockStory
    //         domain={'ministry-descriptions'}
    //         component={MinistryDescriptionContainer}
    //     />
    // ))
    // .add('Staff', () => (
    //     <BlockStory domain={'staff'} component={StaffContainer} />
    // ))
    // .add('Upcoming Events', () => (
    //     <BlockStory
    //         domain={'upcoming-events'}
    //         component={UpcomingEventsContainer}
    //     />
    // ))
    .add('Welcome', () => (
        <ServiceStory service={getWelcomeBlock} component={WelcomeContainer} />
    ));
// .add('Who We Are', () => (
//     <BlockStory
//         domain={'who-we-are'}
//         component={(props: any) => (
//             <IntroContainer {...props}>
//                 <WhoWeAreSvg />
//             </IntroContainer>
//         )}
//     />
// ));
