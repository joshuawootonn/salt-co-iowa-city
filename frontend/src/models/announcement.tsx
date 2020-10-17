import { Image } from './image';

export interface Announcement {
    image: Image;
    text: string;
    link: string;
}

export interface AnnouncementBlock {
    title: string;
    announcements: Announcement[];
}
