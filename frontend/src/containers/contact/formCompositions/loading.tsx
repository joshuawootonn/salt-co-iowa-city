import React from 'react';
import SubTitle from '../formElements/subTitle';
import { css } from 'styled-components/macro';
import Root from './root';

const Loading = () => {
    return (
        <Root formUIPhase={'loading'} delay={1}>
            <SubTitle
                css={css`
                    width: auto;
                `}
            >
                Loading...
            </SubTitle>
        </Root>
    );
};

export default Loading;
