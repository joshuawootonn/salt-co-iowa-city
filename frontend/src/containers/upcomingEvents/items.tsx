import React, { FC, useEffect } from 'react';
import ImageController from '../../components/image';
import { css } from 'styled-components/macro';
import { UpcomingEvent, UpcomingEventBlock } from '../../models/upcomingEvent';
import { LeftArrow, RightArrow } from './control';
import useScreenType, { queryShit } from '../../components/useScreenType';
import UpcomingEventCard from './upcomingEventCard';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import useIntersect from '../../helpers/useIntersect';
import { useFontLoader } from '../../context/fontLoader';
import { motion, useAnimation } from 'framer-motion';
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

    slickContainer: (itemCount: number) => css`
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
                    padding-left: 15px;
                `,
                tablet: css`
                    padding-left: 40px;
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
                desktop:
                    itemCount > 1
                        ? css`
                              display: block !important;
                          `
                        : css`
                              display: none !important;
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

    itemRoot: (itemCount: number) => css`
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: flex-end;

        ${queryShit({
            mobile:
                itemCount > 1
                    ? css`
                          width: 80vw;
                      `
                    : css`
                          width: calc(100vw - 30px); ;
                      `,
            tablet:
                itemCount > 1
                    ? css`
                          width: 80vw;
                      `
                    : css`
                          width: calc(100vw - 80px);
                      `,
            desktop: css`
                width: auto;
            `,
        })}
    `,
    image: (itemCount: number) => css`
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
            desktop:
                itemCount > 1
                    ? css`
                          width: 784px;
                          height: auto;
                      `
                    : css`
                          width: 1140px;
                          height: auto;
                      `,
        })}

        flex-shrink: 0;
    `,
};

const Item: FC<{ event: UpcomingEvent; itemCount: number }> = ({
    event,
    itemCount,
}) => {
    const isLoaded = useFontLoader();
    const ref = React.useRef(null);
    const screenType = useScreenType();
    const controls = useAnimation();
    const { isVisible } = useIntersect(
        ref,
        {
            threshold: 0.2,
        },
        true
    );

    useEffect(() => {
        if (isVisible && isLoaded) {
            controls.start('entered');
        }
    }, [screenType, isLoaded, isVisible]);

    return (
        <motion.div
            animate={controls}
            variants={{
                entered: {
                    transition: {
                        delayChildren: 0.2,
                        staggerChildren: 0.05,
                    },
                },
            }}
            ref={ref}
            css={styles.itemRoot(itemCount)}
        >
            <ImageController
                isOrchestrated={true}
                images={[event.image]}
                css={styles.image(itemCount)}
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

    const itemCount = props.events.length;

    return (
        <div css={styles.main}>
            <Slider css={styles.slickContainer(itemCount)} {...settings}>
                {props.events.map((event) => (
                    <Item
                        event={event}
                        key={event.image.fluid.src}
                        itemCount={itemCount}
                    />
                ))}
            </Slider>
        </div>
    );
};

export default Items;
