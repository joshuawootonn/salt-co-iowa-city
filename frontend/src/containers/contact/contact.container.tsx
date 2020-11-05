import React, { FC, useRef } from 'react';
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
import queryString from 'querystring';
import { slugConnectionGroup, slugStaff } from '../../helpers/slugify';
import {
    ConnectionGroup,
    ConnectionGroupBlock,
} from '../../models/connectionGroup';
import { Staff } from '../../models/staff';

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

const getDefaultPersonFromQueryString = (
    contacts: Staff[],
    connectionGroups: ConnectionGroup[]
) => {
    const query = queryString.parse(document.location.search.replace('?', ''));
    if (query.name) {
        return contacts.find((contact) => slugStaff(contact) === query.name);
    }
    if (query.groupName) {
        return connectionGroups.find(
            (cg) => slugConnectionGroup(cg) === query.groupName
        );
    }
    return null;
};

export interface ConnectionGroupOption extends ConnectionGroup {
    value: string;
    label: string;
}

export interface StaffOption extends Staff {
    value: string;
    label: string;
}
const mapStaffToOption = (staff: Staff[]): StaffOption[] =>
    staff.map((s: Staff) => ({
        ...s,
        value: s.id,
        label: `${s.firstName} ${s.lastName} - ${s.position}`,
    }));

const mapConnectionGroupToOption = (
    connectionGroups: ConnectionGroup[]
): ConnectionGroupOption[] =>
    connectionGroups.map((cg: ConnectionGroup) => ({
        ...cg,
        value: cg.id,
        label: `${cg.leaders} - Connection Group Leaders`,
    }));

const ContactContainer: FC<ContactBlock & ConnectionGroupBlock> = (props) => {
    const initialTo = useRef(
        getDefaultPersonFromQueryString(props.contacts, props.groups)
    );

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
            initialValues={{
                ...initialContactForm,
                to: initialTo.current,
            }}
            onSubmit={handleSubmit as any}
            validationSchema={contactValidationSchema}
            isInitialValid={false}
        >
            {(formikProps: FormikProps<ContactForm>) => (
                <Contact
                    {...props}
                    contactOptions={[
                        ...mapStaffToOption(props.contacts),
                        ...mapConnectionGroupToOption(props.groups),
                    ]}
                    values={formikProps.values}
                />
            )}
        </Formik>
    );
};

export default ContactContainer;
