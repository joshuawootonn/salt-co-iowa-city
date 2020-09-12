import React from 'react';
import { storiesOf } from '@storybook/react';
import AnnouncementLink from './announcementLink';
import { gql } from '@apollo/client';
import { GraphQLStory } from '../helpers/story';

const query = gql`
    query announcementLink {
        linkAnnouncement(id: "1N5e3pwhAQVhT3XctYjwr4") {
            text
            link
            image {
                url
            }
        }
    }
`;

storiesOf('AnnouncementLink', module).add('Default', () => (
    <GraphQLStory query={query} component={AnnouncementLink} />
));
