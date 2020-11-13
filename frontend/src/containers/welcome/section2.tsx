import Image from '../../components/image';
import { WelcomeBlock } from '../../models/welcome';
import { css } from 'styled-components/macro';
import WelcomeRichText from './components/welcomeRichText';
import React, { FC } from 'react';
import { motion } from 'framer-motion';
import useIntersect from '../../helpers/useIntersect';
import { useFontLoader } from '../../context/fontLoader';
import { toVariant } from '../../helpers/animation';

const styles = {
    root: css`
        position: relative;
        width: 1240px;
        height: 800px;
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
        left: 0;
        min-width: 100%;
        height: 800px;
        z-index: -1;
    `,
    one: css`
        transform: translateY(-50px);
    `,
    two: css`
        transform: translateY(25px);
    `,
};

const Section2: FC<WelcomeBlock> = (welcomeBlock) => {
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
                <WelcomeRichText json={welcomeBlock.text3.json} />
            </div>
            <div css={styles.two}>
                <WelcomeRichText json={welcomeBlock.text4.json} />
            </div>
            <Image
                css={styles.image}
                fluid={welcomeBlock.secondaryImage.fluid}
            />
        </motion.div>
    );
};

export default Section2;
