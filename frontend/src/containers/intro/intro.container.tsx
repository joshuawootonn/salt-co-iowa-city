import React, { FC } from 'react';

import { css } from 'styled-components/macro';
import typography from '../../components/typography';
import { HowToConnectBlock } from '../../models/howToConnect';
import { WhoWeAreBlock } from '../../models/whoWeAre';
import Title from '../../components/title';

const styles = {
    root: css`
        height: 100vh;
        width: 100%;
        display: flex;

        align-items: center;
        justify-content: center;

        position: relative;
    `,
    // TODO: generalize
    content: css`
        margin: 0 auto;
        max-width: 1400px;

        display: flex;
        flex-direction: row;

        position: relative;

        justify-content: center;
        align-items: center;
    `,

    textColumn: css`
        width: 950px;
    `,

    title: css`
        ${typography.title1};
        margin-bottom: 2px;
        white-space: nowrap;
    `,

    body: css`
        ${typography.bigText};

        padding-bottom: 10px;
    `,
    backgroundContainer: css`
        position: relative;
        width: 450px;
    `,
    backgroundPositioner: css`
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -40%);

        z-index: -1;
    `,
};
const IntroContainer: FC<HowToConnectBlock | WhoWeAreBlock> = (props) => (
    <div css={styles.root} {...props}>
        <div css={styles.content}>
            <div css={styles.textColumn}>
                <h1 css={styles.title}>{props.title}</h1>
                <p css={styles.body}>{props.body}</p>
            </div>
            <div css={styles.backgroundContainer}>
                <div css={styles.backgroundPositioner}>{props.children}</div>
            </div>
        </div>
    </div>
);

export default IntroContainer;
