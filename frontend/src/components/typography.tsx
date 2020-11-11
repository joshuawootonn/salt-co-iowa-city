import { css } from 'styled-components/macro';
import { motion } from 'framer-motion';
import React from 'react';

const typography = {
    title1: css`
        font-family: 'MonumentExtended', Arial, sans-serif;
        font-size: 80px;
        color: ${({ theme }) => theme.colors.purple.lightest};
        white-space: nowrap;
    `,
    title2: css`
        font-family: 'MonumentExtended', Arial, sans-serif;
        font-size: 65px;
        color: ${({ theme }) => theme.colors.purple.lightest};
        white-space: nowrap;
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
        `,

        link: css`
            color: ${({ theme }) => theme.colors.blue.lightest};
            font-family: 'MonumentExtended', Arial, sans-serif;
            font-size: 40px;
            font-weight: 400;
            text-decoration: underline;
            text-transform: none;
        `,
    },
    card: {
        title: css`
            font-family: 'MonumentExtended', Arial, sans-serif;
            color: ${({ theme }) => theme.colors.purple.light};
            font-size: 30px;
        `,
        text: css`
            font-family: 'Montserrat', Arial, sans-serif;
            font-size: 18px;
            color: ${({ theme }) => theme.colors.purple.lightest};
        `,
        smallText: css`
            font-family: 'Montserrat', Arial, sans-serif;
            font-size: 15px;
            color: ${({ theme }) => theme.colors.purple.lightest};
        `,
        link: css`
            font-family: 'MonumentExtended', Arial, sans-serif;
            color: ${({ theme }) => theme.colors.purple.light};
            font-size: 16px;
            text-decoration: underline;
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
