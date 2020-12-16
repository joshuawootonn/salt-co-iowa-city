import { gql } from '@apollo/client';
import { getApolloClient } from './client';
import { ContactBlock } from '../../models/contact';

export const contactBlockQuery = gql`
    query blockContact {
        blockContactCollection(limit: 1, preview: true) {
            items {
                title
                confirmationTitle
                errorTitle
                contactsCollection {
                    items {
                        firstName
                        lastName
                        email
                        position
                        __typename
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
        confirmationTitle: rawBlock.confirmationTitle,
        errorTitle: rawBlock.errorTitle,
        contacts: rawBlock.contactsCollection.items,
    };
};
