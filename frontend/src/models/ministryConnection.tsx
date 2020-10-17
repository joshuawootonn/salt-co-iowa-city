import { Image } from './image';
import { Staff } from './staff';
import { UpcomingEvent } from './upcomingEvent';

export interface MinistryConnection {
    title: string;
    acronym?: string;
    description: string;
    images: Image[];
    backgroundImage: 'World' | 'Flag';
    link: {
        reference: Staff;
        text: string;
    };
    nextEvent: UpcomingEvent;
}

export interface MinistryConnectionBlock {
    ministryConnections: MinistryConnection[];
}
