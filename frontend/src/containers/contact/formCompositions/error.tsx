import React, { FC } from 'react';
import { css } from 'styled-components/macro';
import Title from '../formElements/title';
import compositionStyles from './compositionStyles';
import SubTitle from '../formElements/subTitle';
import Dove from '../formElements/dove.svg';
import { ContactOption } from '../contact';

const styles = {
    subTitle: css`
        font-size: 65px;
        width: 1120px;
    `,
};
export interface ErrorProps {
    to: ContactOption;
}

const Error: FC<ErrorProps> = ({ to }) => {
    return (
        <div css={compositionStyles.root}>
            <Title>Uh oh.</Title>
            {compositionStyles.doves.map((doveStyle, i) => (
                <Dove css={doveStyle} key={i} />
            ))}
            <SubTitle css={styles.subTitle}>
                Something went wrong. Reach{' '}
                {to.__typename === 'ContentfulStaff'
                    ? to.firstName
                    : to.leaders}{' '}
                directly at {to.email}
            </SubTitle>
        </div>
    );
};

export default Error;
