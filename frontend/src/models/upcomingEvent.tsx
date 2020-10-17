import { FluidObject } from 'gatsby-image';

export interface UpcomingEvent {
    title: string;
    image: {
        fluid: FluidObject;
    };
    startDateTime: string;
    endDateTime: string;
    description: string;
    contact: {
        text: string;
    };
    location: {
        text: string;
        url: string;
    };
}

export interface UpcomingEventBlock {
    title: string;
    events: UpcomingEvent[];
}
