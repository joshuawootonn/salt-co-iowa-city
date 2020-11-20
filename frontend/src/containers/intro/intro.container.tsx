import React, { FC } from 'react';

import { css } from 'styled-components/macro';
import typography from '../../components/typography';
import { HowToConnectBlock } from '../../models/howToConnect';
import { WhoWeAreBlock } from '../../models/whoWeAre';
import Title from '../../components/title';
import { IntersectionObserver } from '../../components/IntersectionObserver';
import { useFontLoader } from '../../context/fontLoader';
import { toVariant } from '../../helpers/animation';
import { motion } from 'framer-motion';
import Text from '../../components/text';
import useIntersect from '../../helpers/useIntersect';

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
const IntroContainer: FC<HowToConnectBlock | WhoWeAreBlock> = (props) => {
    const isLoaded = useFontLoader();
    const ref = React.useRef(null);
    const { isVisible } = useIntersect(ref, {
        threshold: 0,
    });

    return (
        <IntersectionObserver
            render={({ isVisible }) => (
                <motion.div
                    animate={toVariant(isVisible && isLoaded)}
                    variants={{
                        entered: {
                            transition: {
                                delayChildren: 0,
                                staggerChildren: 0.17,
                            },
                        },
                    }}
                    css={styles.root}
                    {...props}
                >
                    <div css={styles.content}>
                        <div css={styles.textColumn}>
                            <Title css={styles.title}>{props.title}</Title>
                            <Text css={styles.body}>{props.body}</Text>
                        </div>
                        <div css={styles.backgroundContainer}>
                            <div css={styles.backgroundPositioner}>
                                {props.children}
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        />
    );
};

export default IntroContainer;
