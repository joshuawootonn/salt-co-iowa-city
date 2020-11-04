import React from 'react';
import typography from '../../../components/typography';
import Title from '../formElements/title';
import compositionStyles from './compositionStyles';
import SubTitle from '../formElements/subTitle';

const Success = () => {
    return (
        <div css={compositionStyles.root}>
            <Title>Hang on!</Title>
            <SubTitle>Olivia will reach out to you shortly</SubTitle>
        </div>
    );
};

export default Success;
