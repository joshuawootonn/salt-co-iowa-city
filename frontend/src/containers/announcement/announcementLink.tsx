import React, { FC, useState } from 'react';
import { css } from 'styled-components/macro';
import { Announcement } from '../../models/announcement';
import { motion } from 'framer-motion';
import typography from '../../components/typography';
import { queryShit } from '../../components/useScreenType';
import { useFontLoader } from '../../context/fontLoader';
import ImageController from '../../components/image';
import { useAnimationProp } from '../../helpers/animation';

interface AnnouncementLinkProps {
    linkAnnouncement: Announcement;
    isOrchestrated?: boolean;
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
        cursor: pointer;
    `,
    textRoot: css`
        background-color: ${({ theme }) => theme.colors.backgroundTransparent};
        padding: 20px;

        border: 2px solid ${({ theme }) => theme.colors.purple.lightest};

        position: absolute;
        z-index: 10;
        top: 0;
        left: 0;
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

const AnnouncementLink: FC<AnnouncementLinkProps> = ({
    linkAnnouncement,
    isOrchestrated,
}) => {
    const mobileAnimation = {
        initial: {
            x: -20,
            y: 0,
        },
        variants: {
            entered: {
                x: -10,
                y: -10,
            },
        },
    };
    const desktopAnimation = {
        initial: {
            x: -40,
            y: 0,
        },
        variants: {
            entered: {
                x: -20,
                y: -20,
            },
        },
    };

    const animationProps = useAnimationProp(
        {
            initial: {
                opacity: 0,
            },
            variants: {
                entered: {
                    opacity: 1,
                },
            },
            transition: { type: 'spring', duration: 1, bounce: 0 },
        },
        {
            mobile: mobileAnimation,
            tablet: mobileAnimation,
            desktop: desktopAnimation,
        }
    );

    return (
        <ImageController
            css={styles.root}
            href={linkAnnouncement.link}
            images={[linkAnnouncement.image]}
            isOrchestrated={isOrchestrated}
            intersectOption={{ threshold: 0 }}
        >
            <motion.div {...animationProps} css={styles.textRoot}>
                <h1 css={styles.text}>{linkAnnouncement.text}</h1>
            </motion.div>
        </ImageController>
    );
};

export default AnnouncementLink;
