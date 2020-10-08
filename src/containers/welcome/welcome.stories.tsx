import React from 'react';
import { storiesOf } from '@storybook/react';
import { getWelcomeBlock } from '../../services/welcome.services';
import WelcomeContainer from './welcome.container';
import { BlockStory } from '../../helpers/story';
import { css } from 'styled-components';

storiesOf('Block', module).add('Welcome', () => (
    <BlockStory domain={'welcome'} component={WelcomeContainer} />
));

storiesOf('Block', module).add('Test', () => (
    <div
        css={css`
            color: white;
        `}
    >
        TESTSTS
        <br />
        {process.env.NEXT_PUBLIC_ENV_OVERRIDE}
        <br />
        {process.env.NEXT_PUBLIC_CONTENTFUL_DELIVERY_ACCESS_TOKEN}
        <br />
        {process.env.NEXT_PUBLIC_CONTENTFUL_PREVIEW_ACCESS_TOKEN}
        <br />
        {process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}
        <br />
        {process.env.ENV_OVERRIDE}
        <br />
        {process.env.CONTENTFUL_DELIVERY_ACCESS_TOKEN}
        <br />
        {process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN}
        <br />
        {process.env.CONTENTFUL_SPACE_ID}
        <br />
        {process.env.STORYBOOK_ENV_OVERRIDE}
        <br />
        {process.env.STORYBOOK_CONTENTFUL_DELIVERY_ACCESS_TOKEN}
        <br />
        {process.env.STORYBOOK_CONTENTFUL_PREVIEW_ACCESS_TOKEN}
        <br />
        {process.env.STORYBOOK_CONTENTFUL_SPACE_ID}
    </div>
));
