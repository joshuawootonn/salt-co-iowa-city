import { AnnouncementBlock } from '../../models/announcement';
import AnnouncementLink from '../../components/announcementLink';
import Bullhorn from '../../svgs/bullhorn.svg';
import React, { FC } from 'react';
import layout from '../../components/layout';
import { css } from 'styled-components/macro';
import Title from '../../components/title';

const styles = {
    root: css`
        ${layout.container};
    `,

    title: css`
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
        <Title variant="small" css={styles.title}>
            {title}
        </Title>
        <div css={styles.announcements}>
            <Bullhorn css={styles.background} />

            {announcements.map((link: any, i: number) => (
                <AnnouncementLink key={i} linkAnnouncement={link} />
            ))}
        </div>
    </div>
);

export default AnnouncementContainer;
