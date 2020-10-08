import React from 'react';
import { storiesOf } from '@storybook/react';
import { getWelcomeBlock } from '../../services/welcome.services';
import WelcomeContainer from './welcome.container';
import { ServiceStory } from '../../helpers/story';

storiesOf('Block', module).add('Welcome', () => (
    <ServiceStory service={getWelcomeBlock} component={WelcomeContainer} />
));
