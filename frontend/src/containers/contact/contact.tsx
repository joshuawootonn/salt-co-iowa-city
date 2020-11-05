import React, { FC } from 'react';
import InitialForm from './formCompositions/initialForm';
import { ContactBlock } from '../../models/contact';
import { css } from 'styled-components/macro';
import Loading from './formCompositions/loading';
import Error from './formCompositions/error';
import Success from './formCompositions/success';
import { Staff } from '../../models/staff';
import { ContactForm } from './types';

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

const Contact: FC<
    ContactBlock & {
        values: ContactForm;
    }
> = (props) => {
    return (
        <div css={styles.root}>
            {props.values.formUIPhase === 'initial' && (
                <InitialForm {...props} />
            )}
            {props.values.formUIPhase === 'loading' && <Loading />}
            {props.values.formUIPhase === 'success' && (
                <Success to={props.values.to} />
            )}
            {props.values.formUIPhase === 'error' && (
                <Error to={props.values.to as Staff} />
            )}
        </div>
    );
};

export default Contact;
