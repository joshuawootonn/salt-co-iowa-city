import React, { FC } from 'react';
import { css } from 'styled-components/macro';
import layout from '../../components/layout';
import EventCard from './eventCard';
import GatsbyBackgroundImage from 'gatsby-background-image';
import { UpcomingEventBlock } from '../../models/upcomingEvent';
import Title from '../../components/title';
import { toVariant } from '../../helpers/animation';
import { motion } from 'framer-motion';
import { useFontLoader } from '../../context/fontLoader';
import useIntersect from '../../helpers/useIntersect';
import ImageController from '../../components/image';

const styles = {
    root: css`
        overflow-x: visible;
    `,
    titleContainer: css`
        ${layout.container};
    `,
    title: css`
        margin-bottom: 50px;
    `,
    itemsContainer: css`
        width: 100vw;
        max-width: 100vw;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        overflow-x: scroll;

        padding-bottom: 150px;
        padding-left: 400px;

        ::-webkit-scrollbar {
            width: 0;
            background: transparent; /* make scrollbar transparent */
            // background: ${({ theme }) => theme.colors.purple.darkest};
        }
    `,
    image: css`
        position: relative;
        display: flex;
        width: 784px !important;
        height: 521px;
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        flex-shrink: 0;

        margin-right: 200px;
    `,
    cardContainer: css`
        position: absolute;
        top: 210px;
        right: -150px;
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

            <div css={styles.itemsContainer}>
                {props.events.map((event, i) => (
                    <ImageController
                        images={[event.image]}
                        key={i}
                        css={styles.image}
                    >
                        <div css={styles.cardContainer}>
                            <EventCard {...event} key={i} />
                        </div>
                    </ImageController>
                ))}
            </div>
        </motion.div>
    );
};

export default UpcomingEventsContainer;
