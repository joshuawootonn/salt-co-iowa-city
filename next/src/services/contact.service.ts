import { gql } from '@apollo/client';
import { getApolloClient } from '../../apollo/client';
import { Staff } from './staff.services';

export interface ContactBlock {
    title: string;
    description: string;
    contacts: Staff[];
}

export const contactBlockQuery = gql`
    query blockContact {
        blockContactCollection(limit: 1) {
            items {
                title
                description
                contactsCollection {
                    items {
                        firstName
                        lastName
                        email
                        position
                    }
                }
            }
        }
    }
`;

export const getContactBlock = async (): Promise<ContactBlock> => {
    const client = getApolloClient({});

    const { data: rawResult } = await client.query({
        query: contactBlockQuery,
    });

    const rawBlock = rawResult.blockContactCollection.items[0];

    return {
        title: rawBlock.title,
        description: rawBlock.description,
        contacts: rawBlock.contactsCollection.items,
    };
};
