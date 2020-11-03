import { css } from 'styled-components/macro';

const typography = {
    title1: css`
        font-family: 'MonumentExtended', Arial, sans-serif;
        font-size: 80px;
        color: ${({ theme }) => theme.colors.white};
    `,
    title2: css`
        font-family: 'MonumentExtended', Arial, sans-serif;
        font-size: 65px;
        color: ${({ theme }) => theme.colors.purple.lightest};
    `,

    bigText: css`
        font-family: 'Montserrat', Arial, sans-serif;
        font-size: 30px;
        color: ${({ theme }) => theme.colors.white};
    `,

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
        color: ${({ theme }) => theme.colors.purple.light};
    `,
    select: css`
        font-family: 'Montserrat', Arial, sans-serif;
        font-size: 17px;
        color: ${({ theme }) => theme.colors.purple.light};
    `,
    textArea: css`
        font-family: 'Montserrat', Arial, sans-serif;
        font-size: 17px;
        color: ${({ theme }) => theme.colors.purple.light};
    `,
};

export default typography;
