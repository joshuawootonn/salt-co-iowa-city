import { css } from 'styled-components/macro';
import { motion } from 'framer-motion';
import React from 'react';
import { queryShit } from './useScreenType';

const typography = {
    title1: css`
        font-family: 'MonumentExtended', Arial, sans-serif;
        font-size: 80px;
        color: ${({ theme }) => theme.colors.purple.lightest};
        white-space: nowrap;

        ${queryShit({
            mobile: css`
                font-size: 50px;
                white-space: normal;
            `,
        })}
    `,
    title2: css`
        font-family: 'MonumentExtended', Arial, sans-serif;
        font-size: 65px;
        color: ${({ theme }) => theme.colors.purple.lightest};
        white-space: nowrap;
        ${queryShit({
            mobile: css`
                font-size: 30px;
            `,
        })}
    `,

    bigText: css`
        font-family: 'Montserrat', Arial, sans-serif;
        font-size: 30px;
        color: ${({ theme }) => theme.colors.white};
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
            font-size: 20px;
            color: ${({ theme }) => theme.colors.blue.lightest};
        `,
        smallText: css`
            font-family: 'Montserrat', Arial, sans-serif;
            font-size: 15px;
            color: ${({ theme }) => theme.colors.blue.lightest};
        `,
        link: css`
            font-family: 'MonumentExtended', Arial, sans-serif;
            color: ${({ theme }) => theme.colors.blue.light};
            font-size: 15px;
            text-transform: none;
            text-decoration: underline;
            ${queryShit({
                mobile: css`
                    font-size: 12px;
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
