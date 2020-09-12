import React from 'react';
import { gql, useQuery } from '@apollo/client';
import AnnouncementLink, {
    LinkAnnouncement,
} from '../components/announcementLink';

const query = gql`
    query blockAnnouncement {
        blockAnnouncementsCollection(limit: 1) {
            items {
                title
                linksCollection(limit: 3) {
                    items {
                        image {
                            url
                        }
                        text
                        link
                    }
                }
            }
        }
    }
`;

const AnnouncementBlock = () => {
    const { data, loading, error } = useQuery(query);

    if (loading) return <div>...loading</div>;

    const links: LinkAnnouncement[] =
        data.blockAnnouncementsCollection.items[0].linksCollection.items;

    return (
        <div>
            {links.map((link, i) => (
                <AnnouncementLink key={i} linkAnnouncement={link} />
            ))}
        </div>
    );
};

export default AnnouncementBlock;
