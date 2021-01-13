import { graphql, useStaticQuery } from 'gatsby';
import { UpcomingEvent, UpcomingEventBlock } from '../models/upcomingEvent';

export const upcomingEventGatsbyTransform = (i: any): UpcomingEvent => ({
    ...i,
    description: i.description.description,
});

export const useUpcomingEventBlock = (): UpcomingEventBlock => {
    const raw = useStaticQuery(graphql`
        query blockUpcomingEvents {
            allContentfulBlockUpcomingEvents(
                limit: 1
                sort: { fields: createdAt, order: ASC }
            ) {
                nodes {
                    title
                    visible
                    items {
                        title
                        image {
                            fluid(maxWidth: 900, quality: 95) {
                                ...GatsbyContentfulFluid_withWebp_noBase64
                            }
                        }
                        startDateTime
                        endDateTime
                        description {
                            description
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
                        location {
                            text
                            url
                        }
                    }
                }
            }
        }
    `);

    const block = raw.allContentfulBlockUpcomingEvents.nodes[0];

    return {
        ...block,
        events: block.items.map(upcomingEventGatsbyTransform),
    };
};
