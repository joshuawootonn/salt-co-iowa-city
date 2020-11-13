import React, { FC, useState } from 'react';
import { css } from 'styled-components/macro';
import { Announcement } from '../models/announcement';
import Image from './image';
import { motion } from 'framer-motion';

interface AnnouncementLinkProps {
    linkAnnouncement: Announcement;
}

const styles = {
    root: css`
        height: 225px;
        width: 100%;

        position: relative;
    `,
    image: css`
        height: 100%;
        width: 100%;
    `,
    textRoot: (isHovered: boolean) => css`
        background-color: ${({ theme }) => theme.colors.backgroundTransparent};
        padding: 20px;

        border: 2px solid ${({ theme }) => theme.colors.blue.lightest};

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
        color: ${({ theme }) => theme.colors.blue.light};
        font-size: 18px;
        margin: 0;
    `,
};

const AnnouncementLink: FC<AnnouncementLinkProps> = ({ linkAnnouncement }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.a
            href={linkAnnouncement.link}
            css={styles.root}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <Image fluid={linkAnnouncement.image.fluid} css={styles.image} />
            <div css={styles.textRoot(isHovered)}>
                <h1 css={styles.text}>{linkAnnouncement.text}</h1>
            </div>
        </motion.a>
    );
};

export default AnnouncementLink;
