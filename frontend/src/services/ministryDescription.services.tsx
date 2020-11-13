import { graphql, useStaticQuery } from 'gatsby';
import { MinistryDescriptionBlock } from '../models/ministryDescription';

export const useMinistryDescriptionBlock = (): MinistryDescriptionBlock => {
    const raw = useStaticQuery(graphql`
        query blockMinistryDescription {
            allContentfulBlockMinistryDescriptions(
                limit: 1
                sort: { fields: createdAt, order: ASC }
            ) {
                nodes {
                    title
                    items {
                        title
                        description {
                            description
                        }
                        link {
                            reference {
                                __typename
                                ... on ContentfulBlockConnectionGroups {
                                    id
                                    title
                                }
                                ... on ContentfulStaff {
                                    firstName
                                    lastName
                                    email
                                    position
                                    id
                                }
                            }
                            text
                        }
                        images {
                            fluid(maxWidth: 1200, quality: 100) {
                                ...GatsbyContentfulFluid_withWebp_noBase64
                            }
                        }
                    }
                }
            }
        }
    `);

    const block = raw.allContentfulBlockMinistryDescriptions.nodes[0];

    return {
        ...block,

        ministryDescriptions: block.items.map((i: any) => ({
            ...i,
            description: i.description.description,
        })),
    };
};
