import React from 'react';
import { storiesOf } from '@storybook/react';
import AnnouncementLink from './announcementLink';
import { QueryStory } from '../helpers/story';
import { announcementQuery_test } from '../services/announcements.services';

storiesOf('AnnouncementLink', module).add('Default', () => (
    <QueryStory query={announcementQuery_test} component={AnnouncementLink} />
));
