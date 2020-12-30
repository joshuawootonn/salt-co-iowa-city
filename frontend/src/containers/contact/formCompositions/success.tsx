import React, { FC } from 'react';
import BigTitle from '../formElements/bigTitle';
import SubTitle from '../formElements/subTitle';
import { css } from 'styled-components/macro';
import { ContactOption } from '../contact';
import Root from './root';

const styles = {
    title: css`
        text-align: left;
    `,
};

export interface SuccessProps {
    to: ContactOption;
}

const Success: FC<SuccessProps> = ({ to }) => {
    return (
        <Root formUIPhase={'success'}>
            <BigTitle css={styles.title}>Hang on!</BigTitle>
            <SubTitle>
                {to.__typename === 'ContentfulStaff'
                    ? to.firstName
                    : to.leaders}{' '}
                will reach out to you shortly
            </SubTitle>
        </Root>
    );
};

export default Success;
