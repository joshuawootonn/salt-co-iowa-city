import React from 'react';
import { ServiceStory } from '../helpers/story';
import { storiesOf } from '@storybook/react';
import AnnouncementContainer from '../containers/announcement';
import { getAnnouncementBlock } from './services/announcements.service';
import WelcomeContainer from '../containers/welcome';
import { getWelcomeBlock } from './services/welcome.service';
import { getWhoWeAreBlock } from './services/whoWeAre.service';
import IntroContainer from '../containers/intro';
import { getStaffBlock } from './services/staff.services';
import ConnectionGroupContainer from '../containers/connectionGroup';
import { getConnectionGroupBlock } from './services/connectionGroup.service';
import { getContactBlock } from './services/contact.service';
import { getHowToConnectBlock } from './services/howToConnect.service';
import ContactContainer from '../containers/contact';
import MinistryConnectionContainer from '../containers/ministryConnection';
import MinistryDescriptionContainer from '../containers/ministryDescription';
import StaffContainer from '../containers/staff';
import UpcomingEventsContainer from '../containers/upcomingEvents';
import { getMinistryConnectionsBlock } from './services/ministryConnection.service';
import { getMinistryDescriptionBlock } from './services/ministryDescription.service';
import { getUpcomingEventsBlock } from './services/upcomingEvent.service';
import ExtendedNavigationContainer from '../containers/extendedNavigation';
import { getFooterBlock } from './services/footer.service';

storiesOf('Block', module)
    .add('Announcements', () => (
        <ServiceStory
            services={[
                {
                    propName: 'announcementBlock',
                    service: getAnnouncementBlock,
                },
            ]}
            component={AnnouncementContainer}
        />
    ))
    .add('Connection Groups', () => (
        <ServiceStory
            services={[
                {
                    propName: 'connectionGroupBlock',
                    service: getConnectionGroupBlock,
                },
            ]}
            component={ConnectionGroupContainer}
        />
    ));
// .add('Contact', () => (
//     <ServiceStory
//         services={[
//             {
//                 propName: 'contactBlock',
//                 service: getContactBlock,
//             },
//             {
//                 propName: 'connectionGroupBlock',
//                 service: getConnectionGroupBlock,
//             },
//         ]}
//         component={ContactContainer}
//     />
// ));
// .add('Footer', () => (
//     <ServiceStory
//         service={getFooterBlock}
//         component={ExtendedNavigationContainer}
//     />
// ))
// .add('How To Connect', () => (
//     <ServiceStory
//         service={getHowToConnectBlock}
//         component={(props: any) => (
//             <IntroContainer {...props} type={'HowToConnect'} />
//         )}
//     />
// ))
// .add('Ministry Connections', () => (
//     <ServiceStory
//         service={getMinistryConnectionsBlock}
//         component={MinistryConnectionContainer}
//     />
// ))
// .add('Ministry Descriptions', () => (
//     <ServiceStory
//         service={getMinistryDescriptionBlock}
//         component={MinistryDescriptionContainer}
//     />
// ))
// .add('Staff', () => (
//     <ServiceStory service={getStaffBlock} component={StaffContainer} />
// ))
// .add('Upcoming Events', () => (
//     <ServiceStory
//         service={getUpcomingEventsBlock}
//         component={UpcomingEventsContainer}
//     />
// ))
// .add('Welcome', () => (
//     <ServiceStory service={getWelcomeBlock} component={WelcomeContainer} />
// ))
// .add('Who We Are', () => (
//     <ServiceStory
//         service={getWhoWeAreBlock}
//         component={(props: any) => (
//             <IntroContainer {...props} type={'WhoWeAre'} />
//         )}
//     />
// ));
