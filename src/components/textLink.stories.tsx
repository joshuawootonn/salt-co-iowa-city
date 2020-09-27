import React from 'react';
import { storiesOf } from '@storybook/react';
import TextLink from './textLink';

storiesOf('TextLink', module).add('Default', () => (
    <>
        <TextLink>Contact Us</TextLink>
        <br />
        <br />
        <br />
        <TextLink size="small">Contact Us</TextLink>
        <br />
        <br />
        <br />
        <TextLink type="secondary">Contact Us</TextLink>
        <br />
        <br />
        <br />
        <TextLink type="secondary" size="small">
            Contact Us
        </TextLink>
    </>
));
