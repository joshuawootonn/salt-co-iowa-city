import React, { FC } from 'react';
import { css } from 'styled-components/macro';
import layout from '../../components/layout';
import { WelcomeBlock } from '../../models/welcome';
import Section1 from './section1';
import Section2 from './section2';
import { IntersectionObserver } from '../../components/IntersectionObserver';

const styles = {
    root: css`
        min-height: 100vh;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    `,
    section1Container: css`
        ${layout.container};
        max-width: 1240px;
        margin-top: 180px;
    `,
    section2Container: css`
        ${layout.container};
        max-width: 1240px;
    `,
};

const WelcomeContainer: FC<WelcomeBlock> = (welcomeBlock) => (
    <div css={styles.root} {...welcomeBlock}>
        <IntersectionObserver css={styles.section1Container}>
            <Section1 {...welcomeBlock} />
        </IntersectionObserver>
        <IntersectionObserver css={styles.section2Container}>
            <Section2 {...welcomeBlock} />
        </IntersectionObserver>
    </div>
);

export default WelcomeContainer;
