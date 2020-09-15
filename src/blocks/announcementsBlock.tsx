import React from 'react';
import { gql, useQuery } from '@apollo/client';
import AnnouncementLink, {
    LinkAnnouncement,
} from '../components/announcementLink';
import { css } from 'styled-components';
import Bullhorn from '../components/bullhornSVG';

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

const styles = {
    root: css`
        display: grid;
        column-gap: 20px;
        grid-auto-flow: column;
        position: relative;
    `,
    background: css`
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        max-width: 100vw;
        overflow: hidden;
    `,
};

const AnnouncementBlock = () => {
    const { data, loading, error } = useQuery(query);

    if (loading) return <div>...loading</div>;

    const links: LinkAnnouncement[] =
        data.blockAnnouncementsCollection.items[0].linksCollection.items;

    return (
        <div css={styles.root}>
            <div css={styles.background}>
                <Bullhorn />
            </div>

            {links.map((link, i) => (
                <AnnouncementLink key={i} linkAnnouncement={link} />
            ))}
        </div>
    );
};

export default AnnouncementBlock;
