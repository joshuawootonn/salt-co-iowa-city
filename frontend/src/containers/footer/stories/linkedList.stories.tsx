import React from 'react';
import { storiesOf } from '@storybook/react';
import LinkedList from '../linkedList';

const links = [
    { label: 'Who we Are', href: '' },
    { label: 'Ministries', href: '' },
    { label: 'Staff', href: '' },
];

storiesOf('Linked List', module).add('Default', () => (
    <LinkedList links={links} />
));
