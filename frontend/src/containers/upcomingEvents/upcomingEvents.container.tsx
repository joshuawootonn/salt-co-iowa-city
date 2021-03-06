import React, { FC, useEffect } from 'react';
import { css } from 'styled-components/macro';
import layout from '../../components/layout';
import { UpcomingEventBlock } from '../../models/upcomingEvent';
import { Title } from '../../components/title';
import { toVariant } from '../../helpers/animation';
import { motion } from 'framer-motion';
import { useFontLoader } from '../../context/fontLoader';
import useIntersect from '../../helpers/useIntersect';
import Items from './items';
import { queryShit } from '../../components/useScreenType';

const styles = {
    titleContainer: css`
        ${layout.container};
        ${queryShit({
            mobile: css`
                margin-bottom: 10px;
            `,
            tablet: css`
                margin-bottom: 20px;
            `,
            desktop: css`
                margin-bottom: 40px;
            `,
        })}
    `,
    title: css`
        white-space: normal;
    `,
};

const UpcomingEventsContainer: FC<{
    upcomingEventBlock: UpcomingEventBlock;
}> = ({ upcomingEventBlock, ...props }) => {
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
            {...props}
        >
            <div css={styles.titleContainer}>
                <Title variant="small" css={styles.title}>
                    {upcomingEventBlock.title}
                </Title>
            </div>

            <Items {...upcomingEventBlock} />
        </motion.div>
    );
};

export default UpcomingEventsContainer;
