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
                    primaryImage {
                        fluid(maxWidth: 1240, quality: 95) {
                            ...GatsbyContentfulFluid_withWebp
                        }
                    }
                    secondaryImage {
                        fluid(maxWidth: 1240, quality: 95) {
                            ...GatsbyContentfulFluid_withWebp
                        }
                    }
                    text1 {
                        json
                    }
                    text2 {
                        json
                    }
                    text3 {
                        json
                    }
                    text4 {
                        json
                    }
                }
            }
        }
    `);

    return welcomeBlock.allContentfulBlockWelcome.nodes[0];
};
