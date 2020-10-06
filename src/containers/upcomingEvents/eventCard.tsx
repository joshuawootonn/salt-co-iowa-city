import React, { FC } from 'react';
import typography from '../../components/typography';
import CardLink from '../../components/cardLink';
import { UpcomingEvent } from '../../services/upcomingEvent.service';
import { css } from 'styled-components';
import dayjs, { Dayjs } from 'dayjs';

const boxBase = css`
    background-color: ${({ theme }) => theme.colors.backgroundTransparent};
    border: 2px solid ${({ theme }) => theme.colors.purple.light};
    padding: 20px;
`;

const styles = {
    root: css`
        width: 500px;
    `,

    box1: css`
        ${boxBase};

        h4 {
            margin-bottom: 6px;
        }
        span {
            display: block;
            margin-bottom: 8px;
        }
    `,
    box2: css`
        ${boxBase};
        transform: translateY(-2px);

        position: relative;

        height: 150px;

        display: flex;
        justify-content: center;
        align-items: center;

        span {
            ${typography.card.smallText};
            position: absolute;
            top: 10px;
            left: 10px;
        }
    `,
    box3: css`
        transform: translateY(-4px);
        ${boxBase};
    `,
};

const getMinuteFormat = (time: Dayjs) => {
    return time.minute() === 0 ? '' : ':mm';
};

const getDateString = (startDateTime: string, endDateTime: string) => {
    const start = dayjs(startDateTime);
    const end = dayjs(endDateTime);

    if (start.day() === end.day()) {
        const isSameTimeOfDay =
            Math.floor(start.get('hour') / 12) ===
            Math.floor(end.get('hour') / 12);

        return `${start.format(
            `M / D @ h${getMinuteFormat(start)} ${isSameTimeOfDay ? '' : 'a'}`
        )} - ${end.format(`h${getMinuteFormat(end)} a`)}`;
    }

    return `${start.format(
        `M / D @ h${getMinuteFormat(start)} a`
    )} - ${end.format(`M / D @ h${getMinuteFormat(end)} a`)}`;
};

const EventCard: FC<UpcomingEvent> = ({
    title,
    startDateTime,
    endDateTime,
    description,
    location,
    contact,
}) => {
    return (
        <div css={styles.root}>
            <div css={styles.box1}>
                <h4 css={typography.card.title}>{title}</h4>
                <span css={typography.card.text}>
                    {getDateString(startDateTime, endDateTime)}
                </span>
                <p css={typography.card.smallText}>{description}</p>
            </div>
            <div css={styles.box2}>
                <span>Location</span>
                <CardLink
                    target="_blank"
                    rel="noopener noreferrer"
                    href={location.url}
                >
                    {location.text}
                </CardLink>
            </div>
            <div css={styles.box3}>
                <CardLink>{contact.text}</CardLink>
            </div>
        </div>
    );
};

export default EventCard;
