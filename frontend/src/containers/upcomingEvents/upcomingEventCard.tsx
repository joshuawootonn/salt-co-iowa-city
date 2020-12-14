import React, { FC } from 'react';
import { useAnimationProp } from '../../helpers/animation';
import EventCard from './eventCard';
import { UpcomingEvent } from '../../models/upcomingEvent';

const UpcomingEventCard: FC<UpcomingEvent> = (event) => {
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
                    y: -20,
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
                    x: 0,
                    y: -30,
                },
                variants: {
                    entered: {
                        x: 30,
                        y: -30,
                    },
                },
            },
            desktop: {
                initial: {
                    x: 0,
                    y: -200,
                },
                variants: {
                    entered: {
                        x: 40,
                        y: -200,
                    },
                },
            },
        }
    );

    return <EventCard {...event} {...animationProps} />;
};

export default UpcomingEventCard;
