import { graphql, useStaticQuery } from 'gatsby';

import {
    UpcomingEvent,
    UpcomingEventBlock,
} from '../__stories__/services/upcomingEvent.service';

export const convertQueryToUpcomingEvent = (i: any): UpcomingEvent => ({
    ...i,
    description: i.description.description,
});

export const useUpcomingEventBlock = (): UpcomingEventBlock => {
    const raw = useStaticQuery(graphql`
        query blockUpcomingEvents {
            allContentfulBlockUpcomingEvents(limit: 1) {
                nodes {
                    title
                    items {
                        title
                        image {
                            fluid(maxWidth: 800, quality: 90) {
                                ...GatsbyContentfulFluid_withWebp
                            }
                        }
                        startDateTime
                        endDateTime
                        description {
                            description
                        }
                        contact {
                            text
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
        events: block.items.map(convertQueryToUpcomingEvent),
    };
};
