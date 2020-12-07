import ImageController from '../../components/image/image.controller';
import { WelcomeBlock } from '../../models/welcome';
import { css } from 'styled-components/macro';
import WelcomeRichText from './components/welcomeRichText';
import React, { FC } from 'react';
import layout from '../../components/layout';
import { queryShit } from '../../components/useScreenType';

const styles = {
    root: css`
        ${layout.container};
        position: relative;
        width: 1240px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;

        & > div {
            width: 91%;
        }

        ${queryShit({
            mobile: css`
                height: 400px;
                & > div {
                    width: 100%;
                }
            `,
            tablet: css`
                height: 60vh;
            `,
        })}
    `,

    image: css`
        position: absolute;
        top: 0;
        left: -50px;
        height: 100%;
        z-index: -1;
        ${queryShit({
            mobile: css`
                left: 0px;
                min-width: 100%;
                height: 100%;
            `,
            tablet: css`
                width: calc(100% + 60px);
                left: -30px;
            `,
            desktop: css`
                width: calc(100% + 100px);
                left: -50px;
            `,
        })}
    `,
    one: queryShit({
        mobile: css`
            transform: translateY(-10px);
        `,
        tablet: css`
            transform: translateY(-18px);
        `,
        desktop: css`
            transform: translateY(-25px);
        `,
    }),
    two: queryShit({
        mobile: css`
            transform: translateY(10px);
        `,
        tablet: css`
            transform: translateY(18px);
        `,
        desktop: css`
            transform: translateY(25px);
        `,
    }),
};

const Section2: FC<WelcomeBlock> = (welcomeBlock) => (
    <div css={styles.root}>
        <div css={styles.one}>
            <WelcomeRichText
                log={true}
                isOrchestrated={false}
                json={welcomeBlock.text3.json}
            />
        </div>
        <div css={styles.two}>
            <WelcomeRichText
                isOrchestrated={false}
                json={welcomeBlock.text4.json}
            />
        </div>
        <ImageController
            log={true}
            css={styles.image}
            images={[welcomeBlock.secondaryImage]}
        />
    </div>
);

export default Section2;
