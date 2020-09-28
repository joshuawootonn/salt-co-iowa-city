import { getApolloClient } from '../../apollo/client';
import { gql } from '@apollo/client';

export interface Announcement {
    image: {
        url: string;
    };
    text: string;
    link: string;
}

export interface AnnouncementBlock {
    title: string;
    announcements: Announcement[];
}

const announcements = gql`
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
        query: announcements,
    });

    const block = rawAnnouncements.blockAnnouncementsCollection.items[0];

    return {
        title: block.title,
        announcements: block.linksCollection.items,
    };
};
