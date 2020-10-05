import { gql } from '@apollo/client';
import { getApolloClient } from '../../apollo/client';
import { StaffBlock, staffBlockQuery } from './staff.services';

export const MinistryConnectionsBlockQuery = gql`
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
                            sys {
                                id
                            }
                        }
                    }
                }
            }
        }
    }
`;
export const getMinistryConnectionsBlock = async (): Promise<StaffBlock> => {
    const client = getApolloClient({});

    const { data: rawMinistryConnectionResult } = await client.query({
        query: staffBlockQuery,
    });

    const rawStaffBlock =
        rawMinistryConnectionResult.blockMinistryConnectionsCollection.items[0];

    return {
        title: rawStaffBlock.title,
        staff: rawStaffBlock.itemsCollection.items,
    };
};


