import { graphql, useStaticQuery } from 'gatsby';
import { WhoWeAreBlock } from '../models/whoWeAre';

export const useWhoWeAreBlock = (): WhoWeAreBlock => {
    const raw = useStaticQuery(graphql`
        query blockWhoWeAre {
            allContentfulBlockWhoWeAre(
                limit: 1
                sort: { fields: createdAt, order: ASC }
            ) {
                nodes {
                    title
                    body {
                        body
                    }
                }
            }
        }
    `);

    const block = raw.allContentfulBlockWhoWeAre.nodes[0];

    return {
        title: block.title,
        body: block.body.body,
    };
};
