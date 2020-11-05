import { graphql, useStaticQuery } from 'gatsby';
import { AnnouncementBlock } from '../models/announcement';

export const useAnnouncementBlock = (): AnnouncementBlock => {
    const raw = useStaticQuery(graphql`
        query blockAnnouncement {
            allContentfulBlockAnnouncements(
                limit: 1
                sort: { fields: createdAt, order: ASC }
            ) {
                nodes {
                    title
                    links {
                        text
                        link
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

    const block = raw.allContentfulBlockAnnouncements.nodes[0];
    return {
        ...block,
        announcements: block.links,
    };
};
