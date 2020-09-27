import React, { FC } from 'react';
import AnnouncementLink from '../components/announcementLink';
import { css } from 'styled-components';
import { Announcement } from '../services/announcements';
import Bullhorn from '../svgs/bullhorn.svg';

const styles = {
    root: css`
        display: grid;
        column-gap: 20px;
        grid-auto-flow: column;
        margin: 500px auto;
        max-width: 1140px;
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

export interface AnnouncementsBlockProps {
    links: Announcement[];
}

const AnnouncementBlock: FC<AnnouncementsBlockProps> = ({ links }) => (
    <div css={styles.root}>
        <div css={styles.background}>
            <Bullhorn />
        </div>

        {links.map((link, i) => (
            <AnnouncementLink key={i} linkAnnouncement={link} />
        ))}
    </div>
);

export default AnnouncementBlock;
