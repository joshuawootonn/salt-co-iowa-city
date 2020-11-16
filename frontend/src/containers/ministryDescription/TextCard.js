import { motion } from 'framer-motion';
import React, { FC } from 'react';
import { MinistryDescription } from '../../models/ministryDescription';
import typography from '../../components/typography';
import TextLink from '../../components/textLink';
import { mapReferenceToLink } from '../../helpers/link';

import styled from 'styled-components';

const animationProps = {
    initial: { opacity: 0, x: 0 },
    variants: {
        entered: { x: 40, opacity: 1 },
        exited: { x: 0, opacity: 0 },
    },
    transition: { type: 'spring', duration: 1, bounce: 0 },
};

const TextContainer = styled(motion.div)`
    background-color: ${({ theme }) => theme.colors.backgroundTransparent};

    width: 500px;
    position: absolute;

    bottom: -50px;
    left: -130px;
    z-index: 10;

    & > div:first-child {
        border: 2px solid ${({ theme }) => theme.colors.purple.light};
        display: flex;
        flex-direction: column;
        padding: 15px;
        h4 {
            margin-bottom: 6px;
        }
    }

    & > div:last-child {
        border: 2px solid ${({ theme }) => theme.colors.purple.light};

        transform: translateY(-2px);
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 15px;
    }
`;

const TextCard = ({ link, description }) => (
    <TextContainer {...animationProps}>
        <div>
            <p css={typography.card.text}>{description}</p>
        </div>
        <div>
            <TextLink
                type="card"
                destinationType="internal"
                to={mapReferenceToLink(link.reference)}
            >
                {link.text}
            </TextLink>
        </div>
    </TextContainer>
);

export default TextCard;
