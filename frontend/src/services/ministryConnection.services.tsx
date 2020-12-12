import { graphql, useStaticQuery } from 'gatsby';
import { upcomingEventGatsbyTransform } from './upcomingEvent.services';
import { MinistryConnectionBlock } from '../models/ministryConnection';

export const useMinistryConnectionBlock = (): MinistryConnectionBlock => {
    const raw = useStaticQuery(graphql`
        query blockMinistryConnections {
            allContentfulBlockMinistryConnections(
                limit: 1
                sort: { fields: createdAt, order: ASC }
            ) {
                nodes {
                    items {
                        title
                        acronym
                        description {
                            description
                        }
                        images {
                            fluid(maxWidth: 800, quality: 100) {
                                ...GatsbyContentfulFluid_withWebp_noBase64
                            }
                        }
                        backgroundImage
                        nextEvent {
                            title
                            image {
                                fluid(maxWidth: 800, quality: 100) {
                                    ...GatsbyContentfulFluid_withWebp_noBase64
                                }
                            }
                            location {
                                text
                                url
                            }
                            contact {
                                text
                                reference {
                                    __typename
                                    ... on ContentfulBlockConnectionGroups {
                                        id
                                        title
                                    }
                                    ... on ContentfulStaff {
                                        firstName
                                        lastName
                                        email
                                        position
                                        id
                                    }
                                }
                            }
                            description {
                                description
                            }
                            startDateTime
                            endDateTime
                        }
                        link {
                            reference {
                                __typename
                                ... on ContentfulBlockConnectionGroups {
                                    id
                                    title
                                }
                                ... on ContentfulStaff {
                                    firstName
                                    lastName
                                    email
                                    position
                                    id
                                }
                            }
                            text
                            event {
                                title
                            }
                        }
                    }
                }
            }
        }
    `);

    const block = raw.allContentfulBlockMinistryConnections.nodes[0];

    return {
        ministryConnections: block.items.map((i: any) => {
            return {
                ...i,
                description: i.description.description,
                nextEvent: upcomingEventGatsbyTransform(i.nextEvent),
            };
        }),
    };
};
