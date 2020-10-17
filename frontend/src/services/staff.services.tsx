import { graphql, useStaticQuery } from 'gatsby';
import { StaffBlock } from '../__stories__/services/staff.services';

export const useStaffBlock = (): StaffBlock => {
    const raw = useStaticQuery(graphql`
        query blockStaff {
            allContentfulBlockStaff(limit: 1) {
                nodes {
                    title
                    items {
                        firstName
                        lastName
                        email
                        position
                        connectionLinkText
                        about {
                            about
                        }
                        image {
                            fluid(maxWidth: 300, quality: 90) {
                                ...GatsbyContentfulFluid_withWebp
                            }
                        }
                    }
                }
            }
        }
    `);

    const block = raw.allContentfulBlockStaff.nodes[0];

    return {
        ...block,
        staff: block.items.map((i: any) => ({
            ...i,
            about: i.about.about,
        })),
    };
};
