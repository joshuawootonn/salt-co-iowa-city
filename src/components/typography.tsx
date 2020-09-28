import { css } from 'styled-components';

const typography = {
    title2: css`
        font-family: 'MonumentExtended', Arial, sans-serif;
        font-size: 65px;
        color: ${({ theme }) => theme.colors.purple.lightest};
    `,
};

export default typography;
