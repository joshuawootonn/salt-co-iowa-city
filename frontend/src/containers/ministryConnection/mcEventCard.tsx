import React, { FC } from 'react';
import { MinistryConnection } from '../../models/ministryConnection';
import { useAnimationProp } from '../../helpers/animation';
import EventCard from '../upcomingEvents/eventCard';

const McEventCard: FC<MinistryConnection> = (props) => {
    const animationProps = useAnimationProp(
        {
            initial: {
                opacity: 0,
                y: 20,
            },
            variants: {
                entered: {
                    opacity: 1,
                    y: 0,
                },
            },
            transition: { type: 'spring', duration: 1, bounce: 0 },
        },
        {
            mobile: {
                initial: {
                    x: -40,
                },
                variants: {
                    entered: {
                        x: 0,
                    },
                },
            },
            tablet: {
                initial: {
                    x: -60,
                },
                variants: {
                    entered: {
                        x: -30,
                    },
                },
            },
            desktop: {
                initial: {
                    x: -40,
                },
                variants: {
                    entered: {
                        x: 40,
                    },
                },
            },
        }
    );

    return <EventCard {...props.nextEvent} {...animationProps} />;
};

export default McEventCard;
