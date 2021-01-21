import { Image } from './image';

export interface Staff {
    firstName: string;
    lastName: string;
    position: string;
    email: string;
    about?: string;
    id: string;
    connectionLinkText: string;
    image: Image;
    __typename: 'ContentfulStaff';
}

export interface StaffBlock {
    title: string;
    staff: Staff[];
}
