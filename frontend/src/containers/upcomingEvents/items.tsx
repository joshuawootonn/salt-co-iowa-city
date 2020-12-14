import React, { FC, useEffect, useState } from 'react';
import ImageController from '../../components/image';
import { css } from 'styled-components/macro';
import { UpcomingEventBlock } from '../../models/upcomingEvent';
import Control from './control';
import { animateScroll } from 'react-scroll';
import { queryShit } from '../../components/useScreenType';
import { useScroll } from 'react-use';
import layout from '../../components/layout';
import UpcomingEventCard from './upcomingEventCard';

const styles = {
    main: css`
        width: 100vw;
    `,

    itemsContainer: css`
        width: 100%;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        overflow-x: scroll;

        ${queryShit({
            mobile: css`
                padding-left: 5px;
            `,
            tablet: css`
                padding-left: 40px;
            `,
            desktop: css`
                padding-left: calc((100vw - 1140px) / 2 - 4px);
            `,
        })}

        ::-webkit-scrollbar {
            width: 0;
            background: transparent; /* make scrollbar transparent */
            // background: ${({ theme }) => theme.colors.purple.darkest};
        }
    `,
    itemRoot: css`
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: flex-end;

        ${queryShit({
            mobile: css`
                ${layout.container};
                margin-right: 200px;
            `,
            tablet: css`
                ${layout.container};

                margin-right: 200px;
            `,
            desktop: css`
                margin-right: 200px;
            `,
        })}
    `,
    image: css`
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

const Items: FC<UpcomingEventBlock> = (props) => {
    const container = React.useRef(null);
    const firstElement = React.useRef<any>(null);
    const scrollLock = React.useRef(false);
    const { x } = useScroll(container);
    const [boundingBox, setBoundingBox] = useState<{ width: number } | null>(
        null
    );

    useEffect(() => {
        if (firstElement.current) {
            setBoundingBox(firstElement.current.getBoundingClientRect());
        }
    }, [firstElement.current]);

    const containerId = 'upcoming-events-container';

    const scrollToEvent = (newPosition: number) => {
        if (!boundingBox || scrollLock.current) return;
        scrollLock.current = true;
        console.log('PING PONG');
        animateScroll.scrollTo(newPosition, {
            duration: 300,
            smooth: 'easeOutCirc',
            horizontal: true,
            containerId: containerId,
        });
        setTimeout(() => {
            scrollLock.current = false;
        }, 300);
    };

    const handlePrev = () => {
        if (!boundingBox || scrollLock.current) return;

        const width = boundingBox.width + 200;
        scrollToEvent(x % width < 10 ? x - width : x - (x % width));
    };

    const handleNext = () => {
        if (!boundingBox || scrollLock.current) return;

        const width = boundingBox.width + 200;

        const prop = x - (x % width) + width;
        const maxWidth = props.events.length * width;
        scrollToEvent(prop < maxWidth ? prop : maxWidth);
    };

    return (
        <>
            <div css={styles.main}>
                <Control onNext={handleNext} onPrev={handlePrev} />
                <div
                    id={containerId}
                    ref={container}
                    css={styles.itemsContainer}
                >
                    {props.events.map((event, i) => (
                        <div
                            ref={i === 0 ? firstElement : null}
                            key={i}
                            css={styles.itemRoot}
                        >
                            <ImageController
                                images={[event.image]}
                                css={styles.image}
                            />
                            <UpcomingEventCard {...event} />
                        </div>
                    ))}
                    <div
                        style={{
                            width: `400px`,
                            flexShrink: 0,
                        }}
                    />
                </div>
            </div>
        </>
    );
};

export default Items;
