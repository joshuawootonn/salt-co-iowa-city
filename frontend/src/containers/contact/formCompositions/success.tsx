import React, { FC } from 'react';
import Title from '../formElements/title';
import compositionStyles from './compositionStyles';
import SubTitle from '../formElements/subTitle';
import { css } from 'styled-components/macro';
import Dove from '../formElements/dove.svg';
import { ContactOption } from '../contact';

const styles = {
    subTitle: css`
        font-size: 80px;
        width: 1100px;
    `,
};

export interface SuccessProps {
    to: ContactOption;
}

const Success: FC<SuccessProps> = ({ to }) => {
    return (
        <div css={compositionStyles.root}>
            <Title>Hang on!</Title>
            {compositionStyles.doves.map((doveStyle, i) => (
                <Dove css={doveStyle} key={i} />
            ))}
            <SubTitle css={styles.subTitle}>
                {to.__typename === 'ContentfulStaff'
                    ? to.firstName
                    : to.leaders}{' '}
                will reach out to you shortly
            </SubTitle>
        </div>
    );
};

export default Success;
