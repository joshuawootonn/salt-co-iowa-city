import { gql } from '@apollo/client';
import { Image, mapUrlToFluid } from './welcome.services';
import { getApolloClient } from './client';

export interface Announcement {
    image: Image;
    text: string;
    link: string;
}

export interface AnnouncementBlock {
    title: string;
    announcements: Announcement[];
}

export const announcementBlockQuery = gql`
    query blockAnnouncement {
        blockAnnouncementsCollection(limit: 1) {
            items {
                title
                linksCollection(limit: 3) {
                    items {
                        image {
                            url
                        }
                        text
                        link
                    }
                }
            }
        }
    }
`;

export const getAnnouncementBlock = async (): Promise<AnnouncementBlock> => {
    const client = getApolloClient({});

    const { data: rawAnnouncements } = await client.query({
        query: announcementBlockQuery,
    });

    const block = rawAnnouncements.blockAnnouncementsCollection.items[0];
    return {
        title: block.title,
        announcements: block.linksCollection.items.map((i: any) => ({
            ...i,
            image: mapUrlToFluid(i.image),
        })),
    };
};
