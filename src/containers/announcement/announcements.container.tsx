import React, { FC } from 'react';
import AnnouncementLink from '../../components/announcementLink';
import { css } from 'styled-components';

import Bullhorn from '../../svgs/bullhorn.svg';
import typography from '../../components/typography';
import { any } from '../../services/announcements.services';
import layout from '../../components/layout';

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

const AnnouncementContainer: FC<any> = ({
    title,
    announcements,
    ...props
}) => (
    <div css={styles.root} {...props}>
        <h2 css={styles.title}>{title}</h2>
        <div css={styles.announcements}>
            <Bullhorn css={styles.background} />

            {announcements.map((link, i) => (
                <AnnouncementLink key={i} linkAnnouncement={link} />
            ))}
        </div>
    </div>
);

export default AnnouncementContainer;
