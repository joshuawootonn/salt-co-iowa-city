import { css } from 'styled-components/macro';
import React from 'react';
import { queryShit } from './useScreenType';

const typography = {
    title1: css`
        font-family: 'MonumentExtended', Arial, sans-serif;
        color: ${({ theme }) => theme.colors.purple.lightest};

        ${queryShit({
            mobile: css`
                font-size: 50px;
                white-space: normal;
            `,
            tablet: css`
                font-size: 65px;
                white-space: normal;
            `,
            desktop: css`
                font-size: 80px;
                white-space: nowrap;
            `,
        })}
    `,
    title2: css`
        font-family: 'MonumentExtended', Arial, sans-serif;
        color: ${({ theme }) => theme.colors.purple.lightest};
        white-space: nowrap;
        ${queryShit({
            mobile: css`
                font-size: 30px;
            `,
            tablet: css`
                font-size: 45px;
            `,
            desktop: css`
                font-size: 65px;
            `,
        })}
    `,

    title3: css`
        font-family: 'MonumentExtended', Arial, sans-serif;
        color: ${({ theme }) => theme.colors.purple.lightest};
        ${queryShit({
            mobile: css`
                font-size: 20px;
            `,
            tablet: css`
                font-size: 28px;
            `,
            desktop: css`
                font-size: 35px;
            `,
        })}
    `,

    bigText: css`
        font-family: 'Montserrat', Arial, sans-serif;
        color: ${({ theme }) => theme.colors.white};

        ${queryShit({
            mobile: css`
                font-size: 15px;
            `,
            tablet: css`
                font-size: 22px;
            `,
            desktop: css`
                font-size: 25px;
            `,
        })}
    `,

    largeText: {
        text: css`
            font-family: 'Montserrat', Arial, sans-serif;
            font-size: 40px;
            color: ${({ theme }) => theme.colors.white};
            transform-origin: left;

            ${queryShit({
                mobile: css`
                    font-size: 22px;
                `,
                tablet: css`
                    font-size: 30px;
                `,
            })}
        `,

        link: css`
            color: ${({ theme }) => theme.colors.blue.lightest};
            font-family: 'MonumentExtended', Arial, sans-serif;
            font-size: 40px;
            font-weight: 400;
            text-decoration: underline;
            text-transform: none;

            ${queryShit({
                mobile: css`
                    font-size: 22px;
                `,
                tablet: css`
                    font-size: 30px;
                `,
            })}
        `,
    },
    card: {
        title: css`
            font-family: 'MonumentExtended', Arial, sans-serif;
            color: ${({ theme }) => theme.colors.blue.light};
            font-size: 30px;

            ${queryShit({
                mobile: css`
                    font-size: 20px;
                `,
            })}
        `,
        text: css`
            font-family: 'Montserrat', Arial, sans-serif;

            color: ${({ theme }) => theme.colors.blue.lightest};
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
        `,
        smallText: css`
            font-family: 'Montserrat', Arial, sans-serif;
            font-size: 15px;
            color: ${({ theme }) => theme.colors.blue.lightest};
        `,
        link: css`
            font-family: 'MonumentExtended', Arial, sans-serif;
            color: ${({ theme }) => theme.colors.blue.light};

            text-transform: none;
            text-decoration: underline;
            ${queryShit({
                mobile: css`
                    font-size: 12px;
                `,
                tablet: css`
                    font-size: 15px;
                `,
            })}
        `,
    },

    input: css`
        font-family: 'Montserrat', Arial, sans-serif;
        font-size: 17px;
        color: ${({ theme }) => theme.colors.blue.light};
    `,
    select: css`
        font-family: 'Montserrat', Arial, sans-serif;
        font-size: 17px;
        color: ${({ theme }) => theme.colors.blue.light};
    `,
    textArea: css`
        font-family: 'Montserrat', Arial, sans-serif;
        font-size: 17px;
        color: ${({ theme }) => theme.colors.blue.light};
    `,
};

export default typography;
