import ImageController from '../../components/image/image.controller';
import { WelcomeBlock } from '../../models/welcome';
import { css } from 'styled-components/macro';
import WelcomeRichText from './components/welcomeRichText';
import React, { FC } from 'react';

import { motion } from 'framer-motion';
import { useFontLoader } from '../../context/fontLoader';
import { toVariant } from '../../helpers/animation';
import { Title } from '../../components/title';
import useIntersect from '../../helpers/useIntersect';
import layout from '../../components/layout';
import { queryShit } from '../../components/useScreenType';

const styles = {
    root: css`
        ${layout.container};

        margin-top: 180px;
        position: relative;
        max-width: 1240px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;

        ${queryShit({
            mobile: css`
                height: 400px;

                & > div {
                    width: 100%;
                }
            `,
            tablet: css`
                height: 70vh;
            `,
            desktop: css``,
        })}
    `,
    image: css`
        position: absolute;
        top: 0;
        z-index: -1;
        height: 100%;
        ${queryShit({
            mobile: css`
                left: 0px;
                width: 100%;
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
    title: css`
        ${queryShit({
            mobile: css`
                width: 100vw;
            `,
        })}
    `,
    one: css`
        ${queryShit({
            mobile: css`
                transform: translateY(-50px);
            `,
            tablet: css`
                transform: translateY(-50px);
            `,
            desktop: css`
                transform: translateY(50px);
            `,
        })}
    `,
    two: css`
        transform: translateY(50px);
    `,
};

const Section1: FC<WelcomeBlock> = (welcomeBlock) => {
    const isLoaded = useFontLoader();
    const ref = React.useRef(null);
    const { isVisible } = useIntersect(ref, {
        threshold: 0,
    });

    return (
        <motion.div
            ref={ref}
            animate={toVariant(isLoaded && isVisible)}
            variants={{
                entered: {
                    transition: {
                        delayChildren: 0.4,
                        staggerChildren: 0.2,
                    },
                },
            }}
            css={styles.root}
        >
            <div css={styles.one}>
                <Title css={styles.title} isOrchestrated={true}>
                    {welcomeBlock.title}
                </Title>
                <WelcomeRichText
                    isOrchestrated={true}
                    json={welcomeBlock.text1.json}
                />
            </div>
            <div css={styles.two}>
                <WelcomeRichText
                    isOrchestrated={true}
                    json={welcomeBlock.text2.json}
                />
            </div>
            <ImageController
                css={styles.image}
                images={[welcomeBlock.primaryImage]}
            />
        </motion.div>
    );
};

export default Section1;
