import { css } from 'styled-components/macro';
import { queryShit } from '../../components/useScreenType';
import typography from '../../components/typography';

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
                row-gap: 20px;

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
                svg {
                    height: 32px;
                }
            `,
            tablet: css`
                svg {
                    height: 85px;
                }
            `,
            desktop: css`
                position: absolute;
                top: 50%;
                left: 50%;
                transform-origin: center;
                transform: translate(calc(-1 * (50% + 20px)), -50%)
                    rotate(-90deg);
            `,
        })};
    `,
    logoContainer: css`
        position: relative;
        ${queryShit({
            mobile: css`
                grid-row: 6;
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
    personalBranding: css`
        ${queryShit({
            mobile: css`
                height: 60px;
                margin-left: 10px;
            `,
            tablet: css`
                height: 65px;
                margin-left: 10px;
            `,
            desktop: css`
                height: 50px;
            `,
        })};
    `,
    personalBrandingContainer: css`
        position: relative;
        display: flex;
        ${queryShit({
            mobile: css`
                grid-row: 5;
                grid-column: 1;
                margin-bottom: 20px;
                justify-content: flex-start;
                align-items: center;
                justify-self: flex-start;
                align-self: center;
            `,
            tablet: css`
                grid-row: 2;
                grid-column: 2;
                justify-content: flex-start;
                align-items: center;
                align-self: flex-start;
            `,
            desktop: css`
                grid-row: 2;
                grid-column: 3;
                align-self: flex-end;
            `,
        })}

        span {
            ${typography.card.title}
            ${queryShit({
                mobile: css`
                    font-size: 15px;
                `,
                tablet: css`
                    font-size: 17px;
                `,
                desktop: css`
                    font-size: 18px;
                `,
            })}
        }
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
                transform: translateX(-10px);
                grid-column: 1;
                grid-row: 4;

                justify-self: flex-start;
                align-self: flex-start;
            `,
            tablet:
                type === 'footer'
                    ? css`
                          transform: translateX(-10px);
                          grid-column: 1;
                          grid-row: 2;

                          justify-self: flex-start;
                          align-self: center;
                      `
                    : css`
                          transform: translateX(-10px);
                          grid-column: 2;
                          grid-row: 2;
                      `,
            desktop: css`
                transform: translateX(-10px);
                grid-row: 2;
                grid-column: 3;
                justify-self: flex-start;
                align-self: flex-start;
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
