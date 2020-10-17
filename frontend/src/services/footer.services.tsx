import { graphql, useStaticQuery } from 'gatsby';
import { ExternalLink, FooterBlock } from '../models/footer';

export const externalLinksRawTransform = (link: {
    text: string;
    url: string;
}): ExternalLink => ({
    label: link.text,
    href: link.url,
});

export const useFooterBlock = (): FooterBlock => {
    const raw = useStaticQuery(graphql`
        query blockFooter {
            allContentfulBlockFooter(limit: 1) {
                nodes {
                    externalLinks {
                        text
                        url
                    }
                }
            }
        }
    `);

    return {
        externalLinks: raw.allContentfulBlockFooter.nodes[0].externalLinks.map(
            externalLinksRawTransform
        ),
    };
};
