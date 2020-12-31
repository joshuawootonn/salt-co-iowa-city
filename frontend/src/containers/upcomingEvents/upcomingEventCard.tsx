import React, { FC } from 'react';
import { useAnimationProp } from '../../helpers/animation';
import EventCard from './eventCard';
import { UpcomingEvent } from '../../models/upcomingEvent';

const UpcomingEventCard: FC<UpcomingEvent> = (event) => {
    const animationProps = useAnimationProp(
        {
            variants: {
                entered: {
                    opacity: 1,
                },
                exited: {
                    opacity: 0,
                },
            },

            transition: { type: 'spring', duration: 1, bounce: 0 },
        },
        {
            mobile: {
                variants: {
                    entered: {
                        x: 0,
                        y: -20,
                    },
                    exited: {
                        x: -40,
                        y: 0,
                    },
                },
            },
            tablet: {
                variants: {
                    entered: {
                        x: -30,
                        y: -60,
                    },
                    exited: {
                        x: -60,
                        y: -40,
                    },
                },
            },
            desktop: {
                variants: {
                    entered: {
                        x: 40,
                        y: -200,
                    },
                    exited: {
                        x: 0,
                        y: -180,
                    },
                },
            },
        }
    );

    return <EventCard {...event} {...animationProps} />;
};

export default UpcomingEventCard;
