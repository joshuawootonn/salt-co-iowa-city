import React, { FC } from 'react';
import { css } from 'styled-components/macro';
import { WelcomeBlock } from '../../models/welcome';
import Section1 from './section1';
import Section2 from './section2';

const styles = {
    root: css`
        min-height: 100vh;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    `,
};

const WelcomeContainer: FC<WelcomeBlock> = (welcomeBlock) => (
    <div css={styles.root} {...welcomeBlock}>
        <Section1 {...welcomeBlock} />
        <Section2 {...welcomeBlock} />
    </div>
);

export default WelcomeContainer;
