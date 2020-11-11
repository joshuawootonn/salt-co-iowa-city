import { gql } from '@apollo/client';
import { getApolloClient } from './client';
import { UpcomingEventBlock } from '../../models/upcomingEvent';
import { imageRawTransform } from '../../models/image';

export const upcomingEventBlockQuery = gql`
    query blockUpcomingEventsCollection {
        blockUpcomingEventsCollection(limit: 1, preview: true) {
            items {
                title
                itemsCollection {
                    items {
                        title
                        image {
                            url
                        }
                        startDateTime
                        endDateTime
                        description
                        contact {
                            text
                        }
                        location {
                            text
                            url
                        }
                    }
                }
            }
        }
    }
`;

export const getUpcomingEventsBlock = async (): Promise<UpcomingEventBlock> => {
    const client = getApolloClient({});

    const { data: rawQueryResult } = await client.query({
        query: upcomingEventBlockQuery,
    });

    const rawBlock = rawQueryResult.blockUpcomingEventsCollection.items[0];

    return {
        root: rawBlock.title,
        events: rawBlock.itemsCollection.items.map((i: any) => ({
            ...i,
            image: imageRawTransform(i.image),
        })),
    };
};
