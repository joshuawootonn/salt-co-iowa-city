import { graphql, useStaticQuery } from 'gatsby';
import { WelcomeBlock } from '../models/welcome';

export const useWelcomeBlock = (): WelcomeBlock => {
    const welcomeBlock = useStaticQuery(graphql`
        query blockWelcome {
            allContentfulBlockWelcome(
                limit: 1
                sort: { fields: createdAt, order: ASC }
            ) {
                nodes {
                    title
                    introWhoWeAre
                    introGetConnected
                    images {
                        fluid(maxWidth: 500, quality: 90) {
                            ...GatsbyContentfulFluid_withWebp
                        }
                    }
                }
            }
        }
    `);

    return welcomeBlock.allContentfulBlockWelcome.nodes[0];
};
