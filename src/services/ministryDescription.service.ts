import { gql } from '@apollo/client';

export const connectionGroupBlockQuery = gql`
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
