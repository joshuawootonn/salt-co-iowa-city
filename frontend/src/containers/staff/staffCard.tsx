import React, { FC } from 'react';
import GatsbyBackgroundImage from 'gatsby-background-image';
import { css } from 'styled-components/macro';
import typography from '../../components/typography';
import { Staff } from '../../models/staff';
import { mapReferenceToLink } from '../../helpers/link';
import TextLink from '../../components/textLink';

const styles = {
    root: css`
        max-width: 367px;
        width: 100%;

        justify-self: center;
    `,
    image: css`
        height: 505px;
        width: 367px;
        background-repeat: no-repeat;
        background-position: center;
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
        <GatsbyBackgroundImage fluid={props.image.fluid} css={styles.image} />
        <div css={styles.textContainer}>
            <div css={styles.textBlock1}>
                <h4 css={typography.card.title}>
                    {props.firstName} {props.lastName}
                </h4>
                <p css={typography.card.text}>{props.about}</p>
            </div>
            <div css={styles.textBlock2}>
                <span css={typography.card.smallText}>{props.position}</span>
                <TextLink
                    destinationType="internal"
                    to={mapReferenceToLink(props)}
                >
                    {props.connectionLinkText}
                </TextLink>
            </div>
        </div>
    </div>
);

export default StaffCard;
