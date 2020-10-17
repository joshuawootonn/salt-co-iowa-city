import { storiesOf } from '@storybook/react';
import React from 'react';
import { css } from 'styled-components/macro';

storiesOf('Env', module).add('Test', () => (
    <div
        css={css`
            color: white;
        `}
    >
        {process.env.CONTENTFUL_DELIVERY_ACCESS_TOKEN}
        <br />
        <br />
        {process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN}
        <br />
        <br />
        {process.env.CONTENTFUL_ENVIRONMENT}
        <br />
        <br />
        {process.env.CONTENTFUL_SPACE_ID}
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        {process.env.STORYBOOK_CONTENTFUL_PREVIEW_ACCESS_TOKEN}
        <br />
        <br />
        {process.env.STORYBOOK_CONTENTFUL_ENVIRONMENT}
        <br />
        <br />
        {process.env.STORYBOOK_CONTENTFUL_SPACE_ID}
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        {process.env.CONTENTFUL_HOST}
    </div>
));
