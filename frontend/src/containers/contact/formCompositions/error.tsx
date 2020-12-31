import React, { FC } from 'react';
import { css } from 'styled-components/macro';
import BigTitle from '../formElements/bigTitle';
import SubTitle from '../formElements/subTitle';
import { ContactOption } from '../contact';
import Root from './root';
import { ContactBlock } from '../../../models/contact';

const styles = {
    title: css`
        text-align: left;
    `,
};
export interface ErrorProps {
    to: ContactOption;
    contactBlock: ContactBlock;
}

const Error: FC<ErrorProps> = ({ to, contactBlock: { errorTitle } }) => {
    return (
        <Root formUIPhase={'error'}>
            <BigTitle css={styles.title}>{errorTitle}</BigTitle>
            <SubTitle>
                Something went wrong. Reach{' '}
                {to.__typename === 'ContentfulStaff'
                    ? to.firstName
                    : to.leaders}{' '}
                directly at {to.email}
            </SubTitle>
        </Root>
    );
};

export default Error;
