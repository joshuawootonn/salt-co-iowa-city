import { AnnouncementBlock } from '../../models/announcement';
import AnnouncementLink from '../../components/announcementLink';
import Bullhorn from '../../svgs/bullhorn.svg';
import React, { FC } from 'react';
import layout from '../../components/layout';
import typography from '../../components/typography';
import { css } from 'styled-components/macro';

const styles = {
    root: css`
        ${layout.container};
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
        transform: translate(-50%, -55%);
        width: 2420px;
        height: auto;
        overflow: hidden;
    `,
};

const AnnouncementContainer: FC<AnnouncementBlock> = ({
    title,
    announcements,
    ...props
}) => (
    <div css={styles.root} {...props}>
        <h2 css={styles.title}>{title}</h2>
        <div css={styles.announcements}>
            <Bullhorn css={styles.background} />

            {announcements.map((link: any, i: number) => (
                <AnnouncementLink key={i} linkAnnouncement={link} />
            ))}
        </div>
    </div>
);

export default AnnouncementContainer;
