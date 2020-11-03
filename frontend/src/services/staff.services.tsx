import { graphql, useStaticQuery } from 'gatsby';
import { Staff, StaffBlock } from '../models/staff';

export const staffGatsbyTransform = (i: any): Staff => ({
    ...i,
    about: i.about.about,
});

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
                        id
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
        staff: block.items.map(staffGatsbyTransform),
    };
};
