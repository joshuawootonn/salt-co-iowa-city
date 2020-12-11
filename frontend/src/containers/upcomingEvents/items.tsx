import React, { FC, useEffect, useState } from 'react';
import ImageController from '../../components/image';
import EventCard from './eventCard';
import { css } from 'styled-components/macro';
import { UpcomingEventBlock } from '../../models/upcomingEvent';
import useHorizontal from '@oberon-amsterdam/horizontal/hook';
import HorizontalScroll from '@oberon-amsterdam/horizontal';

const styles = {
    itemsContainer: css`
        width: 100%;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        overflow-x: scroll;
        padding-bottom: 150px;
        padding-left: 400px;

        transition: all 0.2s;
        transform: scale(0.98);
        will-change: transform;
        user-select: none;
        cursor: pointer;

        // ::-webkit-scrollbar {
        //     width: 0;
        //     background: transparent; /* make scrollbar transparent */
        //     // background: ${({ theme }) => theme.colors.purple.darkest};
        // }
    `,
    itemRoot: css`
        position: relative;

        margin-right: 200px;
    `,
    image: css`
        position: relative;
        width: 784px;
        height: 521px;

        flex-shrink: 0;
    `,
    cardContainer: css`
        position: absolute;
        top: 210px;
        right: -150px;
    `,
};

const Items: FC<UpcomingEventBlock> = (props) => {
    const horizontal = React.useRef(null);
    const [container, setContainer] = useState();

    useEffect(() => {
        horizontal.current = new HorizontalScroll({ container });
        horizontal.current.on('scroll', (e) => {
            console.log(e, container.scrollWidth);
        });
        return () => {
            if (horizontal.current) {
                horizontal.current.destroy();
            }
        };
    }, [container]);

    return (
        <div
            ref={(ref) => {
                setContainer(ref as any);
            }}
            css={styles.itemsContainer}
        >
            {props.events.map((event, i) => (
                <div key={i} css={styles.itemRoot}>
                    <ImageController
                        images={[event.image]}
                        css={styles.image}
                    />
                    <div css={styles.cardContainer}>
                        <EventCard {...event} key={i} />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Items;
