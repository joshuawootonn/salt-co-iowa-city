import React from 'react';
import { storiesOf } from '@storybook/react';
import SocialLink from './socialLink';

storiesOf('Social Link', module).add('Default', () => (
    <>
        <SocialLink href={''} type={'instagram'} />
        <br />
        <br />
        <br />
        <SocialLink href={''} type={'vimeo'} />
        <br />
        <br />
        <br />
        <SocialLink href={''} type={'youtube'} />
    </>
));
