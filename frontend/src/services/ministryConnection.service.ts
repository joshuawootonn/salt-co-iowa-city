import { gql } from '@apollo/client';
import { getApolloClient } from '../../apollo/client';
import { MinistryDescription } from './ministryDescription.service';
import { Image } from './welcome.services';

export interface MinistryConnection {
    title: string;
    acronym?: string;
    description: string;
    images: Image[];
    backgroundImage: 'World' | 'Flag';
    link: {
        text: string;
    };
}

export interface MinistryConnectionBlock {
    ministryConnections: MinistryConnection[];
}

// TODO: link language here is kinda generic.. maybe rethink this?
export const ministryConnectionsBlockQuery = gql`
    query blockMinistryConnectionsCollection {
        blockMinistryConnectionsCollection(limit: 1) {
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
            (i: any): MinistryDescription => ({
                ...i,
                images: i.imagesCollection.items,
            })
        ),
    };
};
