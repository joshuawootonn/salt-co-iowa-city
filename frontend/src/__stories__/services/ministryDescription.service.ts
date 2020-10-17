import { gql } from '@apollo/client';
import { getApolloClient } from './client';
import {
    MinistryDescription,
    MinistryDescriptionBlock,
} from '../../models/ministryDescription';
import { imageRawTransform } from '../../models/image';

// TODO: link language here is kinda generic.. maybe rethink this?
export const ministryDescriptionsBlockQuery = gql`
    query blockMinistryDescriptionsCollection {
        blockMinistryDescriptionsCollection(limit: 1) {
            items {
                title
                itemsCollection {
                    items {
                        title
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
export const getMinistryDescriptionBlock = async (): Promise<
    MinistryDescriptionBlock
> => {
    const client = getApolloClient({});

    const { data: rawMinistryDescriptionsResult } = await client.query({
        query: ministryDescriptionsBlockQuery,
    });

    const rawBlock =
        rawMinistryDescriptionsResult.blockMinistryDescriptionsCollection
            .items[0];

    return {
        title: rawBlock.title,
        ministryDescriptions: rawBlock.itemsCollection.items.map(
            (i: any): MinistryDescription => ({
                ...i,
                images: i.imagesCollection.items.map(imageRawTransform),
            })
        ),
    };
};
