import React, { FC, useEffect } from 'react';
import { css } from 'styled-components/macro';
import layout from '../../components/layout';
import typography from '../../components/typography';
import { MinistryConnection } from '../../models/ministryConnection';
import { motion, useAnimation } from 'framer-motion';
import useScreenType, {
    Media,
    queryShit,
} from '../../components/useScreenType';
import { useFontLoader } from '../../context/fontLoader';
import useIntersect from '../../helpers/useIntersect';
import Text from '../../components/text';
import EventBackground from './assets/eventBackground';
import McEventCard from './mcEventCard';
import BlockArrow from '../../svgs/blockArrow.svg';
import useOrchestration from '../../components/useOrchestration';

const styles = {
    root: css`
        ${layout.container};
        display: flex;
        ${queryShit({
            mobile: css`
                flex-direction: column;

                align-items: flex-end;
                justify-content: space-between;
            `,
            tablet: css`
                flex-direction: column;

                align-items: flex-end;
                justify-content: space-between;
            `,

            desktop: css`
                flex-direction: row;
                align-items: flex-start;
                justify-content: space-between;
            `,
        })};
    `,

    alertContainer: css`
        display: flex;

        ${queryShit({
            mobile: css`
                min-height: 100px;

                max-width: 100%;
                flex-direction: row;
                justify-content: space-between;
                align-items: center;
                align-self: flex-start;
            `,
            tablet: css`
                min-height: 150px;
                flex-direction: row;
                justify-content: flex-start;
                align-items: flex-start;

                max-width: 500px;

                align-self: flex-start;
            `,
            desktop: css`
                flex-direction: column;
                justify-content: flex-start;
                align-items: flex-end;
                width: 500px;
                max-width: 50%;
                transform: translate3d(0px, 80px, 0);
            `,
        })}
    `,

    arrowContainer: css`
        margin-left: 40px;
        svg {
            ${queryShit({
                mobile: css`
                    width: 60px;
                    transform: translate3d(0px, -10px, 0);
                `,
                tablet: css`
                    width: 100px;
                    transform: translate3d(0px, 20px, 0);
                `,
                desktop: css`
                    width: 150px;
                    transform: translate3d(0px, 35px, 0);
                `,
            })}
        }
    `,
    text: css`
        ${typography.title3}
    `,
    eventCard: css`
        width: 500px;
        max-width: 100%;
    `,
};

const getJiggleAnimation = (media: Media) => {
    if (media === 'mobile') {
        return {
            rotate: [105, 111, 100, 105],
            scale: [1, 1.05, 0.98, 1],
        };
    }
    if (media === 'tablet') {
        return {
            rotate: [75, 82, 69, 75],
            scale: [1, 1.05, 0.98, 1],
        };
    }
    return {
        rotate: [12, 16, 6, 12],
        scale: [1, 1.05, 0.98, 1],
    };
};

const EventSection: FC<MinistryConnection> = ({ title, acronym, ...props }) => {
    const screenType = useScreenType();
    const isLoaded = useFontLoader();
    const ref = React.useRef(null);
    const { isVisible } = useIntersect(ref, {
        threshold: 0.3,
    });

    const controls = useAnimation();
    const isOrchestrated = useOrchestration(isVisible && isLoaded, 2000);

    useEffect(() => {
        if (isVisible && isLoaded) {
            controls.start('entered');
        }
    }, [screenType, isVisible, isLoaded]);

    return (
        <motion.div
            ref={ref}
            variants={{
                entered: {
                    transition: {
                        delayChildren: 0.2,
                        staggerChildren: 0.17,
                    },
                },
            }}
            animate={controls}
            css={[styles.root]}
            {...props}
        >
            <EventBackground title={title} {...props} />
            <div css={styles.alertContainer}>
                <Text isOrchestrated={isOrchestrated} css={styles.text}>
                    Next {acronym || title} Event
                </Text>
                <motion.div
                    animate={{
                        ...getJiggleAnimation(screenType),
                        transition: {
                            repeat: Infinity,
                            repeatDelay: 2.5,
                            type: 'spring',
                            stiffness: 100,
                            velocity: 1000,
                            damping: 2,
                            mass: 0.3,
                        },
                    }}
                    css={styles.arrowContainer}
                >
                    <BlockArrow />
                </motion.div>
            </div>
            <McEventCard title={title} {...props} />
        </motion.div>
    );
};

export default EventSection;
