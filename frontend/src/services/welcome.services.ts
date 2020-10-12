import { getApolloClient } from '../../apollo/client';
import { gql } from '@apollo/client';
import { findImagesAndConvert, ImageFile } from '../helpers/imageOptimization';

export interface Image {
    url: ImageFile;
}

export interface WelcomeBlock {
    title: string;
    introWhoWeAre: string;
    introGetConnected: string;
    images: Image[];
}

export const getWelcomeQuery = (isPreview = false) => gql`
    query blockWelcome {
        blockWelcomeCollection(limit: 1, preview: ${isPreview}) {
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
        query: getWelcomeQuery(isPreview),
    });

    const block = rawWelcome.blockWelcomeCollection.items[0];

    const formattedBlock = {
        title: block.title,
        introWhoWeAre: block.introWhoWeAre,
        introGetConnected: block.introGetConnected,
        images: block.imagesCollection.items,
    };
    return findImagesAndConvert(formattedBlock);
};
