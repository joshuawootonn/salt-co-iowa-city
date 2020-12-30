import axios from 'axios';
import React, { FC, useRef } from 'react';
import { ContactBlock } from '../../models/contact';
import Contact from './contact';
import { Formik, FormikProps } from 'formik';
import { contactValidationSchema } from './validation';
import {
    ContactForm,
    ContactRequest,
    filledInContactForm,
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
import { scrollToTop } from '../../helpers/scroll';

const isProd = process.env.NODE_ENV === 'production';

const getEndpoint = () =>
    isProd
        ? (process.env.EMAIL_API_ENDPOINT as string)
        : 'http://localhost:3000/api/contact';

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
    if (typeof window === `undefined`) {
        return null;
    }
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
export const mapStaffToOption = (staff: Staff[]): StaffOption[] =>
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
        label: `${cg.leaders} - Connection Group Leader(s)`,
    }));

const ContactContainer: FC<ContactBlock & ConnectionGroupBlock> = (props) => {
    const initialTo = useRef(
        getDefaultPersonFromQueryString(props.contacts, props.groups)
    );

    const handleSubmit = (
        values: FinalContactForm,
        { setFieldValue }: FormikProps<ContactForm>
    ) => {
        scrollToTop();

        setFieldValue('formUIPhase', 'loading');

        return axios
            .post(getEndpoint(), mapValidStateToRequest(values))
            .then(() => setFieldValue('formUIPhase', 'success'))
            .catch(() => setFieldValue('formUIPhase', 'error'));
    };

    return (
        <Formik<ContactForm>
            initialValues={{
                ...initialContactForm,
                to: initialTo.current,
            }}
            onSubmit={handleSubmit as any}
            validationSchema={contactValidationSchema}
            validateOnMount={true}
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
