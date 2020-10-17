import { graphql, useStaticQuery } from 'gatsby';
import { ContactBlock } from '../__stories__/services/contact.service';

export const useContactBlock = (): ContactBlock => {
    const raw = useStaticQuery(graphql`
        query blockContact {
            allContentfulBlockContact(limit: 1) {
                nodes {
                    title
                    description
                    contacts {
                        firstName
                        lastName
                        email
                        position
                    }
                }
            }
        }
    `);

    const block = raw.allContentfulBlockContact.nodes[0];
    return {
        ...block,
    };
};
