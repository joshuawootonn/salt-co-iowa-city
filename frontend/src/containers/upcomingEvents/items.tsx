import React, { FC } from 'react';
import ImageController from '../../components/image';
import { css } from 'styled-components/macro';
import { UpcomingEvent, UpcomingEventBlock } from '../../models/upcomingEvent';
import { LeftArrow, RightArrow } from './control';
import { queryShit } from '../../components/useScreenType';
import UpcomingEventCard from './upcomingEventCard';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import useIntersect from '../../helpers/useIntersect';
import { useFontLoader } from '../../context/fontLoader';
import { motion } from 'framer-motion';
import { toVariant } from '../../helpers/animation';

const styles = {
    main: css`
        width: 100vw;
        position: relative;

        ${queryShit({
            mobile: css`
                max-height: 660px;
            `,
            tablet: css`
                height: 1000px;
            `,
        })}
        overflow: hidden;
    `,

    slickContainer: css`
        .slick-list {
            overflow: visible;

            ${queryShit({
                mobile: css`
                    padding-left: 0px;
                `,
                tablet: css`
                    padding-left: 0px;
                `,
                desktop: css`
                    padding-left: calc((100vw - 1460px) / 2 - 4px);
                `,
            })}
        }

        .slick-slide {
            ${queryShit({
                mobile: css`
                    padding-left: 5vw;
                `,
                tablet: css`
                    padding-left: 5vw;
                `,
                desktop: css`
                    padding-left: 160px;
                `,
            })}
            transition: all ease 300ms;
            outline: none;
        }

        .slick-next,
        .slick-prev {
            ${queryShit({
                mobile: css`
                    display: none !important;
                `,
                tablet: css`
                    display: none !important;
                `,
                desktop: css`
                    display: block !important;
                `,
            })}
        }
        .slick-next {
            position: absolute !important;
            bottom: 100px;

            right: calc((100vw - 1140px) / 2);
            left: unset;
            top: unset;
        }

        .slick-prev {
            position: absolute !important;
            bottom: 100px;
            right: calc((100vw - 1140px) / 2 + 120px);
            left: unset;
            top: unset;
        }

        .slick-active {
            outline: none;
        }

        cursor: grab;
    `,

    itemRoot: css`
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: flex-end;

        ${queryShit({
            mobile: css`
                width: 80vw;
            `,
            tablet: css`
                width: 80vw;
            `,
            desktop: css`
                width: auto;
            `,
        })}
    `,
    image: css`
        z-index: -1;
        position: relative;

        ${queryShit({
            mobile: css`
                width: 100%;
                height: auto;
                margin: 0;
            `,
            tablet: css`
                width: 100%;
                height: auto;
                margin: 0;
            `,
            desktop: css`
                width: 784px;
                height: auto;
            `,
        })}

        flex-shrink: 0;
    `,
};

const Item: FC<{ event: UpcomingEvent }> = ({ event }) => {
    const isLoaded = useFontLoader();
    const ref = React.useRef(null);
    const { isVisible } = useIntersect(
        ref,
        {
            threshold: 0.2,
        },
        true
    );

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
            css={styles.itemRoot}
        >
            <ImageController
                isOrchestrated={true}
                images={[event.image]}
                css={styles.image}
            />
            <UpcomingEventCard {...event} />
        </motion.div>
    );
};

const Items: FC<UpcomingEventBlock> = (props) => {
    const settings = {
        dots: false,
        infinite: false,
        variableWidth: true,
        easing: 'ease',
        slidesToScroll: 1,
        arrows: true,
        nextArrow: <RightArrow />,
        prevArrow: <LeftArrow />,
    };

    return (
        <div css={styles.main}>
            <Slider css={styles.slickContainer} {...settings}>
                {props.events.map((event) => (
                    <Item event={event} key={event.image.fluid.src} />
                ))}
            </Slider>
        </div>
    );
};

export default Items;
