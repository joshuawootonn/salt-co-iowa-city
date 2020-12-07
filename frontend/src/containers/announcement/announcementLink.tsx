import React, { FC, useState } from 'react';
import { css } from 'styled-components/macro';
import { Announcement } from '../../models/announcement';
import { motion } from 'framer-motion';
import typography from '../../components/typography';
import { queryShit } from '../../components/useScreenType';
import { useFontLoader } from '../../context/fontLoader';
import ImageController from '../../components/image';

interface AnnouncementLinkProps {
    linkAnnouncement: Announcement;
}

const styles = {
    root: css`
        ${queryShit({
            mobile: css`
                width: 100%;
            `,
            tablet: css`
                width: 100%;
            `,
            desktop: css`
                height: 225px;
                width: 367px;
            `,
        })};
        position: relative;
    `,
    textRoot: (isVisible: boolean) => css`
        background-color: ${({ theme }) => theme.colors.backgroundTransparent};
        padding: 20px;

        border: 2px solid ${({ theme }) => theme.colors.purple.lightest};

        position: absolute;
        z-index: 10;
        top: 0;
        left: 0;
        transition: all 200ms ease-in-out;

        ${isVisible
            ? css`
                  opacity: 1;
                  transform: translate3d(-10px, -10px, 0);
              `
            : css`
                  opacity: 0;
                  transform: translate3d(-10px, -10px, 0);
              `}
    `,
    text: css`
        ${typography.card.link};

        text-transform: uppercase;

        text-decoration: none;
        color: ${({ theme }) => theme.colors.purple.light};
        ${queryShit({
            tablet: css`
                font-size: 15px;
            `,
            mobile: css`
                font-size: 12px;
            `,
        })};
        margin: 0;
    `,
};

const AnnouncementLink: FC<AnnouncementLinkProps> = ({ linkAnnouncement }) => {
    const [isHovered, setIsHovered] = useState(false);
    const isVisible = useFontLoader();

    return (
        <motion.a
            href={linkAnnouncement.link}
            css={styles.root}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <ImageController
                isHovered={isHovered}
                images={[linkAnnouncement.image]}
                intersectOption={{ threshold: 0 }}
            />

            <div css={styles.textRoot(isVisible)}>
                <h1 css={styles.text}>{linkAnnouncement.text}</h1>
            </div>
        </motion.a>
    );
};

export default AnnouncementLink;
