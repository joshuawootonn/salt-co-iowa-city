import React, { FC } from 'react';
import { Field, Form, Formik, FormikProps } from 'formik';
import Input from '../formElements/input';
import ContactSelect from '../formElements/contactSelect';
import { Staff } from '../../../models/staff';
import TextArea from '../formElements/textArea';
import SubmitButton from '../formElements/submitButton';

import { css } from 'styled-components/macro';
import layout from '../../../components/layout';
import typography from '../../../components/typography';
import { ContactBlock } from '../../../models/contact';
import SubTitle from '../formElements/subTitle';
import Title from '../formElements/title';
import compositionStyles from './compositionStyles';

const styles = {
    content: css`
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    `,
    formColumn: css`
        width: 100%;

        display: flex;
        flex-direction: column;
        align-items: flex-end;

        & > * {
            margin-bottom: 20px;
        }
    `,
};

export interface ContactForm {
    name: string;
    email: string;
    subject: string;
    message: string;
    to: Staff | null;
}

export const initialContactForm: ContactForm = {
    name: '',
    email: '',
    subject: '',
    message: '',
    to: null,
};

const InitialForm: FC<
    ContactBlock & { handleSubmit: (Contact: ContactForm) => void }
> = ({ title, contacts, handleSubmit }) => {
    return (
        <div css={compositionStyles.root}>
            <Title>{title}</Title>
            <div css={styles.content}>
                <SubTitle>How can we help?</SubTitle>

                <Formik<ContactForm>
                    initialValues={initialContactForm}
                    onSubmit={handleSubmit}
                >
                    {(props: FormikProps<any>) => (
                        <Form css={styles.formColumn}>
                            <Field
                                name="name"
                                component={Input}
                                placeholder="Name"
                            />
                            <Field
                                name="email"
                                component={Input}
                                placeholder="Email"
                            />

                            <Field
                                component={ContactSelect}
                                name="to"
                                placeholder="Who you want to contact"
                                options={contacts.map((s: Staff) => ({
                                    ...s,
                                    value: s.id,
                                    label: `${s.firstName} ${s.lastName} - ${s.position}`,
                                }))}
                            />
                            <Field
                                name="subject"
                                component={Input}
                                placeholder="Subject"
                            />
                            <Field
                                name="message"
                                component={TextArea}
                                placeholder="Message"
                            />

                            <SubmitButton />
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
};

export default InitialForm;
