import { getApolloClient } from '../../apollo/client';
import { gql } from '@apollo/client';

export interface Announcement {
    image: {
        url: string;
    };
    text: string;
    link: string;
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

export const getAnnouncements = async (): Promise<Announcement> => {
    const client = getApolloClient({});

    const { data: rawAnnouncements } = await client.query({
        query: announcements,
    });

    console.log(rawAnnouncements);

    // @ts-ignore
    return rawAnnouncements.blockAnnouncementsCollection.items[0]
        .linksCollection.items;
};
