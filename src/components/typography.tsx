import { css } from 'styled-components';

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
};

export default typography;
