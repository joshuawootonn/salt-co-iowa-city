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

const Contact: FC<{
    contactBlock: ContactBlock;
    values: ContactForm;
    contactOptions: ContactOption[];
}> = ({ contactBlock, contactOptions, values, ...props }) => {
    const isLoaded = useFontLoader();

    return (
        <div css={styles.root} {...props}>
            <AnimatePresence exitBeforeEnter={true}>
                {values.formUIPhase === 'initial' && isLoaded && (
                    <InitialForm
                        contactOptions={contactOptions}
                        key={values.formUIPhase}
                        contactBlock={contactBlock}
                    />
                )}
                {values.formUIPhase === 'error' && (
                    <Error
                        key={values.formUIPhase}
                        to={values.to as ContactOption}
                    />
                )}
                {values.formUIPhase === 'success' && (
                    <Success
                        key={values.formUIPhase}
                        to={values.to as ContactOption}
                    />
                )}
                {values.formUIPhase === 'loading' && (
                    <Loading key={values.formUIPhase} />
                )}
            </AnimatePresence>
        </div>
    );
};

export default Contact;
