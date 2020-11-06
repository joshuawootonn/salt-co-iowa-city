import { Staff } from './staff';
import { Image } from './image';
import { ConnectionGroupBlock } from './connectionGroup';

export interface MinistryDescription {
    title: string;
    description: string;
    images: Image[];
    link: {
        reference: Staff | ConnectionGroupBlock;
        text: string;
    };
}

export interface MinistryDescriptionBlock {
    title: string;
    ministryDescriptions: MinistryDescription[];
}
