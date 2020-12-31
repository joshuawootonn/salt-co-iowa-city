import { motion } from 'framer-motion';
import React, { FC } from 'react';
import typography from '../../components/typography';
import TextLink from '../../components/textLink';
import { mapReferenceToLink } from '../../helpers/link';
import styled from 'styled-components/macro';
import { MinistryDescriptionCardProps } from './ministryDescriptionCard';
import { useAnimationProp } from '../../helpers/animation';

const TextContainer = styled(motion.div)`
    background-color: ${({ theme }) => theme.colors.backgroundTransparent};

    width: 500px;
    max-width: 100%;

    align-self: ${({ isPositionedLeft }: { isPositionedLeft: boolean }) =>
        isPositionedLeft ? 'flex-start' : 'flex-end'};

    z-index: 10;

    & > div:first-child {
        border: 2px solid ${({ theme }) => theme.colors.blue.light};
        display: flex;
        flex-direction: column;
        padding: 15px;
        h4 {
            margin-bottom: 6px;
        }
    }
    & > div:nth-child(2) {
        border: 2px solid ${({ theme }) => theme.colors.blue.light};
        transform: translateY(-2px);
    }
`;

const Location = styled.div`
    border: 2px solid ${({ theme }) => theme.colors.blue.light};
    transform: translateY(-2px);
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
`;

const Link = styled.div`
    border: 2px solid ${({ theme }) => theme.colors.blue.light};

    transform: translateY(-4px);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
`;

const MinistryDescriptionTextCard: FC<MinistryDescriptionCardProps> = ({
    link,
    description,
    location,
    index,
}) => {
    const isPositionedLeft = index % 2 === 1;
    const animationProps = useAnimationProp(
        {
            initial: {
                opacity: 0,
            },
            variants: {
                entered: {
                    opacity: 1,
                },
            },
            transition: { type: 'spring', duration: 1, bounce: 0 },
        },
        {
            mobile: {
                initial: {
                    x: -40,
                    y: -40,
                },
                variants: {
                    entered: {
                        x: 0,
                        y: -20,
                    },
                },
            },
            tablet: {
                initial: {
                    x: isPositionedLeft ? 0 : -60,
                    y: `calc(-1 * calc(${location ? '60' : '100'}% - 50px))`,
                },
                variants: {
                    entered: {
                        x: isPositionedLeft ? 30 : -30,
                        y: `calc(-1 * calc(${
                            location ? '60' : '100'
                        }% - 30px))`,
                    },
                },
            },
            desktop: {
                initial: {
                    x: isPositionedLeft ? -80 : -40,
                    y: `calc(-1 * calc(${location ? '70' : '100'}% - 60px))`,
                },
                variants: {
                    entered: {
                        x: isPositionedLeft ? -40 : 40,
                        y: `calc(-1 * calc(${
                            location ? '70' : '100'
                        }% - 40px))`,
                    },
                },
            },
        }
    );

    return (
        <TextContainer isPositionedLeft={isPositionedLeft} {...animationProps}>
            <div>
                <p css={typography.card.text}>{description}</p>
            </div>
            {location && (
                <Location>
                    <span>Location</span>
                    <TextLink
                        type="card"
                        destinationType="external"
                        href={location.url}
                    >
                        {location.text}
                    </TextLink>
                </Location>
            )}
            <Link>
                <TextLink
                    type="card"
                    destinationType="internal"
                    to={mapReferenceToLink(link.reference)}
                >
                    {link.text}
                </TextLink>
            </Link>
        </TextContainer>
    );
};

export default MinistryDescriptionTextCard;
