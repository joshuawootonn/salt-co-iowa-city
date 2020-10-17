import { gql } from '@apollo/client';
import { getApolloClient } from './client';
import {
    MinistryConnection,
    MinistryConnectionBlock,
} from '../../models/ministryConnection';
import { imageRawTransform } from '../../models/image';

// TODO: link language here is kinda generic.. maybe rethink this?
export const ministryConnectionsBlockQuery = gql`
    query blockMinistryConnectionsCollection {
        blockMinistryConnectionsCollection(limit: 1, preview: true) {
            items {
                itemsCollection {
                    items {
                        title
                        acronym
                        description
                        imagesCollection {
                            items {
                                url
                            }
                        }
                        link {
                            text
                        }
                        backgroundImage
                        nextEvent {
                            title
                            image {
                                url
                            }
                            location {
                                text
                                url
                            }
                            contact {
                                text
                            }
                            startDateTime
                            endDateTime
                        }
                    }
                }
            }
        }
    }
`;
export const getMinistryConnectionsBlock = async (): Promise<
    MinistryConnectionBlock
> => {
    const client = getApolloClient({});

    const { data: rawMinistryConnectionResult } = await client.query({
        query: ministryConnectionsBlockQuery,
    });

    const rawBlock =
        rawMinistryConnectionResult.blockMinistryConnectionsCollection.items[0];

    return {
        ministryConnections: rawBlock.itemsCollection.items.map(
            (i: any): MinistryConnection => ({
                ...i,
                images: i.imagesCollection.items.map(imageRawTransform),
                nextEvent: {
                    ...i.nextEvent,
                    image: imageRawTransform(i.nextEvent.image),
                },
            })
        ),
    };
};
