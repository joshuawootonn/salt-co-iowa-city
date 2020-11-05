import React, { FC } from 'react';
import { ContactBlock } from '../../models/contact';
import Contact from './contact';
import { Formik, FormikProps } from 'formik';
import { contactValidationSchema } from './validation';
import {
    ContactForm,
    ContactRequest,
    FinalContactForm,
    initialContactForm,
} from './types';

const isProd = process.env.NODE_ENV === 'production';

const getEndpoint = () =>
    isProd
        ? (process.env.EMAIL_API_ENDPOINT as string)
        : 'http://localhost:3000/';

const mapValidStateToRequest = (values: FinalContactForm): ContactRequest => ({
    name: values.name,
    email: values.email,
    message: values.message,
    subject: values.subject,
    // TODO:PROD
    // to: values.to.email,
    to: 'joshuawootonn@gmail.com',
});

const ContactContainer: FC<ContactBlock> = (props) => {
    const handleSubmit = (
        values: FinalContactForm,
        { setFieldValue }: FormikProps<ContactForm>
    ) => {
        setFieldValue('formUIPhase', 'loading');
        fetch(getEndpoint(), {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(mapValidStateToRequest(values)),
        })
            .then((response) => response.json())
            .then((data) => {
                setFieldValue('formUIPhase', 'success');
            })
            .catch((error) => {
                setFieldValue('formUIPhase', 'error');
            });
    };

    return (
        <Formik<ContactForm>
            initialValues={initialContactForm}
            onSubmit={handleSubmit as any}
            validationSchema={contactValidationSchema}
            isInitialValid={false}
        >
            {(formikProps: FormikProps<ContactForm>) => (
                <Contact {...props} values={formikProps.values} />
            )}
        </Formik>
    );
};

export default ContactContainer;
