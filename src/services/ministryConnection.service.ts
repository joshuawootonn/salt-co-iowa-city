import { gql } from '@apollo/client';

export const ministryConnectionBlockQuery = gql`
    query blockConnectionGroup {
        blockConnectionGroupsCollection(limit: 1) {
            items {
                title
                desciption
                itemsCollection {
                    items {
                        leaders
                        description
                        gender
                        dateTime
                    }
                }
            }
        }
    }
`;
