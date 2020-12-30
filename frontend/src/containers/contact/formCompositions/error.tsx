import React, { FC } from 'react';
import { css } from 'styled-components/macro';
import BigTitle from '../formElements/bigTitle';
import SubTitle from '../formElements/subTitle';
import { ContactOption } from '../contact';
import Root from './root';

const styles = {
    title: css`
        text-align: left;
    `,
};
export interface ErrorProps {
    to: ContactOption;
}

const Error: FC<ErrorProps> = ({ to }) => {
    return (
        <Root formUIPhase={'error'}>
            <BigTitle css={styles.title}>Uh oh.</BigTitle>
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
