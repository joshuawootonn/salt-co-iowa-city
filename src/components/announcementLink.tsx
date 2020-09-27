import React, { FC, useState } from 'react';
import { css } from 'styled-components';
import { Announcement } from '../services/announcements';

interface AnnouncementLinkProps {
    linkAnnouncement: Announcement;
}

const styles = {
    root: (backgroundUrl: string) => {
        return css`
            background-image: url('${backgroundUrl}');
            background-position: center;
            background-size: cover;
            height: 225px;
            width: 367px;

            position: relative;
        `;
    },
    textRoot: (isHovered: boolean) => css`
        background-color: rgba(29, 29, 27, 0.8);
        padding: 20px;

        border: 2px solid ${({ theme }) => theme.colors.purple.lightest};

        position: absolute;
        top: -25px;
        left: -25px;

        transition: all 300ms ease-in-out;

        transform: translateX(0px);

        ${isHovered &&
        css`
            transform: translateX(10px);
        `}
    `,
    text: css`
        color: ${({ theme }) => theme.colors.purple.light};
        font-size: 18px;
        margin: 0;
    `,
};

const AnnouncementLink: FC<AnnouncementLinkProps> = ({ linkAnnouncement }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <a
            href={linkAnnouncement.link}
            css={styles.root(linkAnnouncement.image.url)}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div css={styles.textRoot(isHovered)}>
                <h1 css={styles.text}>{linkAnnouncement.text}</h1>
            </div>
        </a>
    );
};

export default AnnouncementLink;
