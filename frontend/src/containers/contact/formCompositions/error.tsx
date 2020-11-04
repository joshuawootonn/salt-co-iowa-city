import React from 'react';
import { css } from 'styled-components/macro';
import Title from '../formElements/title';
import compositionStyles from './compositionStyles';
import SubTitle from '../formElements/subTitle';

const Error = () => {
    return (
        <div css={compositionStyles.root}>
            <Title>Uh oh.</Title>
            <SubTitle>
                Something went wrong. Reach Olivia directly at
                oginther@gmail.com
            </SubTitle>
        </div>
    );
};

export default Error;
