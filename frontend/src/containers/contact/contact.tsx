import React, { FC } from 'react';
import { ContactBlock } from '../../models/contact';
import { css } from 'styled-components/macro';
import Loading from './formCompositions/loading';
import Error from './formCompositions/error';
import Success from './formCompositions/success';
import { ContactForm } from './types';
import InitialForm from './formCompositions/initialForm';
import { ConnectionGroupOption, StaffOption } from './contact.container';
import { useFontLoader } from '../../context/fontLoader';
import { AnimatePresence } from 'framer-motion';

const styles = {
    root: css`
        margin-bottom: 0;
        min-height: 70vh;
    `,
};

export type ContactOption = ConnectionGroupOption | StaffOption;

const Contact: FC<
    ContactBlock & {
        values: ContactForm;
        contactOptions: ContactOption[];
    }
> = (props) => {
    const isLoaded = useFontLoader();

    return (
        <div css={styles.root} {...props}>
            <AnimatePresence exitBeforeEnter={true}>
                {props.values.formUIPhase === 'initial' && isLoaded && (
                    <InitialForm key={props.values.formUIPhase} {...props} />
                )}
                {props.values.formUIPhase === 'error' && (
                    <Error
                        key={props.values.formUIPhase}
                        to={props.values.to as ContactOption}
                    />
                )}
                {props.values.formUIPhase === 'success' && (
                    <Success
                        key={props.values.formUIPhase}
                        to={props.values.to as ContactOption}
                    />
                )}
                {props.values.formUIPhase === 'loading' && (
                    <Loading key={props.values.formUIPhase} />
                )}
            </AnimatePresence>
        </div>
    );
};

export default Contact;
