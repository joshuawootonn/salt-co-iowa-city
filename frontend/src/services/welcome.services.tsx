import { WelcomeBlock } from '../__stories__/services/welcome.services';
import { graphql, useStaticQuery } from 'gatsby';

export const useWelcomeBlock = (): WelcomeBlock => {
    const welcomeBlock = useStaticQuery(graphql`
        query blockWelcome {
            allContentfulBlockWelcome(limit: 1) {
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
