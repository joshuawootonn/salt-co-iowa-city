import React, { FC } from 'react';
import GatsbyBackgroundImage from 'gatsby-background-image';
import styled, { css } from 'styled-components/macro';
import typography from '../../components/typography';
import { Staff } from '../../models/staff';
import { mapReferenceToLink } from '../../helpers/link';
import TextLink from '../../components/textLink';
import Image from '../../components/image';
import { motion } from 'framer-motion';

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
    textContainer: css``,

    textBlock1: css`
        border: 2px solid ${({ theme }) => theme.colors.blue.light};
        display: flex;
        flex-direction: column;
        padding: 15px;
        h4 {
            margin-bottom: 6px;
        }
    `,
    textBlock2: css`
        transform: translateY(-2px);
        border: 2px solid ${({ theme }) => theme.colors.blue.light};
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 15px;
    `,
};

const animationProps = {
    initial: { opacity: 0, x: -20, y: -77 },
    variants: {
        entered: { x: 20, opacity: 1, y: -77 },
        exited: { x: -20, opacity: 0, y: -77 },
    },
    transition: { type: 'spring', duration: 1, bounce: 0 },
};

const TextCard = styled(motion.div)`
    background-color: ${({ theme }) => theme.colors.backgroundTransparent};
    transform: translate(20px, -77px);
`;

const StaffCard: FC<Staff> = (props) => (
    <div css={styles.root}>
        <Image fluid={props.image.fluid} css={styles.image} />
        <TextCard {...animationProps}>
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
                    type={'card'}
                >
                    {props.connectionLinkText}
                </TextLink>
            </div>
        </TextCard>
    </div>
);

export default StaffCard;
