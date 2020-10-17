import { Staff } from './staff';
import { Image } from './image';

export interface MinistryDescription {
    title: string;
    description: string;
    images: Image[];
    link: {
        reference: Staff;
        text: string;
    };
}

export interface MinistryDescriptionBlock {
    title: string;
    ministryDescriptions: MinistryDescription[];
}
