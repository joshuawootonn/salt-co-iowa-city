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
import WhoWeAre from './whoWeAre';
import HowToConnectSvg from './howToConnect';
import { queryShit } from '../../components/useScreenType';
import layout from '../../components/layout';
import useOrchestration from '../../components/useOrchestration';

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
        ${layout.container};
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
        width: 100%;
    `,

    title: css`
        ${typography.title1};
        margin-bottom: 2px;
        ${queryShit({
            mobile: css`
                white-space: normal;
            `,
            tablet: css`
                white-space: normal;
            `,
        })}
    `,

    body: css`
        ${typography.bigText};
        width: 100%;
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
            {...props}
        >
            <motion.div css={styles.content}>
                <motion.div css={styles.textColumn}>
                    <Title
                        isOrchestrated={isOrchestrated}
                        css={styles.title as any}
                    >
                        {props.title}
                    </Title>
                    <Text isOrchestrated={isOrchestrated} css={styles.body}>
                        {props.body}
                    </Text>
                    {props.type === 'WhoWeAre' && <WhoWeAre />}
                    {props.type === 'HowToConnect' && <HowToConnectSvg />}
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

export default IntroContainer;
