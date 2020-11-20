import ImageController from '../../components/image/image.controller';
import { WelcomeBlock } from '../../models/welcome';
import { css } from 'styled-components/macro';
import WelcomeRichText from './components/welcomeRichText';
import React, { FC } from 'react';

import { motion } from 'framer-motion';
import { useFontLoader } from '../../context/fontLoader';
import { toVariant } from '../../helpers/animation';
import Title from '../../components/title';
import useIntersect from '../../helpers/useIntersect';
import layout from '../../components/layout';
import Image from '../../components/image/image';

const styles = {
    root: css`
        ${layout.container};

        margin-top: 180px;
        position: relative;
        width: 1240px;
        height: 1000px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;

        margin-bottom: 300px;

        & > div {
            width: 91%;
        }
    `,
    image: css`
        position: absolute;
        top: 0;
        left: -50px;
        min-width: calc(100% + 100px);
        height: 1000px;
        z-index: -1;
    `,
    one: css`
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
                <Title isOrchestrated={true}>{welcomeBlock.title}</Title>
                <WelcomeRichText
                    isOrchestrated={true}
                    json={welcomeBlock.text1.json}
                />
            </div>
            <div css={styles.one}>
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
