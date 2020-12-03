import { css } from 'styled-components/macro';
import { queryShit } from './useScreenType';

const layout = {
    container: css`
        margin: 0 auto;
        ${queryShit({
            mobile: css`
                width: calc(100vw - 30px);
            `,
            tablet: css`
                width: calc(100vw - 80px);
            `,
            desktop: css`
                max-width: 1140px;
                width: calc(100vw - 140px);
            `,
        })};
        position: relative;
    `,
};

export default layout;
