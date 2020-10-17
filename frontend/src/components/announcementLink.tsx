import React, { FC, useState } from 'react';
import { css } from 'styled-components/macro';

import GatsbyImage from 'gatsby-image';
import { Announcement } from '../models/announcement';

interface AnnouncementLinkProps {
    linkAnnouncement: Announcement;
}

const styles = {
    root: css`
        height: 225px;
        width: 367px;

        position: relative;
    `,
    image: css`
        height: 100%;
        width: 100%;
    `,
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
            css={styles.root}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <GatsbyImage
                fluid={linkAnnouncement.image.fluid}
                css={styles.image}
            />
            <div css={styles.textRoot(isHovered)}>
                <h1 css={styles.text}>{linkAnnouncement.text}</h1>
            </div>
        </a>
    );
};

export default AnnouncementLink;
