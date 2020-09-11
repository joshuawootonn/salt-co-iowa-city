import React from 'react'
import { storiesOf } from '@storybook/react';
import AnnouncementLink from "./announcementLink";


storiesOf('AnnouncementLink', module).add('with text', () => {
    return <AnnouncementLink  />;
});