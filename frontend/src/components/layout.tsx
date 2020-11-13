import { css } from 'styled-components/macro';
import { queryShit } from './useScreenType';

const layout = {
    container: css`
        margin: 0 auto;
        max-width: 1140px;
        position: relative;
        
        ${queryShit({
            mobile: css`
                max-width: calc(100vw - 50px);
            `,
        })}
    })
    `,
};

export default layout;
