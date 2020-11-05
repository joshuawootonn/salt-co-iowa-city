import React, { FC } from 'react';
import { css } from 'styled-components/macro';
import Title from '../formElements/title';
import compositionStyles from './compositionStyles';
import SubTitle from '../formElements/subTitle';
import { Staff } from '../../../models/staff';
import Dove from '../formElements/dove.svg';

const styles = {
    subTitle: css`
        font-size: 65px;
        width: 1120px;
    `,
};
export interface ErrorProps {
    to: Staff;
}

const Error: FC<ErrorProps> = ({ to }) => {
    return (
        <div css={compositionStyles.root}>
            <Title>Uh oh.</Title>
            {compositionStyles.doves.map((doveStyle, i) => (
                <Dove css={doveStyle} key={i} />
            ))}
            <SubTitle css={styles.subTitle}>
                Something went wrong. Reach {to.firstName} directly at{' '}
                {to.email}
            </SubTitle>
        </div>
    );
};

export default Error;
