import React from 'react';
import { storiesOf } from '@storybook/react';
import TextLink from './textLink';

storiesOf('TextLink', module).add('Default', () => (
    <>
        <TextLink href="https://google.com">Contact Us</TextLink>
        <br />
        <br />
        <br />
        <TextLink href="https://google.com" size="small">
            Contact Us
        </TextLink>
        <br />
        <br />
        <br />
        <TextLink href="https://google.com" type="secondary">
            Contact Us
        </TextLink>
        <br />
        <br />
        <br />
        <TextLink href="https://google.com" type="secondary" size="small">
            Contact Us
        </TextLink>
    </>
));
