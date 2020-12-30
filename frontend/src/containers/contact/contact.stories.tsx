import { storiesOf } from '@storybook/react';
import { ServiceStory } from '../../helpers/story';

import React from 'react';
import { ContactBlock } from '../../models/contact';

import Contact from './contact';
import { getContactBlock } from '../../__stories__/services/contact.service';
import { Formik, FormikProps } from 'formik';
import { select } from '@storybook/addon-knobs';
import { ContactForm, FinalContactForm, initialContactForm } from './types';
import { contactValidationSchema } from './validation';
import { defaultStaff, defaultStaffs } from '../../defaultValues';
import { mapStaffToOption } from './contact.container';

storiesOf('Contact', module)
    .add('With Transitions', () => (
        <ServiceStory
            service={getContactBlock}
            component={(props: ContactBlock) => {
                const handleSubmit = (
                    values: FinalContactForm,
                    { setFieldValue }: FormikProps<ContactForm>
                ) => {
                    setFieldValue('formUIPhase', 'loading');
                    setTimeout(() => {
                        setFieldValue('formUIPhase', 'success');
                    }, 2000);
                };
                return (
                    <Formik<ContactForm>
                        initialValues={initialContactForm}
                        onSubmit={handleSubmit as any}
                        validationSchema={contactValidationSchema}
                        isInitialValid={false}
                    >
                        {(formikProps: FormikProps<ContactForm>) => (
                            <Contact
                                {...props}
                                values={formikProps.values}
                                contactOptions={mapStaffToOption(defaultStaffs)}
                            />
                        )}
                    </Formik>
                );
            }}
        />
    ))
    .add('By State', () => (
        <ServiceStory
            service={getContactBlock}
            component={(props: ContactBlock) => (
                <Formik<ContactForm>
                    initialValues={initialContactForm}
                    onSubmit={(() => {}) as any}
                    validationSchema={contactValidationSchema}
                    isInitialValid={false}
                >
                    <Contact
                        {...props}
                        values={{
                            email: 'joshuawootonn@gmail.com',
                            formUIPhase: select(
                                'Form State',
                                ['initial', 'loading', 'success', 'error'],
                                'initial'
                            ),
                            message: 'Super compelling stuff',
                            subject: 'Super concise summary',
                            name: 'Joshua Wootonn',
                            to: defaultStaff,
                        }}
                        contactOptions={mapStaffToOption(defaultStaffs)}
                    />
                </Formik>
            )}
        />
    ));
