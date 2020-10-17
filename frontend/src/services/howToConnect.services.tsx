import { graphql, useStaticQuery } from 'gatsby';
import { HowToConnectBlock } from '../__stories__/services/howToConnect.services';

export const useHowToConnectBlock = (): HowToConnectBlock => {
    const raw = useStaticQuery(graphql`
        query blockHowToConnect {
            allContentfulBlockHowToConnect(limit: 1) {
                nodes {
                    title
                    body {
                        body
                    }
                }
            }
        }
    `);

    const block = raw.allContentfulBlockHowToConnect.nodes[0];

    return {
        ...block,
        body: block.body.body,
    };
};
