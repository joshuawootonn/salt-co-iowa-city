import React, { FC } from 'react';
import { css } from 'styled-components/macro';
import typography from '../../components/typography';
import { HowToConnectBlock } from '../../models/howToConnect';
import { WhoWeAreBlock } from '../../models/whoWeAre';
import { Title } from '../../components/title';
import { useFontLoader } from '../../context/fontLoader';
import { toVariant } from '../../helpers/animation';
import { motion } from 'framer-motion';
import Text from '../../components/text';
import useIntersect from '../../helpers/useIntersect';
import WhoWeAreSvg from './whoWeAre';
import HowToConnectSvg from './howToConnect';

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

        justify-content: flex-start;
        align-items: flex-start;
    `,

    textColumn: css`
        position: relative;
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
        position: absolute;
        z-index: -1;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
    `,
};

interface A extends HowToConnectBlock {
    type: 'HowToConnect';
}
interface B extends WhoWeAreBlock {
    type: 'WhoWeAre';
}

type IntroContainerProps = A | B;

const IntroContainer: FC<IntroContainerProps> = (props) => {
    const isLoaded = useFontLoader();
    const ref = React.useRef(null);
    const { isVisible } = useIntersect(ref, {
        threshold: 0,
    });

    return (
        <motion.div
            ref={ref}
            animate={toVariant(isVisible && isLoaded)}
            variants={{
                entered: {
                    transition: {
                        delayChildren: 0.4,
                        staggerChildren: 0.2,
                    },
                },
            }}
            css={styles.root}
            {...props}
        >
            <motion.div css={styles.content}>
                <motion.div css={styles.textColumn}>
                    <Title isOrchestrated={true} css={styles.title}>
                        {props.title}
                    </Title>
                    <Text css={styles.body}>{props.body}</Text>
                    {/*{props.type === 'WhoWeAre' && <WhoWeAreSvg />}*/}
                    {/*{props.type === 'HowToConnect' && <HowToConnectSvg />}*/}
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

export default IntroContainer;
