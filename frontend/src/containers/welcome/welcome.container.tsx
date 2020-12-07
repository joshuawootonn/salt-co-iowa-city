import React, { FC } from 'react';
import { css } from 'styled-components/macro';
import { WelcomeBlock } from '../../models/welcome';
import Section1 from './section1';
import Section2 from './section2';
import { queryShit } from '../../components/useScreenType';

const styles = {
    root: css`
        min-height: 100vh;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        & > div:first-child {
            ${queryShit({
                mobile: css`
                    margin-bottom: 200px;
                `,
                tablet: css`
                    margin-bottom: 300px;
                `,
            })}
        }
    `,
};

const WelcomeContainer: FC<WelcomeBlock> = (welcomeBlock) => (
    <div css={styles.root} {...welcomeBlock}>
        <Section1 {...welcomeBlock} />
        <Section2 {...welcomeBlock} />
    </div>
);

export default WelcomeContainer;
