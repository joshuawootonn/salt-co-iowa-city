import React, { FC } from 'react';
import Dove from './dove.svg';
import { css } from 'styled-components/macro';
import { queryShit } from '../../../components/useScreenType';
import { FormUIPhase } from '../types';

const doveBase = css`
    position: absolute;
    height: 200px;
    width: auto;
    z-index: -2;
    //z-index: 20;
`;

const goodDoves = [
    css`
        ${doveBase};

        ${queryShit({
            mobile: css`
                right: 10px;
                top: 0;
                height: 170px;
            `,
            tablet: css`
                right: 10px;
                top: 0;
                height: 170px;
            `,
            desktop: css`
                right: -50px;
                top: 0;
                height: 170px;
            `,
        })}
    `,
    css`
        ${doveBase};
        top: 25%;
        left: -20px;
        transform: scale(-1, 1);
    `,
    css`
        ${doveBase};
        ${queryShit({
            mobile: css`
                top: 72%;
                right: 20px;
                height: 230px;
            `,
            tablet: css`
                top: 72%;
                right: 200px;
                height: 230px;
            `,
        })}
    `,
];

const doveStyles: { [key in FormUIPhase]: any[] } = {
    loading: [],
    initial: goodDoves,
    error: goodDoves,
    success: goodDoves,
};

export interface DovesProps {
    delay?: number;
    formUIPhase: FormUIPhase;
}

const Doves: FC<DovesProps> = (props) => (
    <>
        {doveStyles[props.formUIPhase].map((dove, i) => (
            <Dove isOrchestrated={true} css={dove} key={i} />
        ))}
    </>
);

export default Doves;
