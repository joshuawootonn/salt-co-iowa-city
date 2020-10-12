import React, { FC } from 'react';
import { UpcomingEventBlock } from '../../services/upcomingEvent.service';
import { css } from 'styled-components';
import layout from '../../components/layout';
import typography from '../../components/typography';
import EventCard from './eventCard';

const styles = {
    root: css`
        overflow-x: visible;
    `,
    titleContainer: css`
        ${layout.container};
    `,
    title: css`
        ${typography.title2};
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
    image: (url: string) => css`
        position: relative;
        display: flex;
        width: 784px !important;
        height: 521px;
        background: url('${url}') no-repeat center;
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

const UpcomingEventsContainer: FC<UpcomingEventBlock> = (props) => (
    <div css={styles.root} {...props}>
        <div css={styles.titleContainer}>
            <h2 css={styles.title}>{props.title}</h2>
        </div>

        <div css={styles.itemsContainer}>
            {props.events.map((event, i) => (
                <div key={i} css={styles.image(event.image.url)}>
                    <div css={styles.cardContainer}>
                        <EventCard {...event} key={i} />
                    </div>
                </div>
            ))}
        </div>
    </div>
);

export default UpcomingEventsContainer;
