import React, { FC } from 'react';
import { css } from 'styled-components/macro';
import layout from '../../components/layout';
import { UpcomingEventBlock } from '../../models/upcomingEvent';
import { Title } from '../../components/title';
import { toVariant } from '../../helpers/animation';
import { motion } from 'framer-motion';
import { useFontLoader } from '../../context/fontLoader';
import useIntersect from '../../helpers/useIntersect';
import Items from './items';
import BlockArrow from '../../svgs/blockArrow.svg';

const styles = {
    root: css`
        overflow-x: visible;
    `,
    titleContainer: css`
        ${layout.container};
    `,
    title: css`
        white-space: normal;
        margin-bottom: 50px;
    `,
};

const UpcomingEventsContainer: FC<UpcomingEventBlock> = (props) => {
    const isLoaded = useFontLoader();
    const ref = React.useRef(null);
    const { isVisible } = useIntersect(ref, {
        threshold: 0,
    });

    return (
        <motion.div
            animate={toVariant(isLoaded && isVisible)}
            variants={{
                entered: {
                    transition: {
                        delayChildren: 0.2,
                        staggerChildren: 0.05,
                    },
                },
            }}
            ref={ref}
            css={styles.root}
            {...props}
        >
            <div css={styles.titleContainer}>
                <Title variant="small" css={styles.title}>
                    {props.title}
                </Title>
            </div>

            <Items {...props} events={[...props.events, ...props.events]} />
        </motion.div>
    );
};

export default UpcomingEventsContainer;
