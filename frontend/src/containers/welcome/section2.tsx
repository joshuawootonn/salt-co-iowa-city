import ImageController from '../../components/image/image.controller';
import { WelcomeBlock } from '../../models/welcome';
import { css } from 'styled-components/macro';
import WelcomeRichText from './components/welcomeRichText';
import React, { FC } from 'react';
import { motion } from 'framer-motion';
import useIntersect from '../../helpers/useIntersect';
import { useFontLoader } from '../../context/fontLoader';
import { toVariant } from '../../helpers/animation';
import layout from '../../components/layout';
import { queryShit } from '../../components/useScreenType';

const styles = {
    root: css`
        ${layout.container};
        position: relative;
        width: 1240px;
        height: 800px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;

        & > div {
            width: 91%;
        }

        ${queryShit({
            mobile: css`
                max-width: calc(100vw - 30px);
                height: 400px;
                & > div {
                    width: 100%;
                }
            `,
        })}
    `,

    image: css`
        position: absolute;
        top: 0;

        left: -50px;
        min-width: calc(100% + 100px);
        height: 800px;
        z-index: -1;

        ${queryShit({
            mobile: css`
                left: 0px;
                min-width: 100%;
                height: 100%;
            `,
        })}
    `,
    one: css`
        transform: translateY(-50px);
    `,
    two: css`
        transform: translateY(25px);
        ${queryShit({
            mobile: css`
                transform: translateY(10px);
            `,
        })}
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
            css={styles.root}
        >
            <div css={styles.one}>
                <WelcomeRichText json={welcomeBlock.text3.json} />
            </div>
            <div css={styles.two}>
                <WelcomeRichText json={welcomeBlock.text4.json} />
            </div>
            <ImageController
                css={styles.image}
                images={[welcomeBlock.secondaryImage]}
            />
        </motion.div>
    );
};

export default Section2;
