import { graphql, useStaticQuery } from 'gatsby';
import { ContactBlock } from '../models/contact';
import { staffGatsbyTransform } from './staff.services';

export const useContactBlock = (): ContactBlock => {
    const raw = useStaticQuery(graphql`
        query blockContact {
            allContentfulBlockContact(limit: 1) {
                nodes {
                    title
                    confirmationTitle
                    errorTitle
                    contacts {
                        firstName
                        lastName
                        email
                        position
                        id
                        about {
                            about
                        }
                    }
                }
            }
        }
    `);

    const block = raw.allContentfulBlockContact.nodes[0];
    return {
        ...block,
        contacts: block.contacts.map(staffGatsbyTransform),
    };
};
