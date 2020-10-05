import React, { FC } from 'react';
import { Staff } from '../../services/staff.services';

import { css } from 'styled-components';
import typography from '../../components/typography';
import CardLink from '../../components/cardLink';

const styles = {
    root: css`
        max-width: 367px;
        width: 100%;
        justify-self: center;
    `,
    imageContainer: (url: string) => css`
        height: 505px;
        background: url('${url}') no-repeat center;
        background-size: cover;
    `,
    textContainer: css`
        background-color: ${({ theme }) => theme.colors.backgroundTransparent};
        transform: translate(20px, -77px);
    `,

    textBlock1: css`
        border: 2px solid ${({ theme }) => theme.colors.purple.light};
        display: flex;
        flex-direction: column;
        padding: 15px;
        h4 {
            margin-bottom: 6px;
        }
    `,
    textBlock2: css`
        border: 2px solid ${({ theme }) => theme.colors.purple.light};
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 15px;
    `,
};

const StaffCard: FC<Staff> = (props) => (
    <div css={styles.root}>
        <div css={styles.imageContainer(props.image.url)} />
        <div css={styles.textContainer}>
            <div css={styles.textBlock1}>
                <h4 css={typography.card.title}>
                    {props.firstName} {props.lastName}
                </h4>
                <p css={typography.card.text}>{props.about}</p>
            </div>
            <div css={styles.textBlock2}>
                <span css={typography.card.smallText}>{props.position}</span>
                <CardLink href={'/contact'}>
                    {props.connectionLinkText}
                </CardLink>
            </div>
        </div>
    </div>
);

export default StaffCard;
