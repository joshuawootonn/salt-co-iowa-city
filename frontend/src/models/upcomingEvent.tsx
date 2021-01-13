import { FluidObject } from 'gatsby-image';
import { ConnectionGroupBlock } from './connectionGroup';
import { Staff } from './staff';

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
        reference: Staff | ConnectionGroupBlock;
    };
    location: {
        text: string;
        url: string;
    };
}

export interface UpcomingEventBlock {
    title: string;
    visible: boolean;
    events: UpcomingEvent[];
}
