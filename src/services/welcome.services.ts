import { getApolloClient } from '../../apollo/client';
import { gql } from '@apollo/client';

export interface Image {
    url: string;
}

export interface WelcomeBlock {
    title: string;
    introWhoWeAre: string;
    introGetConnected: string;
    images: Image[];
}

const welcome = gql`
    query blockWelcome {
        blockWelcomeCollection(limit: 1) {
            items {
                title
                introWhoWeAre
                introGetConnected
                imagesCollection {
                    items {
                        url
                    }
                }
            }
        }
    }
`;

export const getWelcomeBlock = async (): Promise<WelcomeBlock> => {
    const client = getApolloClient({});

    const { data: rawWelcome } = await client.query({
        query: welcome,
    });

    const block = rawWelcome.blockWelcomeCollection.items[0];

    return {
        title: block.title,
        introWhoWeAre: block.introWhoWeAre,
        introGetConnected: block.introGetConnected,
        images: block.imagesCollection.items,
    };
};
