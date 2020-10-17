import { gql } from '@apollo/client';
import { getApolloClient } from './client';
import { ExternalLink, FooterBlock } from '../../models/footer';

export const footerBlockQuery = gql`
    query blockFooter {
        blockFooterCollection(limit: 1) {
            items {
                externalLinksCollection {
                    items {
                        text
                        url
                    }
                }
            }
        }
    }
`;

export const getFooterBlock = async (): Promise<FooterBlock> => {
    const client = getApolloClient({});

    const { data } = await client.query({
        query: footerBlockQuery,
    });

    return {
        externalLinks: data.blockFooterCollection.items[0].externalLinksCollection.items.map(
            (link: { text: string; url: string }): ExternalLink => ({
                label: link.text,
                href: link.url,
            })
        ),
    };
};
