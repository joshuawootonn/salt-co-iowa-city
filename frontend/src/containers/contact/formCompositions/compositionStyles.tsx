import { css } from 'styled-components/macro';
import layout from '../../../components/layout';

const doveBase = css`
    position: absolute;
    height: 200px;
    width: auto;
    z-index: -2;
`;

const compositionStyles = {
    root: css`
        ${layout.container};
        max-width: 1700px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        position: relative;
    `,
    doves: [
        css`
            ${doveBase};
            right: -80px;
            top: 0;
            height: 170px;
        `,
        css`
            ${doveBase};
            top: 35%;
            left: -100px;
            transform: scale(-1, 1);
        `,
        css`
            ${doveBase};
            top: 70%;
            right: -150px;
            height: 230px;
        `,
    ],
};

export default compositionStyles;
