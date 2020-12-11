import React, { FC } from 'react';
import { css } from 'styled-components/macro';
import dayjs from 'dayjs';
import typography from '../../components/typography';
import Male from './male.svg';
import Female from './female.svg';
import { ConnectionGroup } from '../../models/connectionGroup';
import { mapReferenceToLink } from '../../helpers/link';
import TextLink from '../../components/textLink';

const boxBase = css`
    background-color: ${({ theme }) => theme.colors.backgroundTransparent};
    border: 2px solid ${({ theme }) => theme.colors.blue.lightest};
    padding: 20px;
`;

const styles = {
    root: css``,
    box1: css`
        ${boxBase};

        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        span:first-child {
            ${typography.card.text};
        }
        span:nth-child(2) {
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
        transform: translateY(-4px);

        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        span {
            ${typography.card.text};
        }
    `,
};

const ConnectionGroupCard: FC<ConnectionGroup> = (props) => {
    const dateObject = dayjs(props.dateTime);
    return (
        <div css={styles.root}>
            <div css={styles.box1}>
                <span>{`${dateObject.format('dddd')} at ${dateObject.format(
                    'h:mm a'
                )}`}</span>
                <span>{props.gender === 'Male' ? 'Men' : 'Women'}</span>
            </div>
            <div css={styles.box2}>
                <p>{props.description}</p>
                {props.gender === 'Male' ? <Male /> : <Female />}
            </div>
            <div css={styles.box3}>
                <span>{props.leaders}</span>
                <TextLink
                    destinationType="internal"
                    to={mapReferenceToLink(props)}
                    type={'card'}
                >
                    {props.connectionLinkText}
                </TextLink>
            </div>
        </div>
    );
};

export default ConnectionGroupCard;
