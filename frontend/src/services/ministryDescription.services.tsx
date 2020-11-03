import { graphql, useStaticQuery } from 'gatsby';
import { MinistryDescriptionBlock } from '../models/ministryDescription';

export const useMinistryDescriptionBlock = (): MinistryDescriptionBlock => {
    const raw = useStaticQuery(graphql`
        query blockMinistryDescription {
            allContentfulBlockMinistryDescriptions(limit: 1) {
                nodes {
                    title
                    items {
                        title
                        description {
                            description
                        }
                        link {
                            reference {
                                firstName
                                lastName
                                email
                                position
                                id
                            }
                            text
                        }
                        images {
                            fluid(maxWidth: 1200, quality: 90) {
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
