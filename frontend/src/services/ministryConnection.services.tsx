import { graphql, useStaticQuery } from 'gatsby';
import { upcomingEventGatsbyTransform } from './upcomingEvent.services';
import { MinistryConnectionBlock } from '../models/ministryConnection';

export const useMinistryConnectionBlock = (): MinistryConnectionBlock => {
    const raw = useStaticQuery(graphql`
        query blockMinistryConnections {
            allContentfulBlockMinistryConnections(limit: 1) {
                nodes {
                    items {
                        title
                        acronym
                        description {
                            description
                        }
                        images {
                            fluid(maxWidth: 800, quality: 90) {
                                ...GatsbyContentfulFluid_withWebp
                            }
                        }
                        backgroundImage
                        nextEvent {
                            title
                            image {
                                fluid(maxWidth: 800, quality: 90) {
                                    ...GatsbyContentfulFluid_withWebp
                                }
                            }
                            location {
                                text
                                url
                            }
                            contact {
                                text
                            }
                            description {
                                description
                            }
                            startDateTime
                            endDateTime
                        }
                        link {
                            reference {
                                firstName
                                lastName
                                email
                                position
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