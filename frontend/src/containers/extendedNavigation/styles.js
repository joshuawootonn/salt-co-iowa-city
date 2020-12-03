import { css } from 'styled-components/macro';
import { queryShit } from '../../components/useScreenType';

const styles = {
    root: css`
        ${queryShit({
            mobile: css`
                grid-template-columns: repeat(1, minmax(0, 1fr));
                grid-template-rows: repeat(4, minmax(50px, max-content));
                max-width: 450px;

                padding: 0 25px 25px;
                align-self: flex-start;
            `,
            tablet: css`
                grid-template-columns: repeat(2, minmax(0, 1fr));
                grid-template-rows: repeat(3, minmax(50px, max-content));
                row-gap: 20px;

                margin: 0 auto;
                padding: 0 40px 40px;
            `,
            desktop: css`
                grid-template-columns: repeat(3, minmax(0, 1fr));
                grid-template-rows: repeat(2, minmax(120px, max-content));
                row-gap: 0;

                max-width: 1140px;
                padding: 40px;

                border-top: 2px solid ${({ theme }) => theme.colors.blue.medium};
                border-right: 2px solid
                    ${({ theme }) => theme.colors.blue.medium};
            `,
        })};

        display: grid;
        column-gap: 20px;
        grid-auto-flow: column;

        position: relative;
    `,
    background: css`
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        max-width: 100vw;
        overflow: hidden;
    `,
    logo: css`
        ${queryShit({
            mobile: css`
                height: 32px;
            `,
            tablet: css`
                height: 85px;
            `,
            desktop: css`
                height: 130px;
                position: absolute;
                top: 50%;
                left: 40%;
                transform: translate(-50%, -50%) rotate(-90deg);
            `,
        })};
    `,
    logoContainer: css`
        position: relative;
        ${queryShit({
            mobile: css`
                grid-row: 5;
                grid-column: 1;

                justify-self: flex-start;
                align-self: center;
            `,
            tablet: css`
                grid-row: 3;
                grid-column: 1;
                justify-content: flex-end;
                align-self: flex-start;
            `,
            desktop: css`
                grid-row: 1/3;
                grid-column: 1;
                width: 100%;
                height: 100%;
            `,
        })}
    `,

    listOne: (type) =>
        queryShit({
            mobile: css`
                grid-column: 1;
                grid-row: 1;
            `,
            tablet: css`
                grid-column: 1;
                grid-row: 1;
            `,
            desktop: css`
                grid-row: 1;
                grid-column: 2;
            `,
        }),
    listTwo: (type) =>
        queryShit({
            mobile: css`
                grid-column: 1;
                grid-row: 2;
            `,
            tablet:
                type === 'footer'
                    ? css`
                          grid-column: 2;
                          grid-row: 1;
                      `
                    : css`
                          grid-column: 1;
                          grid-row: 2;
                      `,
            desktop: css`
                grid-row: 1;
                grid-column: 3;
            `,
        }),
    social: (type) =>
        queryShit({
            mobile: css`
                grid-column: 1;
                grid-row: 4;

                justify-self: flex-start;
                align-self: flex-start;
            `,
            tablet:
                type === 'footer'
                    ? css`
                          grid-column: 1;
                          grid-row: 2;

                          justify-self: flex-start;
                          align-self: flex-start;
                      `
                    : css`
                          grid-column: 2;
                          grid-row: 2;
                      `,
            desktop: css`
                grid-row: 2;
                grid-column: 3;
                justify-self: flex-end;
                align-self: flex-end;
            `,
        }),
    bigLinks: (type) => css`
        justify-self: flex-start;
        align-self: flex-end;

        overflow: visible;
        ${queryShit({
            mobile: css`
                grid-column: 1;
                grid-row: 3;
            `,
            tablet:
                type === 'footer'
                    ? css`
                          grid-column: 2;
                          grid-row: 3;
                      `
                    : css`
                          grid-column: 2;
                          grid-row: 1;
                          align-self: flex-start;
                      `,
            desktop: css`
                align-self: flex-end;
                grid-row: 2;
                grid-column: 2;
            `,
        })};
    `,
};

export default styles;
