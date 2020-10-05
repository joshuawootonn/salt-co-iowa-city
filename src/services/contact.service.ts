import { gql } from '@apollo/client';

export const ContactBlockQuery = gql`
    query blockContact {
        blockContactCollection(limit: 1) {
            items {
                title
                desciption
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
