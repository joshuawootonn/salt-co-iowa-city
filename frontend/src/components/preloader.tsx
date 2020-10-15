import React from 'react';
import Salt from '../svgs/salt.svg';

import { css } from 'styled-components/macro';
import { primaryTheme } from '../context/themeContext';
import { addAlpha } from '../helpers/color';

const styles = {
    root: css`
        margin: 0 auto;
        height: 100vh;
        width: 1400px;

        display: flex;
        flex-direction: row;

        position: relative;
    `,
    svg: css`
        position: absolute;
        height: auto;
        width: 200px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    `,
};
const Preloader = () => (
    <div css={styles.root}>
        <Salt
            css={styles.svg}
            color={addAlpha(primaryTheme.colors.purple.lightest, 0.05)}
        />
    </div>
);

export default Preloader;
