import { graphql, useStaticQuery } from 'gatsby';
import { ExternalLink, FooterBlock, SocialMediaLink } from '../models/footer';

export const externalLinksRawTransform = (link: {
    text: string;
    url: string;
}): ExternalLink => ({
    label: link.text,
    href: link.url,
});

export const socialMediaLinksRawTransform = (link: {
    type: string;
    url: string;
}): SocialMediaLink => ({
    type: link.type,
    href: link.url,
});

export const useFooterBlock = (): FooterBlock => {
    const raw = useStaticQuery(graphql`
        query blockFooter {
            allContentfulBlockAnnouncements(
                sort: { fields: createdAt, order: ASC }
                limit: 1
            ) {
                nodes {
                    title
                }
            }
            allContentfulBlockMinistryDescriptions(
                sort: { fields: createdAt, order: ASC }
                limit: 1
            ) {
                nodes {
                    items {
                        title
                    }
                }
            }
            allContentfulBlockStaff(
                sort: { fields: createdAt, order: ASC }
                limit: 1
            ) {
                nodes {
                    title
                    __typename
                }
            }
            allContentfulBlockUpcomingEvents(
                sort: { fields: createdAt, order: ASC }
                limit: 1
            ) {
                nodes {
                    title
                }
            }
            allContentfulBlockConnectionGroups(
                sort: { fields: createdAt, order: ASC }
                limit: 1
            ) {
                nodes {
                    title
                }
            }
            allContentfulBlockMinistryConnections(
                sort: { fields: createdAt, order: ASC }
                limit: 1
            ) {
                nodes {
                    items {
                        title
                        acronym
                    }
                }
            }
            allContentfulBlockFooter(
                limit: 1
                sort: { fields: createdAt, order: ASC }
            ) {
                nodes {
                    externalLinks {
                        text
                        url
                    }
                    socialMediaLinks {
                        url
                        type
                    }
                }
            }
        }
    `);

    return {
        whoWeAreLinks: [
            ...raw.allContentfulBlockMinistryDescriptions.nodes[0].items.map(
                (i: any) => i.title
            ),
            raw.allContentfulBlockStaff.nodes[0].title,
        ],
        howToConnectLinks: [
            raw.allContentfulBlockUpcomingEvents.nodes[0].title,
            raw.allContentfulBlockConnectionGroups.nodes[0].title,
            ...raw.allContentfulBlockMinistryConnections.nodes[0].items.map(
                (i: any) => (i.acronym ? i.acronym : i.title)
            ),
        ],
        externalLinks: raw.allContentfulBlockFooter.nodes[0].externalLinks.map(
            externalLinksRawTransform
        ),
        socialMediaLinks: raw.allContentfulBlockFooter.nodes[0].socialMediaLinks.map(
            socialMediaLinksRawTransform
        ),
    };
};
