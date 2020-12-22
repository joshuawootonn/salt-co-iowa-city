import ImageController from '../../components/image/image.controller';
import { WelcomeBlock } from '../../models/welcome';
import { css } from 'styled-components/macro';
import RichText from '../../components/richText';
import React, { FC, useEffect, useState } from 'react';

import { motion } from 'framer-motion';
import { useFontLoader } from '../../context/fontLoader';
import { toVariant } from '../../helpers/animation';
import { Title } from '../../components/title';
import useIntersect from '../../helpers/useIntersect';
import layout from '../../components/layout';
import { queryShit } from '../../components/useScreenType';
import useOrchestration from '../../components/useOrchestration';

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
        threshold: 0.3,
    });
    const animate = isLoaded && isVisible;
    const isOrchestrated = useOrchestration(animate, 2000);

    return (
        <motion.div
            ref={ref}
            animate={toVariant(animate)}
            variants={{
                entered: {
                    transition: {
                        delayChildren: 0.2,
                        staggerChildren: 0.14,
                    },
                },
            }}
            css={styles.root}
        >
            <div css={styles.one}>
                <Title css={styles.title} isOrchestrated={isOrchestrated}>
                    {welcomeBlock.title}
                </Title>
                <RichText
                    isOrchestrated={isOrchestrated}
                    json={welcomeBlock.text1.json}
                />
            </div>
            <div css={styles.two}>
                <RichText
                    isOrchestrated={isOrchestrated}
                    json={welcomeBlock.text2.json}
                />
            </div>
            <ImageController
                isOrchestrated={isOrchestrated}
                log={true}
                css={styles.image}
                images={[welcomeBlock.primaryImage]}
            />
        </motion.div>
    );
};

export default Section1;
