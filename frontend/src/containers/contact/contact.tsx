import React, { FC } from 'react';
import { ContactBlock } from '../../models/contact';
import { css } from 'styled-components/macro';
import Loading from './formCompositions/loading';
import Error from './formCompositions/error';
import Success from './formCompositions/success';
import { Staff } from '../../models/staff';
import { ContactForm } from './types';
import { ConnectionGroup } from '../../models/connectionGroup';
import InitialForm from './formCompositions/initialForm';
import { ConnectionGroupOption, StaffOption } from './contact.container';
import { ConnectionOptions } from 'tls';

const styles = {
    root: css`
        margin-bottom: 0;
        height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    `,
};

export type ContactOption = ConnectionGroupOption | StaffOption;

const Contact: FC<
    ContactBlock & {
        values: ContactForm;
        contactOptions: ContactOption[];
    }
> = (props) => {
    return (
        <div css={styles.root}>
            {props.values.formUIPhase === 'initial' && (
                <InitialForm {...props} />
            )}
            {props.values.formUIPhase === 'loading' && <Loading />}
            {props.values.formUIPhase === 'success' && (
                <Success to={props.values.to as ContactOption} />
            )}
            {props.values.formUIPhase === 'error' && (
                <Error to={props.values.to as ContactOption} />
            )}
        </div>
    );
};

export default Contact;
