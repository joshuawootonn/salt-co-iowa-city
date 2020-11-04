import React from 'react';
import typography from '../../../components/typography';
import compositionStyles from './compositionStyles';
import SubTitle from '../formElements/subTitle';

const Loading = () => {
    return (
        <div css={compositionStyles.root}>
            <SubTitle>Loading...</SubTitle>
        </div>
    );
};

export default Loading;
