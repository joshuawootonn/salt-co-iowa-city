import { gql } from '@apollo/client';
import { getApolloClient } from '../../apollo/client';

export interface UpcomingEvent {
    title: string;
    image: {
        url: string;
    };
    startDateTime: string;
    endDateTime: string;
    description: string;
    contact: {
        text: string;
    };
    location: {
        text: string;
        url: string;
    };
}

export interface UpcomingEventBlock {
    title: string;
    events: UpcomingEvent[];
}

export const upcomingEventBlockQuery = gql`
    query blockUpcomingEventsCollection {
        blockUpcomingEventsCollection(limit: 1) {
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
        title: rawBlock.title,
        events: rawBlock.itemsCollection.items,
    };
};
