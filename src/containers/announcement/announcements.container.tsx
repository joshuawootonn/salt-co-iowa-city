import React, { FC } from 'react';
import AnnouncementLink from '../../components/announcementLink';
import { css } from 'styled-components';
import { AnnouncementBlock } from '../../services/announcements';
import Bullhorn from '../../svgs/bullhorn.svg';
import typography from '../../components/typography';

const styles = {
    root: css`
        margin: 500px auto;
        max-width: 1140px;
        position: relative;
    `,

    title: css`
        ${typography.title2};
        margin-bottom: 60px;
    `,

    announcements: css`
        display: grid;
        column-gap: 20px;
        grid-auto-flow: column;
        position: relative;
    `,

    background: css`
        position: absolute;
        z-index: -1;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        max-width: 100vw;
        overflow: hidden;
    `,
};

const AnnouncementContainer: FC<{ block: AnnouncementBlock }> = ({
    block: { title, announcements },
}) => (
    <div css={styles.root}>
        <h2 css={styles.title}>{title}</h2>
        <div css={styles.announcements}>
            <div css={styles.background}>
                <Bullhorn />
            </div>
            {announcements.map((link, i) => (
                <AnnouncementLink key={i} linkAnnouncement={link} />
            ))}
        </div>
    </div>
);

export default AnnouncementContainer;
