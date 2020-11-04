import React, { FC, useState } from 'react';
import { ContactBlock } from '../../models/contact';
import { ContactForm } from './formCompositions/initialForm';
import Contact from './contact';

export type FormState = 'initial' | 'loading' | 'error' | 'success';

const ContactContainer: FC<ContactBlock> = (props) => {
    const [formState, setFormState] = useState<FormState>('initial');

    const handleSubmit = (values: ContactForm) => {
        console.log(values);
        const isProd = process.env.NODE_ENV === 'production';
        const endpoint: string = isProd
            ? (process.env.EMAIL_API_ENDPOINT as string)
            : 'http://localhost:3000/';

        const derivedValues = {
            ...values,
            to: isProd
                ? props.contacts.find((s) => s.id === values.to).email
                : 'joshuawootonn@gmail.com',
        };

        console.log(derivedValues);

        fetch(endpoint, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(derivedValues),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    };

    return (
        <Contact {...props} handleSubmit={handleSubmit} formState={formState} />
    );
};

export default ContactContainer;
