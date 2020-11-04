import React, { FC } from 'react';
import InitialForm, { ContactForm } from './formCompositions/initialForm';
import Dove from './dove.svg';
import { ContactBlock } from '../../models/contact';
import { css } from 'styled-components/macro';
import layout from '../../components/layout';
import typography from '../../components/typography';
import { FormState } from './contact.container';
import Loading from './formCompositions/loading';
import Error from './formCompositions/error';
import Success from './formCompositions/success';

const styles = {
    root: css`
        ${layout.container};
        margin-bottom: 0;
        height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    `,
    imageBackground: css`
        position: absolute;
        height: 50vh;
        width: auto;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: -2;
    `,
};

const Contact: FC<
    ContactBlock & {
        handleSubmit: (Contact: ContactForm) => void;
        formState: FormState;
    }
> = (props) => {
    return (
        <div css={styles.root}>
            {props.formState === 'initial' && (
                <InitialForm {...props} handleSubmit={props.handleSubmit} />
            )}
            {props.formState === 'loading' && <Loading />}
            {props.formState === 'success' && <Success />}
            {props.formState === 'error' && <Error />}
            <Dove css={styles.imageBackground} />
        </div>
    );
};

export default Contact;
