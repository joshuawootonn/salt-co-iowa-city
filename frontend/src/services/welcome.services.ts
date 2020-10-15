import { gql } from '@apollo/client';
import { getApolloClient } from './client';

export interface Image {
    url: string;
}

export interface WelcomeBlock {
    title: string;
    introWhoWeAre: string;
    introGetConnected: string;
    images: Image[];
}

export const getWelcomeQuery = gql`
    query blockWelcome {
        blockWelcomeCollection(limit: 1, preview: true) {
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

export const getWelcomeBlock = async (
    isPreview = false
): Promise<WelcomeBlock> => {
    const client = getApolloClient({}, isPreview);

    const { data: rawWelcome } = await client.query({
        query: getWelcomeQuery,
    });
    console.log(rawWelcome);

    const block = rawWelcome.blockWelcomeCollection.items[0];

    return {
        title: block.title,
        introWhoWeAre: block.introWhoWeAre,
        introGetConnected: block.introGetConnected,
        images: block.imagesCollection.items.map((i) => ({
            fluid: { src: i.url },
        })),
    };
};
