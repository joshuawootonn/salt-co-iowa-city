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
                        location {
                            text
                            url
                        }
                        link {
                            reference {
                                __typename
                                ... on Node {
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
                            }
                            text
                        }
                        images {
                            fluid(maxWidth: 1140, quality: 95) {
                                ...GatsbyContentfulFluid_withWebp
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
