import { gql } from '@apollo/client';
import { Announcement, AnnouncementBlock } from '../../models/announcement';
import { imageRawTransform } from '../../models/image';
import { getApolloClient } from './client';

export const announcementBlockQuery = gql`
    query blockAnnouncement {
        blockAnnouncementsCollection(limit: 1, preview: true) {
            items {
                title
                linksCollection {
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

export const announcementRawTransform = (raw: any): Announcement => ({
    ...raw,
    image: imageRawTransform(raw.image),
});

export const announcementBlockRawTransform = (raw: any): AnnouncementBlock => {
    const block = raw.blockAnnouncementsCollection.items[0];
    return {
        title: block.title,
        announcements: block.linksCollection.items.map(
            announcementRawTransform
        ),
    };
};

export const getAnnouncementBlock = async (): Promise<AnnouncementBlock> => {
    const client = getApolloClient({});

    const { data } = await client.query({
        query: announcementBlockQuery,
    });

    return announcementBlockRawTransform(data);
};
