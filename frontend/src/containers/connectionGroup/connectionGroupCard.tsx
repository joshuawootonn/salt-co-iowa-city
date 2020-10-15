import React, { FC } from 'react';
import { css } from 'styled-components/macro';
import { ConnectionGroup } from '../../__stories__/services/connectionGroup.service';
import dayjs from 'dayjs';
import typography from '../../components/typography';
import CardLink from '../../components/cardLink';
import Male from './male.svg';
import Female from './female.svg';

const boxBase = css`
    background-color: ${({ theme }) => theme.colors.backgroundTransparent};
    border: 2px solid ${({ theme }) => theme.colors.purple.light};
    padding: 20px;
`;

const styles = {
    root: css`
        width: 357px;
        margin-right: 20px;
    `,
    box1: css`
        ${boxBase};

        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        span:first-child {
            ${typography.card.text};
        }
        span:first-child {
            ${typography.card.text};
        }
    `,
    box2: css`
        ${boxBase};

        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        transform: translateY(-2px);
        p {
            ${typography.card.text};
        }

        svg {
            margin-left: 10px;
            flex-shrink: 0;
            width: 55px;
            height: auto;
        }
    `,
    box3: css`
        ${boxBase};
        transform: translateY(-2px);

        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        span {
            ${typography.card.text};
        }
    `,
};

const ConnectionGroupCard: FC<ConnectionGroup> = ({
    description,
    dateTime,
    gender,
    leaders,
}) => {
    const dateObject = dayjs(dateTime);
    return (
        <div css={styles.root}>
            <div css={styles.box1}>
                <span>{`${dateObject.format('dddd')} at ${dateObject.format(
                    'h:mm a'
                )}`}</span>
                <span>{gender === 'Male' ? 'Men' : 'Women'}</span>
            </div>
            <div css={styles.box2}>
                <p>{description}</p>
                {gender === 'Male' ? <Male /> : <Female />}
            </div>
            <div css={styles.box3}>
                <span>{leaders}</span>
                <CardLink>Contact</CardLink>
            </div>
        </div>
    );
};

export default ConnectionGroupCard;
