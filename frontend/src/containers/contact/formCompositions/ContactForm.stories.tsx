import { storiesOf } from '@storybook/react';
import { ServiceStory } from '../../../helpers/story';
import { getAnnouncementBlock } from '../../../__stories__/services/announcements.service';

import React, { useState } from 'react';
import { ContactBlock } from '../../../models/contact';
import ContactContainer, { FormState } from '../contact.container';
import { ContactForm } from './initialForm';
import AnnouncementContainer from '../../announcement';
import Contact from '../contact';
import { getContactBlock } from '../../../__stories__/services/contact.service';
import { select } from '@storybook/addon-knobs';

interface MockShit {
    formState: FormState;
    handleSubmit: (contacts: ContactForm) => void;
}

const useMockFormState = (
    contacts: ContactBlock['contacts'],
    formStateInit = 'initial' as FormState
): MockShit => {
    const [formState, setFormState] = useState<FormState>(formStateInit);

    const handleSubmit = (value: ContactForm) => {
        return new Promise((resolutionFunc, rejectionFunc) => {
            setFormState('loading');
            setTimeout(() => {
                setFormState('success');
                resolutionFunc();
            }, 2000);
        });
    };

    return { formState, handleSubmit };
};

storiesOf('Contact', module).add('Form Transitions', () => (
    <ServiceStory
        service={getContactBlock}
        component={(props: ContactBlock) => {
            const mockFormState = useMockFormState(
                props.contacts,
                select(
                    'Form State',
                    ['initial', 'loading', 'success', 'error'],
                    'initial'
                )
            );

            console.log(mockFormState.formState);
            return <Contact {...props} {...mockFormState} />;
        }}
    />
));
