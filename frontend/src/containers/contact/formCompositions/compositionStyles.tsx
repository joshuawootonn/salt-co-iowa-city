import { css } from 'styled-components/macro';
import layout from '../../../components/layout';
import { queryShit } from '../../../components/useScreenType';

const doveBase = css`
    position: absolute;
    height: 200px;
    width: auto;
    z-index: -2;
    //z-index: 20;
`;

const compositionStyles = {
    root: css`
        ${layout.container};
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        position: relative;
    `,
    doves: {
        initial: [
            css`
                ${doveBase};
                right: -50px;
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
                right: 50px;
                height: 230px;
            `,
        ],
        error: [
            css`
                ${doveBase};

                ${queryShit({
                    mobile: css`
                        right: 15%;
                        top: -70%;
                        height: 150px;
                    `,
                    tablet: css`
                        right: 25%;
                        top: -50%;
                        height: 170px;
                    `,
                    desktop: css`
                        right: -10px;
                        top: 0;
                        height: 170px;
                    `,
                })}
            `,
            css`
                ${doveBase};

                transform: scale(-1, 1);
                ${queryShit({
                    mobile: css`
                        bottom: -100%;
                        left: 40px;
                    `,
                    tablet: css`
                        top: 85%;
                        left: 40px;
                    `,
                    desktop: css`
                        top: 35%;
                        left: -100px;
                    `,
                })}
            `,
            css`
                ${doveBase};

                ${queryShit({
                    mobile: css`
                        display: none;
                        top: 10%;
                        right: 0px;
                        height: 230px;
                    `,
                    tablet: css`
                        top: 70%;
                        right: 25px;
                        height: 230px;
                    `,
                    desktop: css`
                        top: 70%;
                        right: 25px;
                        height: 230px;
                    `,
                })}
            `,
        ],
        success: [
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
    },
};

export default compositionStyles;
